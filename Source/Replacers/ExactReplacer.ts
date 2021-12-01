// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Replacer } from './Replacer';

/**
 * Represents a {@link Replacer} that replaces exact matches of a string with another string.
 */
export class ExactReplacer extends Replacer {
    constructor(
        private readonly _match: string,
        private readonly _replacement: string
    ) {
        super();
    }

    /** @inheritdoc */
    protected getExpressionFor(): RegExp {
        return new RegExp(this._match);
    }

    /** @inheritdoc */
    protected getReplacementFor(): string {
        return this._replacement;
    }
}
