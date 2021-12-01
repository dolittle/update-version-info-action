// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Replacement } from '../Configuration/Replacement';
import { PerformedReplacement } from '../PerformedReplacement';
import { IReplacer } from './IReplacer';
import { ReplacerResult } from './ReplacerResult';

/**
 * Represents an abstract implementation of {@link IReplacer}.
 */
export abstract class Replacer implements IReplacer {
    /**
     * Initialises a new instance of the {@link Replacer} class.
     * @param replacement The {@link Replacement} that this replacer performs replacements for.
     */
    constructor(
        protected readonly replacement: Replacement
    ) {}

    /** @inheritdoc */
    execute(path: string, contents: string): ReplacerResult {
        let modified = contents;
        const replacements: PerformedReplacement[] = [];

        while (true) {
            const match = this.getExpressionFor(path).exec(modified);

            if (!match) {
                break;
            }

            const replaceWith = this.getValueFor(path);
            modified = modified.slice(0, match.index) + replaceWith + modified.slice(match.index + match[0].length);

            replacements.push({
                replacement: this.replacement,
                before: match[0],
                after: replaceWith,
            });
        }

        return { replacements, contents: modified };
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
    protected abstract getValueFor(path: string): string;
}
