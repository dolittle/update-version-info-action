// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { getBooleanInput, getInput } from '@actions/core';
import semver, { SemVer } from 'semver';
import { Logger } from '@dolittle/github-actions.shared.logging';
import { ReplacementConfig } from './Configuration/ReplacementConfig';
import { isReplacement, Replacement } from './Configuration/Replacement';
import { isReplacementType, ReplacementType } from './Configuration/ReplacementType';

/**
 * Represents the inputs to the action.
 */
export class Inputs {
    /**
     * Initialises a new instance of the {@link Inputs} class.
     * @param version The version to update the version info files with.
     * @param filesToUpdate The version info files to update.
     * @param replacements The replacements to perform.
     * @param allowMultipleReplacements Whether or not to allow multiple replacements to occur in a file.
     * @param allowNoReplacements Whether or not to allow no replacements to occur in a file.
     */
    constructor(
        readonly version: SemVer,
        readonly filesToUpdate: string[],
        readonly replacements: ReplacementConfig[],
        readonly allowMultipleReplacements: boolean,
        readonly allowNoReplacements: boolean
    ) {}

    /**
     * Logs the values of the inputs to the provided logger.
     * @param logger The {@link Logger} to write to.
     */
    log(logger: Logger): void {
        logger.info('Inputs:');
        logger.info(`  version: '${this.version}'`);
        logger.info(`  files-to-update: '${this.filesToUpdate.join(', ')}'`);
        logger.info('  replacements:');
        this.replacements.forEach((replacement => {
            logger.info(`    ${replacement.replacement} will replace ${replacement.match} using ${replacement.type}`);
        }));
        logger.info(`  allow-multiple-replacements: ${this.allowMultipleReplacements}`);
        logger.info(`  allow-no-replacements: ${this.allowNoReplacements}`);
    }

    /**
     * Parses the inputs provided to the action.
     * @returns The parsed {@link Inputs}.
     */
    static parse(): Inputs {
        return new Inputs(
            this.getVersion(),
            this.getFilesToUpdate(),
            this.getReplacements(),
            this.getOptionalBooleanInput('allow-multiple-replacements'),
            this.getOptionalBooleanInput('allow-no-replacements')
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

    private static getReplacements(): ReplacementConfig[] {
        const input = getInput('replacements', { required: false });

        const configs: ReplacementConfig[] = [];
        for (const replacement of this.splitTrimIgnoreEmpty(input, ','))
        {
            if (isReplacement(replacement)) {
                const config = this.getReplacementConfig(replacement);
                configs.push(config);
            } else {
                throw new Error(`The provided replacement ${replacement} is not a valid replacement`);
            }
        }

        if (configs.length > 0) {
            return configs;
        }

        return [
            this.getReplacementConfig('major'),
            this.getReplacementConfig('minor'),
            this.getReplacementConfig('patch'),
            this.getReplacementConfig('prerelease'),
        ];
    }

    private static getReplacementConfig(replacement: Replacement): ReplacementConfig {
        const typeInput = getInput(replacement + '-type', { required: false }).trim();

        if (typeInput !== '' && !isReplacementType(typeInput)) {
            throw new Error(`The provided replacement type ${typeInput} for ${replacement} is not a valid replacement type`);
        }

        const type = typeInput !== '' ? typeInput : this.getDefaultReplacementType(replacement);

        const matchInput = getInput(replacement + '-match', { required: false }).trim();

        const match = matchInput !== '' ? matchInput : this.getDefaultReplacementMatch(replacement);

        return { replacement, type, match };
    }

    private static getDefaultReplacementType(replacement: Replacement): ReplacementType {
        switch (replacement) {
            case 'major':
            case 'minor':
            case 'patch':
                return 'number';
            case 'prerelease':
                return 'string';
        }

        throw new Error(`No default replacement type defined for ${replacement}`);
    }

    private static getDefaultReplacementMatch(replacement: Replacement): string {
        switch (replacement) {
            case 'major':
                return '377';
            case 'minor':
                return '389';
            case 'patch':
                return '368';
            case 'prerelease':
                return 'PRERELEASE';
        }

        throw new Error(`No default replacement match defined for ${replacement}`);
    }

    private static splitTrimIgnoreEmpty(input: string, separator: string | RegExp): string[] {
        const split = input.split(separator);
        const trimmed = split.map(_ => _.trim());
        const filtered = trimmed.filter(_ => _.length > 0);
        return filtered;
    }

    private static getOptionalBooleanInput(name: string): boolean {
        if (getInput(name, { required: false }) === '') {
            return false;
        }

        return getBooleanInput(name);
    }
}
