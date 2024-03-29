// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ILogger } from '@dolittle/github-actions.shared.logging';
import fs from 'fs';

import { IReplacer } from './Replacers/IReplacer';
import { IVersionInfoFile } from './IVersionInfoFile';
import { PerformedReplacement } from './PerformedReplacement';

/**
 * Represents an implementation of {@link IVersionInfoFile} that uses the local file system.
 */
export class VersionInfoFile implements IVersionInfoFile {
    private _hasLoadedContents: boolean = false;
    private _originalContents: string | undefined;
    private _modifiedContents: string | undefined;

    /** @inheritdoc */
    readonly performed: PerformedReplacement[] = [];

    /**
     * Initialises a new instance of the {@link VersionInfoFile} class.
     * @param {string} path - The path of the file on the local file system.
     * @param {ILogger} _logger - The {@link Logger} to use for logging.
     */
    constructor(
        readonly path: string,
        private readonly _logger: ILogger
    ) {}

    /**
     * Loads the contents of the file on the local file system to memory.
     * @returns {Promise<void>} - A {@link Promise} that represents the asynchronous operation.
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
            const result = replacer.execute(this.path, this._modifiedContents!);
            this._modifiedContents = result.contents;
            this.performed.push(...result.replacements);
        }
    }

    /** @inheritdoc */
    persist(): Promise<void> {
        return new Promise((resolve, reject) => {
            if (!this._hasLoadedContents) {
                reject(new Error(`The file ${this.path} has not been loaded. It needs to be loaded before it can be persisted.`));
            }

            this._logger.debug(`Writing new contents of file to ${this.path}`);

            fs.writeFile(this.path, this._modifiedContents!, { encoding: 'utf-8' }, (error) => {
                if (!error) {
                    resolve();
                } else {
                    reject(error);
                }
            });
        });
    }

    /** @inheritdoc */
    toString(): string {
        return this.path;
    }
}
