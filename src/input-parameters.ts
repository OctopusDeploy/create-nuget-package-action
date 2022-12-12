import { getInput, getMultilineInput } from '@actions/core'

export interface InputParameters {
  packageId: string
  version: string
  outputFolder: string
  basePath: string
  files: string[]
  description: string
  authors: string[]
  releaseNotes?: string[]
}

export function getInputParameters(): InputParameters {
  const parameters: InputParameters = {
    packageId: getInput('package_id', { required: true }),
    version: getInput('version', { required: true }),
    outputFolder: getInput('output_folder', { required: true }),
    basePath: getInput('base_path', { required: true }),
    files: getMultilineInput('files', { required: true }),
    description: getInput('nuspec_description', { required: true }),
    authors: getMultilineInput('nuspec_authors', { required: true }).map(p => p.trim()),
    releaseNotes: getMultilineInput('nuspec_release_notes').map(p => p.trim()) || undefined
  }

  return parameters
}
