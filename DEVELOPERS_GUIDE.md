# Building for testing

To test a branch in GitHub Actions, an updated `dist/index.js` file is required.

```
npm run build
git add dist/.
git commit -m "updating index.js"
git log -q -n 1 dist/index.js | less -F
```

From the log output take note of the commit hash and push to GitHub

In a test GitHub action you can use the branched build of the action by referencing the branch or commit hash, see [here](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsuses) for details on the `uses` syntax.

```
- name: Create Nuget Package for Octopus Deploy
      # You may pin to the exact commit or the version.
        uses: OctopusDeploy/create-nuget-package-action@my-branch
        with:
          package_id: output
          version: 1.0.0
          nuspec_description: the package description
          nuspec_authors: |
            author 1
            author 2
          nuspec_release_notes: |
            This is a multiline
            release note
          output_folder: ./pack
          base_path: .
          files: |
            **/*
```
