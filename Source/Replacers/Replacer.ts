// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IReplacer } from './IReplacer';
import { ReplacerResult } from './ReplacerResult';

/**
 * Represents an abstract implementation of {@link IReplacer}.
 */
export abstract class Replacer implements IReplacer {

    constructor(
        private readonly _replacement: string
    ) {}

    /** @inheritdoc */
    execute(contents: string): ReplacerResult {
        let modified = contents;
        let replacements = 0;

        while (true) {
            const match = this.expression.exec(modified);

            if (!match) {
                break;
            }

            replacements += 1;
            modified = modified.slice(0, match.index) + this._replacement + modified.slice(match.index + match[0].length);
        }

        return { contents: modified, replacements };
    }

    /**
     * Gets the {@link RegExp} to use for finding replacements.
     */
    protected abstract get expression(): RegExp;
}
