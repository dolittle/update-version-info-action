// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { setFailed } from '@actions/core';
import { Logger } from '@dolittle/github-actions.shared.logging';
import { Coordinator } from './Coordinator';

import { Inputs } from './Inputs';
import { ReplacementValues } from './ReplacementValues';
import { ReplacerFactory } from './ReplacerFactory';
import { ValidatePerformedReplacements } from './ValidatePerformedReplacements';
import { VersionInfoFileLoader } from './VersionInfoFileLoader';

const logger = new Logger();

run();
/**
 * Runs the action.
 */
export async function run() {
    try {
        const inputs = Inputs.parse();
        inputs.log(logger);

        const loader = new VersionInfoFileLoader(logger);
        const values = new ReplacementValues(inputs.version);
        const replacerFactory = new ReplacerFactory(values, logger);
        const validator = new ValidatePerformedReplacements(inputs.replacements, inputs.allowMultipleReplacements, inputs.allowNoReplacements);

        const coordinator = new Coordinator(loader, replacerFactory, validator);
        await coordinator.performFor(inputs.filesToUpdate, inputs.replacements);

    } catch (error: any) {
        fail(error as Error);
    }
}

function fail(error: Error) {
    logger.error(error.message);
    setFailed(error.message);
}
