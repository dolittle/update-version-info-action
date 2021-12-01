// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Replacement } from './Configuration/Replacement';
import { IValidatePerformedReplacements } from './IValidatePerformedReplacements';
import { IVersionInfoFile } from './IVersionInfoFile';

export class ValidatePerformedReplacements implements IValidatePerformedReplacements {
    constructor(
        private readonly _specifiedReplacements: Replacement[],
        private readonly _allowMultipleReplacements: boolean,
        private readonly _allowNoReplacements: boolean
    ) {}

    /** @inheritdoc */
    validateFile(file: IVersionInfoFile): void {
        for (const replacement of this._specifiedReplacements) {
            const performed = file.performed.filter(_ => _.replacement === replacement);

            if (performed.length > 1 && !this._allowMultipleReplacements) {
                throw new Error(`The replacement ${replacement} was performed multiple times in file ${file}.`);
            }

            if (performed.length < 1 && !this._allowNoReplacements) {
                throw new Error(`The replacement ${replacement} was not performed in file ${file}.`);
            }
        }
    }
}
