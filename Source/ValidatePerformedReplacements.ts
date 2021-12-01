// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ReplacementConfig } from './Configuration/ReplacementConfig';
import { IValidatePerformedReplacements } from './IValidatePerformedReplacements';
import { IVersionInfoFile } from './IVersionInfoFile';

/**
 * Represents an implementation of {@link IValidatePerformedReplacements} that checks for multiple or no replacements for a set of specified replacements.
 */
export class ValidatePerformedReplacements implements IValidatePerformedReplacements {
    constructor(
        private readonly _specifiedReplacements: ReplacementConfig[],
        private readonly _allowMultipleReplacements: boolean,
        private readonly _allowNoReplacements: boolean
    ) {}

    /** @inheritdoc */
    validateFile(file: IVersionInfoFile): void {
        for (const config of this._specifiedReplacements) {
            const performed = file.performed.filter(_ => _.replacement === config.replacement);

            if (performed.length > 1 && !this._allowMultipleReplacements) {
                throw new Error(`The replacement ${config.replacement} was performed multiple times in file ${file}.`);
            }

            if (performed.length < 1 && !this._allowNoReplacements) {
                throw new Error(`The replacement ${config.replacement} was not performed in file ${file}.`);
            }
        }
    }
}
