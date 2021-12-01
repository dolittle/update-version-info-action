// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { PerformedReplacement } from '../PerformedReplacement';
import { IReplacer } from './IReplacer';

/**
 * Represents the results of executing a {@link IReplacer}.
 */
export type ReplacerResult = {
    readonly replacements: PerformedReplacement[];
    readonly contents: string;
};
