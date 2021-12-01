// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { LanguageSpecificReplacer } from './LanguageSpecificReplacer';

/**
 * Represents a {@link LanguageSpecificReplacer} that replaces string literals with another string.
 */
export class StringReplacer extends LanguageSpecificReplacer {
    /** @inheritdoc */
    protected wrapLiteral(value: string, path: string): string {
        const quote = this.getStringQuoteFor(path);
        return quote + value + quote;
    }

    private getStringQuoteFor(path: string): string {
        if (path.match(/.[jt]s$/i)) {
            return '\'';
        }

        if (path.match(/.go/i)) {
            return '"';
        }

        if (path.match(/.cs/i)) {
            return '"';
        }

        return '"';
    }
}
