// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { setFailed } from '@actions/core';
import { Logger } from '@dolittle/github-actions.shared.logging';

import { Inputs } from './inputs';

const logger = new Logger();

run();
export async function run() {
    try {
        const inputs = Inputs.parse();
        inputs.log(logger);

        // Put your code in here
    } catch (error) {
        fail(error as Error);
    }
}

function fail(error: Error) {
    logger.error(error.message);
    setFailed(error.message);
}
