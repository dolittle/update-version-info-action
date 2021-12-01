// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

/**
 * Represents a replacement that can be performed in a version info file.
 */
export type Replacement = 'MAJOR' | 'MINOR' | 'PATCH' | 'PRERELEASE' | 'FULL';

/**
 * Checks whether the provided value is a {@link Replacement}.
 * @param value The value to check.
 * @returns A value indicating whether the value is a valid {@link Replacement}.
 */
export const isReplacement = (value: string): value is Replacement => {
    switch (value) {
        case 'MAJOR':
        case 'MINOR':
        case 'PATCH':
        case 'PRERELEASE':
        case 'FULL':
            return true;
        default:
            return false;
    }
};

/**
 * Represents a set of replacements that can be performed in a version info file.
 */
export type Replacements = Replacement[];
