# [1.0.1] - 2021-12-1 [PR: #2](https://github.com/dolittle/update-version-info-action/pull/2)
## Summary

The `semver` library exposes the `prerelease` of the parsed versions as an array of elements. `.toString()` joined these with a comma making the replaced prerelease value strange. This PR fixes that by using `.join('.')` instead.

### Fixed

- The replaced `prerelease` strings now contains `.` instead of `,`.


# [1.0.0] - 2021-12-1 [PR: #1](https://github.com/dolittle/update-version-info-action/pull/1)
## Summary

Introducing the "Update VersionInfo Files" action. This GitHub action can be used to replace values in source code from the current build pipeline to include build information in published binaries.

See the [README](README.md) for a description on how to use it.


