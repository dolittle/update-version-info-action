// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ReplacerResult } from './ReplacerResult';

/**
 * Defines a system that can replace contents.
 */
export interface IReplacer {
    /**
     * Executes the replacements on the provided contents.
     * @param contents The contents to modify with replacements.
     */
    execute(contents: string): ReplacerResult;
}
