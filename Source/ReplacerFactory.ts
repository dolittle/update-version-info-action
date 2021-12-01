// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Logger } from '@dolittle/github-actions.shared.logging';
import { Replacement } from './Configuration/Replacement';
import { ReplacementType } from './Configuration/ReplacementType';
import { IReplacementValues } from './IReplacementValues';
import { IReplacerFactory } from './IReplacerFactory';
import { ExactReplacer } from './Replacers/ExactReplacer';
import { IReplacer } from './Replacers/IReplacer';
import { NumberReplacer } from './Replacers/NumberReplacer';
import { StringReplacer } from './Replacers/StringReplacer';

/**
 * Defines a system that can create instances of {@link IReplacer}.
 */
export class ReplacerFactory implements IReplacerFactory {
    constructor(
        private readonly _values: IReplacementValues,
        private readonly _logger: Logger
    ) {}

    /** @inheritdoc */
    createFor(replacement: Replacement, type: ReplacementType, match: string): IReplacer {
        const valueToReplace = this._values.getValueFor(replacement);

        switch (type) {
            case 'exact':
                this._logger.debug(`Creating ${ExactReplacer.name} for replacement ${replacement}`);
                return new ExactReplacer(replacement, match, valueToReplace);
            case 'string':
                this._logger.debug(`Creating ${StringReplacer.name} for replacement ${replacement}`);
                return new StringReplacer(replacement, match, valueToReplace);
            case 'number':
                this._logger.debug(`Creating ${NumberReplacer.name} for replacement ${replacement}`);
                return new NumberReplacer(replacement, match, valueToReplace);
        }
    }
}
