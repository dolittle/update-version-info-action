// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Replacement } from './Configuration/Replacement';
import { ReplacementType } from './Configuration/ReplacementType';
import { IReplacer } from './Replacers/IReplacer';

/**
 * Defines a system that can create instances of {@link IReplacer}.
 */
export interface IReplacerFactory {
    /**
     * Creates an {@link IReplacer} for the provided inputs.
     * @param replacement - The replacement to create a replacer for.
     * @param type - The replecement type to use.
     * @param match - The pattern to match in the contents.
     */
    createFor(replacement: Replacement, type: ReplacementType, match: string): IReplacer;
}
