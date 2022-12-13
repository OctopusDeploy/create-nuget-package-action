import { dirSync, setGracefulCleanup } from 'tmp'

setGracefulCleanup()
const tmpdir = dirSync({ template: 'create-nuget-package-XXXXXX' })
process.env = Object.assign(process.env, {
  INPUT_PACKAGE_ID: 'testPackage',
  INPUT_VERSION: '1.0.0',
  INPUT_OUTPUT_FOLDER: 'packaging',
  INPUT_BASE_PATH: 'published',
  INPUT_FILES: '**/*',
  INPUT_NUSPEC_DESCRIPTION: 'nuspec description',
  INPUT_NUSPEC_AUTHORS: 'author 1 \n author b',
  INPUT_NUSPEC_RELEASE_NOTES: 'release note line 1 \n release note line 2',
  RUNNER_TEMP: tmpdir.name,
  RUNNER_TOOL_CACHE: tmpdir.name,
  GITHUB_ACTION: '1'
})
