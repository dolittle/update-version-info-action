// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Replacer } from './Replacer';

/**
 * Represents an abstract implementation of {@link Replacer} that handles language specific literal representations.
 */
export abstract class LanguageSpecificReplacer extends Replacer {
    constructor(
        protected readonly _match: string,
        protected readonly _replacement: string
    ) {
        super();
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
    protected getReplacementFor(path: string): string {
        return this.wrapLiteral(this._replacement, path);
    }
}
