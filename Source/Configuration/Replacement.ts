// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

/**
 * Represents a replacement that can be performed in a version info file.
 */
export type Replacement = 'major' | 'minor' | 'patch' | 'prerelease' | 'full';

/**
 * Checks whether the provided value is a {@link Replacement}.
 * @param {string} value - The value to check.
 * @returns {boolean} A value indicating whether the value is a valid {@link Replacement}.
 */
export const isReplacement = (value: string): value is Replacement => {
    switch (value) {
        case 'major':
        case 'minor':
        case 'patch':
        case 'prerelease':
        case 'full':
            return true;
        default:
            return false;
    }
};
