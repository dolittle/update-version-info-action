// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Replacer } from './Replacer';

/**
 * Represents a {@link Replacer} that replaces string literals with another string.
 */
export class StringReplacer extends Replacer {

    constructor(
        private readonly _match: string,
        _replacement: string
    ) {
        super(_replacement);
    }

    protected get expression(): RegExp {
        return new RegExp(`"${this._match}"`);
    }

}
