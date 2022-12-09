import { Logger, NuGetPackageBuilder } from '@octopusdeploy/api-client'
import path from 'path'
import { InputParameters } from './input-parameters'

export async function createPackageFromInputs(parameters: InputParameters, logger: Logger): Promise<string> {
  const builder = new NuGetPackageBuilder()
  const packageFilename = await builder.pack({
    packageId: parameters.packageId,
    version: parameters.version,
    outputFolder: parameters.outputFolder,
    inputFilePatterns: parameters.files,
    nuspecArgs: {
      description: parameters.description,
      authors: parameters.authors,
      releaseNotes: parameters.releaseNotes?.join('\n')
    },
    overwrite: true,
    logger
  })

  return path.join(parameters.outputFolder, packageFilename)
}
