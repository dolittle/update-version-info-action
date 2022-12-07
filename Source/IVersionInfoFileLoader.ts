// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IVersionInfoFile } from './IVersionInfoFile';

/**
 * Defines a system that can load instances of {@link IVersionInfoFile}.
 */
export interface IVersionInfoFileLoader {
    /**
     * Loads all the files from the provided paths.
     * @param files - The paths of the files to load.
     */
    loadAll(files: string[]): Promise<IVersionInfoFile[]>;
}
