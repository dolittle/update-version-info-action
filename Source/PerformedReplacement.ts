// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Replacement } from './Configuration/Replacement';

/**
 * Represents a replacement that was performed during the execution of a replacer.
 */
export type PerformedReplacement = {
    readonly replacement: Replacement;
    readonly before: string;
    readonly after: string;
};
