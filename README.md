# create-nuget-package-action

<img alt= "" src="https://github.com/OctopusDeploy/create-nuget-package-action/raw/main/assets/github-actions-octopus.png" />

This is a GitHub Action to create a NuGet package to push [Octopus Deploy](https://octopus.com/).

## Examples

```yml
steps:
  - uses: actions/checkout@v3
  - name: Install Octopus CLI 🐙
    uses: OctopusDeploy/install-octopus-cli-action@v1
    with:
      version: latest
  - name: Create a NuGet package 🐙
    uses: OctopusDeploy/create-nuget-package-action@v3
    with:
      package_id: 'DemoPackage'
      version: '1.0.0'
      output_folder: 'packaging'
      files: |
        published/**/*.*
      nuspec_description: package description
      nuspec_authors: |
        author 1
        author 2
      nuspec_release_notes: |
        This is a multiline
        release note
```

## 📥 Inputs

| Name                   | Description                                                                          |
| :--------------------- | :----------------------------------------------------------------------------------- |
| `package_id`           | **Required.** Package id.                                                            |
| `version`              | **Required.** Package version.                                                       |
| `output_folder`        | **Required.** The folder to put the resulting package in.                            |
| `files`                | **Required.** Multi-line list of files to include in the package. Supports globbing. |
| `nuspec_description`   | **Required.** Description to include in the Nuspec file.                             |
| `nuspec_authors`       | **Required.** Multi-line list of authors to include in the Nuspec file.              |
| `nuspec_release_notes` | Release notes to include in the Nuspec file.                                         |

## 📤 Outputs

| Name           | Description                                         |
| :------------- | :-------------------------------------------------- |
| `package_file` | The full path to the package file that was created. |

## 🤝 Contributions

Contributions are welcome! :heart: Please read our [Contributing Guide](CONTRIBUTING.md) for information about how to get involved in this project.
