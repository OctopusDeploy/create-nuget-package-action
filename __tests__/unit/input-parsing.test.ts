import { getInputParameters } from '../../src/input-parameters'

test('get input parameters', () => {
  const inputParameters = getInputParameters()
  expect(inputParameters).toBeDefined()
  expect(inputParameters.files).toBeDefined()
  expect(inputParameters.files).toHaveLength(1)
  expect(inputParameters.files).toContain('published/**/*')
  expect(inputParameters.description).toBe('nuspec description')
  expect(inputParameters.authors).toHaveLength(2)
  expect(inputParameters.authors[0]).toBe('author 1')
  expect(inputParameters.authors[1]).toBe('author b')
  expect(inputParameters.releaseNotes).toHaveLength(2)
  expect(inputParameters.releaseNotes).toBeDefined()
  expect(inputParameters.releaseNotes?.[0]).toBe('release note line 1')
  expect(inputParameters.releaseNotes?.[1]).toBe('release note line 2')
})
