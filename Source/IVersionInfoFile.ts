// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IReplacer } from './Replacers/IReplacer';
import { ReplacerResult } from './Replacers/ReplacerResult';

/**
 * Defines a version info file where replacments can be executed and the changes persisted.
 */
export interface IVersionInfoFile {
    /**
     * Gets the results of the executed replacements.
     */
    readonly results: readonly ReplacerResult[];

    /**
     * Executes the provided replacers and stores the results.
     * @param replacers The instances of {@link IReplacer} to execute.
     */
    execute(replacers: IReplacer[]): void;

    /**
     * Persists the executed replacements to the file.
     */
    persist(): Promise<void>;
}
