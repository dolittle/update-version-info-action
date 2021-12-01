// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

/**
 * Defines a system that can generate {@link RegExp} patterns to match replacements for a file.
 */
export interface IPatternMatcherGenerator {
    generatePatternFor(file: string): RegExp;
}
