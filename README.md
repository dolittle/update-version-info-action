# GitHub Action - Update VersionInfo Files
This GitHub action updates version info in source files based on the provided semantic version. This can be used before building to include the build information in released binaries.

![Github JavaScript Actions CI/CD](https://github.com/dolittle/repository-here/workflows/Github%20JavaScript%20Actions%20CI/CD/badge.svg)

### Pre requisites
Create a workflow `.yml` file in your `.github/workflows` directory. An [example workflow](#example-workflow) is available below.

For more information, reference the GitHub Help Documentation for [Creating a workflow file](https://help.github.com/en/articles/configuring-a-workflow#creating-a-workflow-file)

### Inputs
- `version` (required): Version of the release to use to replace values in the specified files.
- `files-to-update` (required): A comma or newline separated list of files to replace values in.
- `allow-multiple-replacements`: Whether or not to allow multiple replacements of each value in a file. Defaults to 'false'.
- `allow-no-replacements`: Whether or not to allow no replacements of each value in a file. Defaults to 'false'.
- `replacements`: A comma separated list of values to replace. Items can be any of (major, minor, patch, prerelease, full). Defaults to 'major, minor, patch, prerelease'.
- `major-type`: The type of literal to replace for the 'major' replacement. Can be (string, number, exact). Defaults to 'number'.
- `major-match`: The value to find for the 'major' replacement. Defaults to '377'.
- `minor-type`: The type of literal to replace for the 'minor' replacement. Can be (string, number, exact). Defaults to 'number'.
- `minor-match`: The value to find for the 'minor' replacement. Defaults to '389'.
- `patch-type`: The type of literal to replace for the 'patch' replacement. Can be (string, number, exact). Defaults to 'number'.
- `patch-match`: The value to find for the 'patch' replacement. Defaults to '368'.
- `prerelease-type`: The type of literal to replace for the 'prerelease' replacement. Can be (string, number, exact). Defaults to 'string'.
- `prerelease-match`: The value to find for the 'prerelease' replacement. Defaults to 'PRERELEASE'.
- `full-type`: The type of literal to replace for the 'full' replacement. Can be (string, number, exact). Defaults to 'string'.
- `full-match`: The value to find for the 'full' replacement. Defaults to '377.389.368-PRERELEASE'.

### Outputs
This action has no outputs.

### Example Workflow
```yaml
on:
  push:
    branches:
    - '**'
  pull_request:
    types: [closed]

name: GitHub action workflow name

jobs:
  context:
    name: Job name
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Establish context
        id: context
        uses: dolittle/establish-context-action@v2
      - name: Increment version
        id: increment-version
        uses: dolittle/increment-version-action@v2
        with:
          version: ${{ steps.context.outputs.current-version }}
          release-type: ${{ steps.context.outputs.release-type }}
      - name: Update versioninfo
        uses: dolittle/update-version-info-action@v1
        with:
          version: ${{ steps.context.outputs.current-version }}
          files-to-update: |
            Source/VersionInfo.cs
            Source/VersionInfo.go
            Source/VersionInfo.ts
            Source/VersionInfo.js
        
```
## Contributing
We're always open for contributions and bug fixes!

### Pre requisites
node <= 12
yarn
git
