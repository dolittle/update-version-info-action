// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IVersionInfoFile } from './IVersionInfoFile';
import { PerformedReplacement } from './PerformedReplacement';

/**
 * Defines a system that can validate performed replacements before persisting.
 */
export interface IValidatePerformedReplacements {
    /**
     * Validates the list of {@link PerformedReplacement} for a specified file, throwing an error if not considered valid.
     * @param file - The {@link IVersionInfoFile} to validate.
     */
    validateFile(file: IVersionInfoFile): void;
}
