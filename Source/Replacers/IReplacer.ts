// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ReplacerResult } from './ReplacerResult';

/**
 * Defines a system that can replace contents of a file.
 */
export interface IReplacer {
    /**
     * Executes the replacements on the provided contents.
     * @param path - The the path of the file to modify.
     * @param contents - The contents to modify with replacements.
     */
    execute(path: string, contents: string): ReplacerResult;
}
