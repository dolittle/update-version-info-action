// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Replacement } from '../Configuration/Replacement';
import { Replacer } from './Replacer';

/**
 * Represents an abstract implementation of {@link Replacer} that handles language specific literal representations.
 */
export abstract class LanguageSpecificReplacer extends Replacer {
    constructor(
        replacement: Replacement,
        protected readonly _match: string,
        protected readonly _value: string
    ) {
        super(replacement);
    }

    /**
     * Wraps a literal value for the specified file type.
     * @param value The literal value to wrap.
     * @param path The path of the file to replace contents of.
     */
    protected abstract wrapLiteral(value: string, path: string): string;

    /** @inheritdoc */
    protected getExpressionFor(path: string): RegExp {
        return new RegExp(this.wrapLiteral(this._match, path));
    }

    /** @inheritdoc */
    protected getValueFor(path: string): string {
        return this.wrapLiteral(this._value, path);
    }
}
