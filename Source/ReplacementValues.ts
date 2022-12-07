// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { SemVer } from 'semver';

import { Replacement } from './Configuration/Replacement';
import { IReplacementValues } from './IReplacementValues';

/**
 * Represents an implementation of {@link IReplacementValues} that returns replacement values from a {@link SemVer}.
 */
export class ReplacementValues implements IReplacementValues {
    /**
     * Initialises a new instance of the {@link ReplacementValues} class.
     * @param {Replacement} _version - The {@link SemVer} to get replacement values from.
     */
    constructor(
        private readonly _version: SemVer
    ) {}

    /** @inheritdoc */
    getValueFor(replacement: Replacement): string {
        switch (replacement) {
            case 'major':
                return this._version.major.toString();
            case 'minor':
                return this._version.minor.toString();
            case 'patch':
                return this._version.patch.toString();
            case 'prerelease':
                return this._version.prerelease.join('.');
            case 'full':
                return this._version.format();
        }
    }
}
