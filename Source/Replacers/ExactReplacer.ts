// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Replacement } from '../Configuration/Replacement';
import { Replacer } from './Replacer';

/**
 * Represents a {@link Replacer} that replaces exact matches of a string with another string.
 */
export class ExactReplacer extends Replacer {
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
