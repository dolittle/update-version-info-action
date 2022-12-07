// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Replacement } from '../Configuration/Replacement';
import { Replacer } from './Replacer';

/**
 * Represents a {@link Replacer} that replaces exact matches of a string with another string.
 */
export class ExactReplacer extends Replacer {
    /**
     * Initialises a new instance of the {@link ExactReplacer} class.
     * @param {Replacement}replacement - The {@link Replacement} that this replacer performs replacements for.
     * @param {string} _match - The string used to match the exact values to replace.
     * @param {string} _value - The value used to replace the matches with.
     */
    constructor(
        replacement: Replacement,
        private readonly _match: string,
        private readonly _value: string
    ) {
        super(replacement);
    }

    /** @inheritdoc */
    protected getExpressionFor(): RegExp {
        return new RegExp(this._match);
    }

    /** @inheritdoc */
    protected getValueFor(): string {
        return this._value;
    }
}
