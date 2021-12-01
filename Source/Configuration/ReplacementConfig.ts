// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Replacement } from './Replacement';
import { ReplacementType } from './ReplacementType';

/**
 * Represents the configuration of a replacement.
 */
export type ReplacementConfig = {
    readonly replacement: Replacement;
    readonly type: ReplacementType;
    readonly match: string;
};
