// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { PerformedReplacement } from './PerformedReplacement';
import { IReplacer } from './Replacers/IReplacer';

/**
 * Defines a version info file where replacments can be executed and the changes persisted.
 */
export interface IVersionInfoFile {
    /**
     * Gets the list of {@link PerformedReplacement} that has occured from executing replacers.
     */
    readonly performed: readonly PerformedReplacement[];

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
