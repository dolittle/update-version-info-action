// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Logger } from '@dolittle/github-actions.shared.logging';
import { IVersionInfoFile } from './IVersionInfoFile';
import { IVersionInfoFileLoader } from './IVersionInfoFileLoader';
import { VersionInfoFile } from './VersionInfoFile';

/**
 * Represents an implementation of {@link IVersionInfoFileLoader} that loads files from the local file system.
 */
export class VersionInfoFileLoader implements IVersionInfoFileLoader {
    /**
     * Initialises a new instance of the {@link VersionInfoFileLoader} class.
     * @param _logger The {@link Logger} to use for logging.
     */
    constructor(
        private readonly _logger: Logger
    ) {}

    /** @inheritdoc */
    async loadAll(files: string[]): Promise<IVersionInfoFile[]> {
        const loaded: IVersionInfoFile[] = [];

        for (const file of files) {
            const versionInfoFile = new VersionInfoFile(file, this._logger);
            this._logger.debug(`Loading file on path '${file}'`);
            await versionInfoFile.load();
            loaded.push(versionInfoFile);
        }

        this._logger.debug(`Loaded ${loaded.length} files.`);
        return loaded;
    }
}
