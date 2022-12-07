// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

/**
 * Represents a replacement types can be performed in a version info file.
 */
 export type ReplacementType = 'number' | 'string' | 'exact';

/**
 * Checks whether the provided value is a {@link ReplacementType}.
 * @param {string} value - The value to check.
 * @returns {boolean} A value indicating whether the value is a valid {@link ReplacementType}.
 */
export const isReplacementType = (value: string): value is ReplacementType => {
    switch (value) {
        case 'number':
        case 'string':
        case 'exact':
            return true;
        default:
            return false;
    }
};
