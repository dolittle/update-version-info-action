// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Logger } from '@dolittle/github-actions.shared.logging';
import fs from 'fs';

import { IReplacer } from './Replacers/IReplacer';
import { ReplacerResult } from './Replacers/ReplacerResult';
import { IVersionInfoFile } from './IVersionInfoFile';

/**
 * Represents an implementation of {@link IVersionInfoFile} that uses the local file system.
 */
export class VersionInfoFile implements IVersionInfoFile {
    private _hasLoadedContents: boolean = false;
    private _originalContents: string | undefined;
    private _modifiedContents: string | undefined;

    /** @inheritdoc */
    readonly results: ReplacerResult[] = [];

    /**
     * Initialises a new instance of the {@link VersionInfoFile} class.
     * @param path The path of the file on the local file system.
     * @param _logger The {@link Logger} to use for logging.
     */
    constructor(
        readonly path: string,
        private readonly _logger: Logger
    ) {}

    /**
     * Loads the contents of the file on the local file system to memory.
     * @returns A {@link Promise} that represents the asynchronous operation.
     */
    load(): Promise<void> {
        return new Promise((resolve, reject) => {
            this._logger.debug(`Reading contents of file from ${this.path}`);

            if (this._hasLoadedContents) {
                reject(new Error(`The file ${this.path} has already been loaded. It should only be done once.`));
                return;
            }

            fs.readFile(this.path, { encoding: 'utf-8'}, (error, data) => {
                if (!error) {
                    this._hasLoadedContents = true;
                    this._originalContents = data;
                    this._modifiedContents = data;
                    resolve();
                } else {
                    reject(error);
                }
            });
        });
    }

    /** @inheritdoc */
    execute(replacers: IReplacer[]): void {
        if (!this._hasLoadedContents) {
            throw new Error(`The file ${this.path} has not been loaded. It needs to be loaded before replacements can be executed.`);
        }

        for (const replacer of replacers) {
            const result = replacer.execute(this._modifiedContents!);
            this._modifiedContents = result.contents;
            this.results.push(result);
        }
    }

    /** @inheritdoc */
    persist(): Promise<void> {
        return new Promise((resolve, reject) => {
            console.log('Will store new contents for', this.path, this._originalContents, this._modifiedContents);
        });
    }
}
