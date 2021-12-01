// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IReplacer } from './IReplacer';
import { ReplacerResult } from './ReplacerResult';

/**
 * Represents an abstract implementation of {@link IReplacer}.
 */
export abstract class Replacer implements IReplacer {
    /** @inheritdoc */
    execute(path: string, contents: string): ReplacerResult {
        let modified = contents;
        let replacements = 0;

        while (true) {
            const match = this.getExpressionFor(path).exec(modified);

            if (!match) {
                break;
            }

            replacements += 1;
            modified = modified.slice(0, match.index) + this.getReplacementFor(path) + modified.slice(match.index + match[0].length);
        }

        return { contents: modified, replacements };
    }

    /**
     * Gets the {@link RegExp} to use for finding replacements for the specified path.
     * @param path The path of the file to replace contents of.
     */
    protected abstract getExpressionFor(path: string): RegExp;

    /**
     * Get the value to replace matches with for the specified path.
     * @param path The path of the file to replace contents of.
     */
    protected abstract getReplacementFor(path: string): string;
}
