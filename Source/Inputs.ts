// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { getInput } from '@actions/core';
import semver, { SemVer } from 'semver';
import { Logger } from '@dolittle/github-actions.shared.logging';
import { isReplacement, Replacements } from './Replacements';

/**
 * Represents the inputs to the action.
 */
export class Inputs {
    /**
     * Initialises a new instance of the {@link Inputs} class.
     * @param version The version to update the version info files with.
     * @param filesToUpdate The version info files to update.
     * @param replacements The replacements to perform.
     */
    constructor(
        readonly version: SemVer,
        readonly filesToUpdate: string[],
        readonly replacements: Replacements
    ) {}

    /**
     * Logs the values of the inputs to the provided logger.
     * @param logger The {@link Logger} to write to.
     */
    log(logger: Logger): void {
        logger.info('Inputs:');
        logger.info(` version: '${this.version}'`);
        logger.info(` files-to-update: '${this.filesToUpdate.join(', ')}'`);
        logger.info(` replacements: '${this.replacements.join(', ')}'`);
    }

    /**
     * Parses the inputs provided to the action.
     * @returns The parsed {@link Inputs}.
     */
    static parse(): Inputs {
        return new Inputs(
            this.getVersion(),
            this.getFilesToUpdate(),
            this.getReplacements()
        );
    }

    private static getVersion(): SemVer {
        const input = getInput('version', { required: true });

        if (!semver.valid(input)) {
            throw new Error(`The provided version '${input}' is not a valid SemVer.`);
        }

        return semver.parse(input)!;
    }

    private static getFilesToUpdate(): string[] {
        const input = getInput('files-to-update', { required: true });

        return this.splitTrimIgnoreEmpty(input, /[,\n]/);
    }

    private static getReplacements(): Replacements {
        const input = getInput('replacements', { required: false });

        const replacements: Replacements = [];
        for (const replacement of this.splitTrimIgnoreEmpty(input, ','))
        {
            if (isReplacement(replacement)) {
                replacements.push(replacement);
            } else {
                throw new Error(`The provided replacement ${replacement} is not a valid replacement`);
            }
        }

        if (replacements.length > 0) {
            return replacements;
        }

        return [ 'MAJOR', 'MINOR', 'PATCH', 'PRERELEASE' ];
    }


    private static splitTrimIgnoreEmpty(input: string, separator: string | RegExp): string[] {
        const split = input.split(separator);
        const trimmed = split.map(_ => _.trim());
        const filtered = trimmed.filter(_ => _.length > 0);
        return filtered;
    }
}
