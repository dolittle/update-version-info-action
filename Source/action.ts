// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { setFailed } from '@actions/core';
import { Logger } from '@dolittle/github-actions.shared.logging';

import { Inputs } from './inputs';
import { ReplacementValues } from './ReplacementValues';
import { ReplacerFactory } from './ReplacerFactory';
import { ExactReplacer } from './Replacers/ExactReplacer';
import { VersionInfoFileLoader } from './VersionInfoFileLoader';

const logger = new Logger();

run();
export async function run() {
    try {
        const inputs = Inputs.parse();
        inputs.log(logger);

        const loader = new VersionInfoFileLoader(logger);
        const values = new ReplacementValues(inputs.version);
        const replacerFactory = new ReplacerFactory(values, logger);

        const files = await loader.loadAll(inputs.filesToUpdate);

        const replacers = inputs.replacements.map(({replacement, type, match}) => replacerFactory.createFor(replacement, type, match));

        for (const file of files) {
            file.execute(replacers);
            await file.persist();
        }

        // Put your code in here
    } catch (error) {
        fail(error as Error);
    }
}

function fail(error: Error) {
    logger.error(error.message);
    setFailed(error.message);
}
