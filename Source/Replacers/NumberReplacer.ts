// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { LanguageSpecificReplacer } from './LanguageSpecificReplacer';

/**
 * Represents a {@link LanguageSpecificReplacer} that replaces number literals with another string.
 */
export class NumberReplacer extends LanguageSpecificReplacer {

    /** @inheritdoc */
    protected wrapLiteral(value: string): string {
        return value;
    }
}
