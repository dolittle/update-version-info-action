// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ReplacementConfig } from './Configuration/ReplacementConfig';
import { IReplacerFactory } from './IReplacerFactory';
import { IValidatePerformedReplacements } from './IValidatePerformedReplacements';
import { IVersionInfoFileLoader } from './IVersionInfoFileLoader';

/**
 * Represents a coordinator that performs the replacement pipeline of the action.
 */
export class Coordinator {
    /**
     * Initialises a new instance of the {@link Coordinator} class.
     * @param _loader The {@link IVersionInfoFileLoader} to use to load files.
     * @param _replacers The {@link IReplacerFactory} to use to create replacers.
     * @param _validator The {@link IValidatePerformedReplacements} to use to validate performed replacements before persisting.
     */
    constructor(
        private readonly _loader: IVersionInfoFileLoader,
        private readonly _replacers: IReplacerFactory,
        private readonly _validator: IValidatePerformedReplacements
    ) {}

    /**
     * Performs the replacement pipeline for the specified files
     * @param paths The paths to the files to replace version info in.
     */
    async performFor(paths: string[], replacements: ReplacementConfig[]): Promise<void> {
        const files = await this._loader.loadAll(paths);

        const replacers = replacements.map(({replacement, type, match}) => this._replacers.createFor(replacement, type, match));

        for (const file of files) {
            file.execute(replacers);
            this._validator.validateFile(file);
        }

        for (const file of files) {
            await file.persist();
        }
    }
}
