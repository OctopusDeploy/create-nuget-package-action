import { Logger, NuGetPackageBuilder } from '@octopusdeploy/api-client'
import path from 'path'
import { InputParameters } from './input-parameters'

type createPackageResult = {
  filePath: string
  filename: string
}

export async function createPackageFromInputs(
  parameters: InputParameters,
  logger: Logger
): Promise<createPackageResult> {
  const builder = new NuGetPackageBuilder()
  const packageFilename = await builder.pack({
    packageId: parameters.packageId,
    version: parameters.version,
    outputFolder: parameters.outputFolder,
    basePath: parameters.basePath,
    inputFilePatterns: parameters.files,
    nuspecArgs: {
      description: parameters.description,
      authors: parameters.authors,
      releaseNotes: parameters.releaseNotes?.join('\n')
    },
    overwrite: true,
    logger
  })

  return { filePath: path.join(parameters.outputFolder, packageFilename), filename: packageFilename }
}
