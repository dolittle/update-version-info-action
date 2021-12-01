// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Replacement } from './Configuration/Replacement';

/**
 * Defines a system that can get replacement the value for a {@link Replacement}.
 */
export interface IReplacementValues {
    /**
     * Gets the value to replace for the provided replacement.
     * @param replacement The {@link Replacement} to get the value for.
     */
    getValueFor(replacement: Replacement): string;
}
