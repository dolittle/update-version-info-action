module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(57);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 16:
/***/ (function(module) {

module.exports = require("tls");

/***/ }),

/***/ 57:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const core_1 = __webpack_require__(470);
const github_actions_shared_logging_1 = __webpack_require__(83);
const Coordinator_1 = __webpack_require__(149);
const Inputs_1 = __webpack_require__(874);
const ReplacementValues_1 = __webpack_require__(127);
const ReplacerFactory_1 = __webpack_require__(156);
const ValidatePerformedReplacements_1 = __webpack_require__(345);
const VersionInfoFileLoader_1 = __webpack_require__(817);
const logger = new github_actions_shared_logging_1.Logger();
run();
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const inputs = Inputs_1.Inputs.parse();
            inputs.log(logger);
            const loader = new VersionInfoFileLoader_1.VersionInfoFileLoader(logger);
            const values = new ReplacementValues_1.ReplacementValues(inputs.version);
            const replacerFactory = new ReplacerFactory_1.ReplacerFactory(values, logger);
            const validator = new ValidatePerformedReplacements_1.ValidatePerformedReplacements(inputs.replacements, inputs.allowMultipleReplacements, inputs.allowNoReplacements);
            const coordinator = new Coordinator_1.Coordinator(loader, replacerFactory, validator);
            yield coordinator.performFor(inputs.filesToUpdate, inputs.replacements);
        }
        catch (error) {
            fail(error);
        }
    });
}
exports.run = run;
function fail(error) {
    logger.error(error.message);
    core_1.setFailed(error.message);
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNvdXJjZS9hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLCtDQUErQztBQUMvQyxxR0FBcUc7Ozs7Ozs7Ozs7OztBQUVyRyx3Q0FBMEM7QUFDMUMsMkZBQWlFO0FBQ2pFLCtDQUE0QztBQUU1QyxxQ0FBa0M7QUFDbEMsMkRBQXdEO0FBQ3hELHVEQUFvRDtBQUNwRCxtRkFBZ0Y7QUFDaEYsbUVBQWdFO0FBRWhFLE1BQU0sTUFBTSxHQUFHLElBQUksc0NBQU0sRUFBRSxDQUFDO0FBRTVCLEdBQUcsRUFBRSxDQUFDO0FBQ04sU0FBc0IsR0FBRzs7UUFDckIsSUFBSTtZQUNBLE1BQU0sTUFBTSxHQUFHLGVBQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM5QixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRW5CLE1BQU0sTUFBTSxHQUFHLElBQUksNkNBQXFCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakQsTUFBTSxNQUFNLEdBQUcsSUFBSSxxQ0FBaUIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDckQsTUFBTSxlQUFlLEdBQUcsSUFBSSxpQ0FBZSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM1RCxNQUFNLFNBQVMsR0FBRyxJQUFJLDZEQUE2QixDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLHlCQUF5QixFQUFFLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBRXZJLE1BQU0sV0FBVyxHQUFHLElBQUkseUJBQVcsQ0FBQyxNQUFNLEVBQUUsZUFBZSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ3hFLE1BQU0sV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUUzRTtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osSUFBSSxDQUFDLEtBQWMsQ0FBQyxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztDQUFBO0FBaEJELGtCQWdCQztBQUVELFNBQVMsSUFBSSxDQUFDLEtBQVk7SUFDdEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUIsZ0JBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsQ0FBQyIsImZpbGUiOiJhY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIERvbGl0dGxlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgc2V0RmFpbGVkIH0gZnJvbSAnQGFjdGlvbnMvY29yZSc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICdAZG9saXR0bGUvZ2l0aHViLWFjdGlvbnMuc2hhcmVkLmxvZ2dpbmcnO1xuaW1wb3J0IHsgQ29vcmRpbmF0b3IgfSBmcm9tICcuL0Nvb3JkaW5hdG9yJztcblxuaW1wb3J0IHsgSW5wdXRzIH0gZnJvbSAnLi9JbnB1dHMnO1xuaW1wb3J0IHsgUmVwbGFjZW1lbnRWYWx1ZXMgfSBmcm9tICcuL1JlcGxhY2VtZW50VmFsdWVzJztcbmltcG9ydCB7IFJlcGxhY2VyRmFjdG9yeSB9IGZyb20gJy4vUmVwbGFjZXJGYWN0b3J5JztcbmltcG9ydCB7IFZhbGlkYXRlUGVyZm9ybWVkUmVwbGFjZW1lbnRzIH0gZnJvbSAnLi9WYWxpZGF0ZVBlcmZvcm1lZFJlcGxhY2VtZW50cyc7XG5pbXBvcnQgeyBWZXJzaW9uSW5mb0ZpbGVMb2FkZXIgfSBmcm9tICcuL1ZlcnNpb25JbmZvRmlsZUxvYWRlcic7XG5cbmNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIoKTtcblxucnVuKCk7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcnVuKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGlucHV0cyA9IElucHV0cy5wYXJzZSgpO1xuICAgICAgICBpbnB1dHMubG9nKGxvZ2dlcik7XG5cbiAgICAgICAgY29uc3QgbG9hZGVyID0gbmV3IFZlcnNpb25JbmZvRmlsZUxvYWRlcihsb2dnZXIpO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBuZXcgUmVwbGFjZW1lbnRWYWx1ZXMoaW5wdXRzLnZlcnNpb24pO1xuICAgICAgICBjb25zdCByZXBsYWNlckZhY3RvcnkgPSBuZXcgUmVwbGFjZXJGYWN0b3J5KHZhbHVlcywgbG9nZ2VyKTtcbiAgICAgICAgY29uc3QgdmFsaWRhdG9yID0gbmV3IFZhbGlkYXRlUGVyZm9ybWVkUmVwbGFjZW1lbnRzKGlucHV0cy5yZXBsYWNlbWVudHMsIGlucHV0cy5hbGxvd011bHRpcGxlUmVwbGFjZW1lbnRzLCBpbnB1dHMuYWxsb3dOb1JlcGxhY2VtZW50cyk7XG5cbiAgICAgICAgY29uc3QgY29vcmRpbmF0b3IgPSBuZXcgQ29vcmRpbmF0b3IobG9hZGVyLCByZXBsYWNlckZhY3RvcnksIHZhbGlkYXRvcik7XG4gICAgICAgIGF3YWl0IGNvb3JkaW5hdG9yLnBlcmZvcm1Gb3IoaW5wdXRzLmZpbGVzVG9VcGRhdGUsIGlucHV0cy5yZXBsYWNlbWVudHMpO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgZmFpbChlcnJvciBhcyBFcnJvcik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBmYWlsKGVycm9yOiBFcnJvcikge1xuICAgIGxvZ2dlci5lcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICBzZXRGYWlsZWQoZXJyb3IubWVzc2FnZSk7XG59XG4iXX0=


/***/ }),

/***/ 65:
/***/ (function(module, __unusedexports, __webpack_require__) {

const debug = __webpack_require__(548)
const { MAX_LENGTH, MAX_SAFE_INTEGER } = __webpack_require__(181)
const { re, t } = __webpack_require__(976)

const parseOptions = __webpack_require__(143)
const { compareIdentifiers } = __webpack_require__(760)
class SemVer {
  constructor (version, options) {
    options = parseOptions(options)

    if (version instanceof SemVer) {
      if (version.loose === !!options.loose &&
          version.includePrerelease === !!options.includePrerelease) {
        return version
      } else {
        version = version.version
      }
    } else if (typeof version !== 'string') {
      throw new TypeError(`Invalid Version: ${version}`)
    }

    if (version.length > MAX_LENGTH) {
      throw new TypeError(
        `version is longer than ${MAX_LENGTH} characters`
      )
    }

    debug('SemVer', version, options)
    this.options = options
    this.loose = !!options.loose
    // this isn't actually relevant for versions, but keep it so that we
    // don't run into trouble passing this.options around.
    this.includePrerelease = !!options.includePrerelease

    const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL])

    if (!m) {
      throw new TypeError(`Invalid Version: ${version}`)
    }

    this.raw = version

    // these are actually numbers
    this.major = +m[1]
    this.minor = +m[2]
    this.patch = +m[3]

    if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
      throw new TypeError('Invalid major version')
    }

    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
      throw new TypeError('Invalid minor version')
    }

    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
      throw new TypeError('Invalid patch version')
    }

    // numberify any prerelease numeric ids
    if (!m[4]) {
      this.prerelease = []
    } else {
      this.prerelease = m[4].split('.').map((id) => {
        if (/^[0-9]+$/.test(id)) {
          const num = +id
          if (num >= 0 && num < MAX_SAFE_INTEGER) {
            return num
          }
        }
        return id
      })
    }

    this.build = m[5] ? m[5].split('.') : []
    this.format()
  }

  format () {
    this.version = `${this.major}.${this.minor}.${this.patch}`
    if (this.prerelease.length) {
      this.version += `-${this.prerelease.join('.')}`
    }
    return this.version
  }

  toString () {
    return this.version
  }

  compare (other) {
    debug('SemVer.compare', this.version, this.options, other)
    if (!(other instanceof SemVer)) {
      if (typeof other === 'string' && other === this.version) {
        return 0
      }
      other = new SemVer(other, this.options)
    }

    if (other.version === this.version) {
      return 0
    }

    return this.compareMain(other) || this.comparePre(other)
  }

  compareMain (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    return (
      compareIdentifiers(this.major, other.major) ||
      compareIdentifiers(this.minor, other.minor) ||
      compareIdentifiers(this.patch, other.patch)
    )
  }

  comparePre (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    // NOT having a prerelease is > having one
    if (this.prerelease.length && !other.prerelease.length) {
      return -1
    } else if (!this.prerelease.length && other.prerelease.length) {
      return 1
    } else if (!this.prerelease.length && !other.prerelease.length) {
      return 0
    }

    let i = 0
    do {
      const a = this.prerelease[i]
      const b = other.prerelease[i]
      debug('prerelease compare', i, a, b)
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }

  compareBuild (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    let i = 0
    do {
      const a = this.build[i]
      const b = other.build[i]
      debug('prerelease compare', i, a, b)
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }

  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc (release, identifier) {
    switch (release) {
      case 'premajor':
        this.prerelease.length = 0
        this.patch = 0
        this.minor = 0
        this.major++
        this.inc('pre', identifier)
        break
      case 'preminor':
        this.prerelease.length = 0
        this.patch = 0
        this.minor++
        this.inc('pre', identifier)
        break
      case 'prepatch':
        // If this is already a prerelease, it will bump to the next version
        // drop any prereleases that might already exist, since they are not
        // relevant at this point.
        this.prerelease.length = 0
        this.inc('patch', identifier)
        this.inc('pre', identifier)
        break
      // If the input is a non-prerelease version, this acts the same as
      // prepatch.
      case 'prerelease':
        if (this.prerelease.length === 0) {
          this.inc('patch', identifier)
        }
        this.inc('pre', identifier)
        break

      case 'major':
        // If this is a pre-major version, bump up to the same major version.
        // Otherwise increment major.
        // 1.0.0-5 bumps to 1.0.0
        // 1.1.0 bumps to 2.0.0
        if (
          this.minor !== 0 ||
          this.patch !== 0 ||
          this.prerelease.length === 0
        ) {
          this.major++
        }
        this.minor = 0
        this.patch = 0
        this.prerelease = []
        break
      case 'minor':
        // If this is a pre-minor version, bump up to the same minor version.
        // Otherwise increment minor.
        // 1.2.0-5 bumps to 1.2.0
        // 1.2.1 bumps to 1.3.0
        if (this.patch !== 0 || this.prerelease.length === 0) {
          this.minor++
        }
        this.patch = 0
        this.prerelease = []
        break
      case 'patch':
        // If this is not a pre-release version, it will increment the patch.
        // If it is a pre-release it will bump up to the same patch version.
        // 1.2.0-5 patches to 1.2.0
        // 1.2.0 patches to 1.2.1
        if (this.prerelease.length === 0) {
          this.patch++
        }
        this.prerelease = []
        break
      // This probably shouldn't be used publicly.
      // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
      case 'pre':
        if (this.prerelease.length === 0) {
          this.prerelease = [0]
        } else {
          let i = this.prerelease.length
          while (--i >= 0) {
            if (typeof this.prerelease[i] === 'number') {
              this.prerelease[i]++
              i = -2
            }
          }
          if (i === -1) {
            // didn't increment anything
            this.prerelease.push(0)
          }
        }
        if (identifier) {
          // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
          // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
          if (this.prerelease[0] === identifier) {
            if (isNaN(this.prerelease[1])) {
              this.prerelease = [identifier, 0]
            }
          } else {
            this.prerelease = [identifier, 0]
          }
        }
        break

      default:
        throw new Error(`invalid increment argument: ${release}`)
    }
    this.format()
    this.raw = this.version
    return this
  }
}

module.exports = SemVer


/***/ }),

/***/ 82:
/***/ (function(__unusedmodule, exports) {

"use strict";

// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCommandProperties = exports.toCommandValue = void 0;
/**
 * Sanitizes an input into a string so it can be passed into issueCommand safely
 * @param input input to sanitize into a string
 */
function toCommandValue(input) {
    if (input === null || input === undefined) {
        return '';
    }
    else if (typeof input === 'string' || input instanceof String) {
        return input;
    }
    return JSON.stringify(input);
}
exports.toCommandValue = toCommandValue;
/**
 *
 * @param annotationProperties
 * @returns The command properties to send with the actual annotation command
 * See IssueCommandProperties: https://github.com/actions/runner/blob/main/src/Runner.Worker/ActionCommandManager.cs#L646
 */
function toCommandProperties(annotationProperties) {
    if (!Object.keys(annotationProperties).length) {
        return {};
    }
    return {
        title: annotationProperties.title,
        file: annotationProperties.file,
        line: annotationProperties.startLine,
        endLine: annotationProperties.endLine,
        col: annotationProperties.startColumn,
        endColumn: annotationProperties.endColumn
    };
}
exports.toCommandProperties = toCommandProperties;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 83:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(641), exports);
__exportStar(__webpack_require__(138), exports);
__exportStar(__webpack_require__(810), exports);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7O2dHQUdnRzs7Ozs7Ozs7Ozs7O0FBRWhHLDRDQUEwQjtBQUMxQiwyQ0FBeUI7QUFDekIsK0NBQTZCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIERvbGl0dGxlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5leHBvcnQgKiBmcm9tICcuL0lMb2dnZXInO1xuZXhwb3J0ICogZnJvbSAnLi9Mb2dnZXInO1xuZXhwb3J0ICogZnJvbSAnLi9OdWxsTG9nZ2VyJztcbiJdfQ==


/***/ }),

/***/ 87:
/***/ (function(module) {

module.exports = require("os");

/***/ }),

/***/ 92:
/***/ (function(module, __unusedexports, __webpack_require__) {

const SemVer = __webpack_require__(65)
const compare = (a, b, loose) =>
  new SemVer(a, loose).compare(new SemVer(b, loose))

module.exports = compare


/***/ }),

/***/ 102:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

// For internal use, subject to change.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.issueCommand = void 0;
// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
const fs = __importStar(__webpack_require__(747));
const os = __importStar(__webpack_require__(87));
const utils_1 = __webpack_require__(82);
function issueCommand(command, message) {
    const filePath = process.env[`GITHUB_${command}`];
    if (!filePath) {
        throw new Error(`Unable to find environment variable for file command ${command}`);
    }
    if (!fs.existsSync(filePath)) {
        throw new Error(`Missing file at path: ${filePath}`);
    }
    fs.appendFileSync(filePath, `${utils_1.toCommandValue(message)}${os.EOL}`, {
        encoding: 'utf8'
    });
}
exports.issueCommand = issueCommand;
//# sourceMappingURL=file-command.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __unusedexports, __webpack_require__) {

const compareBuild = __webpack_require__(465)
const sort = (list, loose) => list.sort((a, b) => compareBuild(a, b, loose))
module.exports = sort


/***/ }),

/***/ 124:
/***/ (function(module, __unusedexports, __webpack_require__) {

// hoisted class for cyclic dependency
class Range {
  constructor (range, options) {
    options = parseOptions(options)

    if (range instanceof Range) {
      if (
        range.loose === !!options.loose &&
        range.includePrerelease === !!options.includePrerelease
      ) {
        return range
      } else {
        return new Range(range.raw, options)
      }
    }

    if (range instanceof Comparator) {
      // just put it in the set and return
      this.raw = range.value
      this.set = [[range]]
      this.format()
      return this
    }

    this.options = options
    this.loose = !!options.loose
    this.includePrerelease = !!options.includePrerelease

    // First, split based on boolean or ||
    this.raw = range
    this.set = range
      .split(/\s*\|\|\s*/)
      // map the range to a 2d array of comparators
      .map(range => this.parseRange(range.trim()))
      // throw out any comparator lists that are empty
      // this generally means that it was not a valid range, which is allowed
      // in loose mode, but will still throw if the WHOLE range is invalid.
      .filter(c => c.length)

    if (!this.set.length) {
      throw new TypeError(`Invalid SemVer Range: ${range}`)
    }

    // if we have any that are not the null set, throw out null sets.
    if (this.set.length > 1) {
      // keep the first one, in case they're all null sets
      const first = this.set[0]
      this.set = this.set.filter(c => !isNullSet(c[0]))
      if (this.set.length === 0)
        this.set = [first]
      else if (this.set.length > 1) {
        // if we have any that are *, then the range is just *
        for (const c of this.set) {
          if (c.length === 1 && isAny(c[0])) {
            this.set = [c]
            break
          }
        }
      }
    }

    this.format()
  }

  format () {
    this.range = this.set
      .map((comps) => {
        return comps.join(' ').trim()
      })
      .join('||')
      .trim()
    return this.range
  }

  toString () {
    return this.range
  }

  parseRange (range) {
    range = range.trim()

    // memoize range parsing for performance.
    // this is a very hot path, and fully deterministic.
    const memoOpts = Object.keys(this.options).join(',')
    const memoKey = `parseRange:${memoOpts}:${range}`
    const cached = cache.get(memoKey)
    if (cached)
      return cached

    const loose = this.options.loose
    // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
    const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE]
    range = range.replace(hr, hyphenReplace(this.options.includePrerelease))
    debug('hyphen replace', range)
    // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
    range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace)
    debug('comparator trim', range, re[t.COMPARATORTRIM])

    // `~ 1.2.3` => `~1.2.3`
    range = range.replace(re[t.TILDETRIM], tildeTrimReplace)

    // `^ 1.2.3` => `^1.2.3`
    range = range.replace(re[t.CARETTRIM], caretTrimReplace)

    // normalize spaces
    range = range.split(/\s+/).join(' ')

    // At this point, the range is completely trimmed and
    // ready to be split into comparators.

    const compRe = loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR]
    const rangeList = range
      .split(' ')
      .map(comp => parseComparator(comp, this.options))
      .join(' ')
      .split(/\s+/)
      // >=0.0.0 is equivalent to *
      .map(comp => replaceGTE0(comp, this.options))
      // in loose mode, throw out any that are not valid comparators
      .filter(this.options.loose ? comp => !!comp.match(compRe) : () => true)
      .map(comp => new Comparator(comp, this.options))

    // if any comparators are the null set, then replace with JUST null set
    // if more than one comparator, remove any * comparators
    // also, don't include the same comparator more than once
    const l = rangeList.length
    const rangeMap = new Map()
    for (const comp of rangeList) {
      if (isNullSet(comp))
        return [comp]
      rangeMap.set(comp.value, comp)
    }
    if (rangeMap.size > 1 && rangeMap.has(''))
      rangeMap.delete('')

    const result = [...rangeMap.values()]
    cache.set(memoKey, result)
    return result
  }

  intersects (range, options) {
    if (!(range instanceof Range)) {
      throw new TypeError('a Range is required')
    }

    return this.set.some((thisComparators) => {
      return (
        isSatisfiable(thisComparators, options) &&
        range.set.some((rangeComparators) => {
          return (
            isSatisfiable(rangeComparators, options) &&
            thisComparators.every((thisComparator) => {
              return rangeComparators.every((rangeComparator) => {
                return thisComparator.intersects(rangeComparator, options)
              })
            })
          )
        })
      )
    })
  }

  // if ANY of the sets match ALL of its comparators, then pass
  test (version) {
    if (!version) {
      return false
    }

    if (typeof version === 'string') {
      try {
        version = new SemVer(version, this.options)
      } catch (er) {
        return false
      }
    }

    for (let i = 0; i < this.set.length; i++) {
      if (testSet(this.set[i], version, this.options)) {
        return true
      }
    }
    return false
  }
}
module.exports = Range

const LRU = __webpack_require__(702)
const cache = new LRU({ max: 1000 })

const parseOptions = __webpack_require__(143)
const Comparator = __webpack_require__(174)
const debug = __webpack_require__(548)
const SemVer = __webpack_require__(65)
const {
  re,
  t,
  comparatorTrimReplace,
  tildeTrimReplace,
  caretTrimReplace
} = __webpack_require__(976)

const isNullSet = c => c.value === '<0.0.0-0'
const isAny = c => c.value === ''

// take a set of comparators and determine whether there
// exists a version which can satisfy it
const isSatisfiable = (comparators, options) => {
  let result = true
  const remainingComparators = comparators.slice()
  let testComparator = remainingComparators.pop()

  while (result && remainingComparators.length) {
    result = remainingComparators.every((otherComparator) => {
      return testComparator.intersects(otherComparator, options)
    })

    testComparator = remainingComparators.pop()
  }

  return result
}

// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
const parseComparator = (comp, options) => {
  debug('comp', comp, options)
  comp = replaceCarets(comp, options)
  debug('caret', comp)
  comp = replaceTildes(comp, options)
  debug('tildes', comp)
  comp = replaceXRanges(comp, options)
  debug('xrange', comp)
  comp = replaceStars(comp, options)
  debug('stars', comp)
  return comp
}

const isX = id => !id || id.toLowerCase() === 'x' || id === '*'

// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0
const replaceTildes = (comp, options) =>
  comp.trim().split(/\s+/).map((comp) => {
    return replaceTilde(comp, options)
  }).join(' ')

const replaceTilde = (comp, options) => {
  const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE]
  return comp.replace(r, (_, M, m, p, pr) => {
    debug('tilde', comp, _, M, m, p, pr)
    let ret

    if (isX(M)) {
      ret = ''
    } else if (isX(m)) {
      ret = `>=${M}.0.0 <${+M + 1}.0.0-0`
    } else if (isX(p)) {
      // ~1.2 == >=1.2.0 <1.3.0-0
      ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`
    } else if (pr) {
      debug('replaceTilde pr', pr)
      ret = `>=${M}.${m}.${p}-${pr
      } <${M}.${+m + 1}.0-0`
    } else {
      // ~1.2.3 == >=1.2.3 <1.3.0-0
      ret = `>=${M}.${m}.${p
      } <${M}.${+m + 1}.0-0`
    }

    debug('tilde return', ret)
    return ret
  })
}

// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
// ^1.2.3 --> >=1.2.3 <2.0.0-0
// ^1.2.0 --> >=1.2.0 <2.0.0-0
const replaceCarets = (comp, options) =>
  comp.trim().split(/\s+/).map((comp) => {
    return replaceCaret(comp, options)
  }).join(' ')

const replaceCaret = (comp, options) => {
  debug('caret', comp, options)
  const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET]
  const z = options.includePrerelease ? '-0' : ''
  return comp.replace(r, (_, M, m, p, pr) => {
    debug('caret', comp, _, M, m, p, pr)
    let ret

    if (isX(M)) {
      ret = ''
    } else if (isX(m)) {
      ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`
    } else if (isX(p)) {
      if (M === '0') {
        ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`
      } else {
        ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`
      }
    } else if (pr) {
      debug('replaceCaret pr', pr)
      if (M === '0') {
        if (m === '0') {
          ret = `>=${M}.${m}.${p}-${pr
          } <${M}.${m}.${+p + 1}-0`
        } else {
          ret = `>=${M}.${m}.${p}-${pr
          } <${M}.${+m + 1}.0-0`
        }
      } else {
        ret = `>=${M}.${m}.${p}-${pr
        } <${+M + 1}.0.0-0`
      }
    } else {
      debug('no pr')
      if (M === '0') {
        if (m === '0') {
          ret = `>=${M}.${m}.${p
          }${z} <${M}.${m}.${+p + 1}-0`
        } else {
          ret = `>=${M}.${m}.${p
          }${z} <${M}.${+m + 1}.0-0`
        }
      } else {
        ret = `>=${M}.${m}.${p
        } <${+M + 1}.0.0-0`
      }
    }

    debug('caret return', ret)
    return ret
  })
}

const replaceXRanges = (comp, options) => {
  debug('replaceXRanges', comp, options)
  return comp.split(/\s+/).map((comp) => {
    return replaceXRange(comp, options)
  }).join(' ')
}

const replaceXRange = (comp, options) => {
  comp = comp.trim()
  const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE]
  return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
    debug('xRange', comp, ret, gtlt, M, m, p, pr)
    const xM = isX(M)
    const xm = xM || isX(m)
    const xp = xm || isX(p)
    const anyX = xp

    if (gtlt === '=' && anyX) {
      gtlt = ''
    }

    // if we're including prereleases in the match, then we need
    // to fix this to -0, the lowest possible prerelease value
    pr = options.includePrerelease ? '-0' : ''

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0-0'
      } else {
        // nothing is forbidden
        ret = '*'
      }
    } else if (gtlt && anyX) {
      // we know patch is an x, because we have any x at all.
      // replace X with 0
      if (xm) {
        m = 0
      }
      p = 0

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        gtlt = '>='
        if (xm) {
          M = +M + 1
          m = 0
          p = 0
        } else {
          m = +m + 1
          p = 0
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<'
        if (xm) {
          M = +M + 1
        } else {
          m = +m + 1
        }
      }

      if (gtlt === '<')
        pr = '-0'

      ret = `${gtlt + M}.${m}.${p}${pr}`
    } else if (xm) {
      ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`
    } else if (xp) {
      ret = `>=${M}.${m}.0${pr
      } <${M}.${+m + 1}.0-0`
    }

    debug('xRange return', ret)

    return ret
  })
}

// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
const replaceStars = (comp, options) => {
  debug('replaceStars', comp, options)
  // Looseness is ignored here.  star is always as loose as it gets!
  return comp.trim().replace(re[t.STAR], '')
}

const replaceGTE0 = (comp, options) => {
  debug('replaceGTE0', comp, options)
  return comp.trim()
    .replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], '')
}

// This function is passed to string.replace(re[t.HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0-0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0-0
const hyphenReplace = incPr => ($0,
  from, fM, fm, fp, fpr, fb,
  to, tM, tm, tp, tpr, tb) => {
  if (isX(fM)) {
    from = ''
  } else if (isX(fm)) {
    from = `>=${fM}.0.0${incPr ? '-0' : ''}`
  } else if (isX(fp)) {
    from = `>=${fM}.${fm}.0${incPr ? '-0' : ''}`
  } else if (fpr) {
    from = `>=${from}`
  } else {
    from = `>=${from}${incPr ? '-0' : ''}`
  }

  if (isX(tM)) {
    to = ''
  } else if (isX(tm)) {
    to = `<${+tM + 1}.0.0-0`
  } else if (isX(tp)) {
    to = `<${tM}.${+tm + 1}.0-0`
  } else if (tpr) {
    to = `<=${tM}.${tm}.${tp}-${tpr}`
  } else if (incPr) {
    to = `<${tM}.${tm}.${+tp + 1}-0`
  } else {
    to = `<=${to}`
  }

  return (`${from} ${to}`).trim()
}

const testSet = (set, version, options) => {
  for (let i = 0; i < set.length; i++) {
    if (!set[i].test(version)) {
      return false
    }
  }

  if (version.prerelease.length && !options.includePrerelease) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (let i = 0; i < set.length; i++) {
      debug(set[i].semver)
      if (set[i].semver === Comparator.ANY) {
        continue
      }

      if (set[i].semver.prerelease.length > 0) {
        const allowed = set[i].semver
        if (allowed.major === version.major &&
            allowed.minor === version.minor &&
            allowed.patch === version.patch) {
          return true
        }
      }
    }

    // Version has a -pre, but it's not one of the ones we like.
    return false
  }

  return true
}


/***/ }),

/***/ 127:
/***/ (function(__unusedmodule, exports) {

"use strict";

// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplacementValues = void 0;
/**
 * Represents an implementation of {@link IReplacementValues} that returns replacement values from a {@link SemVer}
 */
class ReplacementValues {
    /**
     * Initialises a new instance of the {@link ReplacementValues} class.
     * @param _version The {@link SemVer} to get replacement values from.
     */
    constructor(_version) {
        this._version = _version;
    }
    /** @inheritdoc */
    getValueFor(replacement) {
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
exports.ReplacementValues = ReplacementValues;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNvdXJjZS9SZXBsYWNlbWVudFZhbHVlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsK0NBQStDO0FBQy9DLHFHQUFxRzs7O0FBT3JHOztHQUVHO0FBQ0gsTUFBYSxpQkFBaUI7SUFDMUI7OztPQUdHO0lBQ0gsWUFDcUIsUUFBZ0I7UUFBaEIsYUFBUSxHQUFSLFFBQVEsQ0FBUTtJQUNsQyxDQUFDO0lBRUosa0JBQWtCO0lBQ2xCLFdBQVcsQ0FBQyxXQUF3QjtRQUNoQyxRQUFRLFdBQVcsRUFBRTtZQUNqQixLQUFLLE9BQU87Z0JBQ1IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMxQyxLQUFLLE9BQU87Z0JBQ1IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMxQyxLQUFLLE9BQU87Z0JBQ1IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMxQyxLQUFLLFlBQVk7Z0JBQ2IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUMsS0FBSyxNQUFNO2dCQUNQLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNyQztJQUNMLENBQUM7Q0FDSjtBQXhCRCw4Q0F3QkMiLCJmaWxlIjoiUmVwbGFjZW1lbnRWYWx1ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIERvbGl0dGxlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgU2VtVmVyIH0gZnJvbSAnc2VtdmVyJztcblxuaW1wb3J0IHsgUmVwbGFjZW1lbnQgfSBmcm9tICcuL0NvbmZpZ3VyYXRpb24vUmVwbGFjZW1lbnQnO1xuaW1wb3J0IHsgSVJlcGxhY2VtZW50VmFsdWVzIH0gZnJvbSAnLi9JUmVwbGFjZW1lbnRWYWx1ZXMnO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gaW1wbGVtZW50YXRpb24gb2Yge0BsaW5rIElSZXBsYWNlbWVudFZhbHVlc30gdGhhdCByZXR1cm5zIHJlcGxhY2VtZW50IHZhbHVlcyBmcm9tIGEge0BsaW5rIFNlbVZlcn1cbiAqL1xuZXhwb3J0IGNsYXNzIFJlcGxhY2VtZW50VmFsdWVzIGltcGxlbWVudHMgSVJlcGxhY2VtZW50VmFsdWVzIHtcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXNlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUge0BsaW5rIFJlcGxhY2VtZW50VmFsdWVzfSBjbGFzcy5cbiAgICAgKiBAcGFyYW0gX3ZlcnNpb24gVGhlIHtAbGluayBTZW1WZXJ9IHRvIGdldCByZXBsYWNlbWVudCB2YWx1ZXMgZnJvbS5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfdmVyc2lvbjogU2VtVmVyXG4gICAgKSB7fVxuXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXG4gICAgZ2V0VmFsdWVGb3IocmVwbGFjZW1lbnQ6IFJlcGxhY2VtZW50KTogc3RyaW5nIHtcbiAgICAgICAgc3dpdGNoIChyZXBsYWNlbWVudCkge1xuICAgICAgICAgICAgY2FzZSAnbWFqb3InOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl92ZXJzaW9uLm1ham9yLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBjYXNlICdtaW5vcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZlcnNpb24ubWlub3IudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGNhc2UgJ3BhdGNoJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdmVyc2lvbi5wYXRjaC50b1N0cmluZygpO1xuICAgICAgICAgICAgY2FzZSAncHJlcmVsZWFzZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZlcnNpb24ucHJlcmVsZWFzZS5qb2luKCcuJyk7XG4gICAgICAgICAgICBjYXNlICdmdWxsJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdmVyc2lvbi5mb3JtYXQoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==


/***/ }),

/***/ 138:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const core = __importStar(__webpack_require__(470));
/**
 * Represents an implementation of {ILogger} that logs messages to the Azure DevOps pipeline
 *
 * @export
 * @class Logger
 * @implements {ILogger}
 */
class Logger {
    /**
     * @inheritdoc
     */
    debug(message) {
        core.debug(message);
    }
    /**
     * @inheritdoc
     */
    warning(message) {
        core.warning(message);
    }
    /**
     * @inheritdoc
     */
    error(message) {
        core.error(message);
    }
    /**
     * @inheritdoc
     */
    info(message) {
        core.info(message);
    }
}
exports.Logger = Logger;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0Esb0RBQXNDO0FBRXRDOzs7Ozs7R0FNRztBQUNILE1BQWEsTUFBTTtJQUVmOztPQUVHO0lBQ0gsS0FBSyxDQUFDLE9BQWU7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxPQUFPLENBQUMsT0FBZTtRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRDs7T0FFRztJQUNILEtBQUssQ0FBQyxPQUFlO1FBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSSxDQUFDLE9BQWU7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QixDQUFDO0NBQ0o7QUE3QkQsd0JBNkJDIiwiZmlsZSI6IkxvZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBEb2xpdHRsZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmltcG9ydCB7IElMb2dnZXIgfSBmcm9tICcuL0lMb2dnZXInO1xuaW1wb3J0ICogYXMgY29yZSBmcm9tICdAYWN0aW9ucy9jb3JlJztcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIGltcGxlbWVudGF0aW9uIG9mIHtJTG9nZ2VyfSB0aGF0IGxvZ3MgbWVzc2FnZXMgdG8gdGhlIEF6dXJlIERldk9wcyBwaXBlbGluZVxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBMb2dnZXJcbiAqIEBpbXBsZW1lbnRzIHtJTG9nZ2VyfVxuICovXG5leHBvcnQgY2xhc3MgTG9nZ2VyIGltcGxlbWVudHMgSUxvZ2dlciB7XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqL1xuICAgIGRlYnVnKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICBjb3JlLmRlYnVnKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICovXG4gICAgd2FybmluZyhtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgY29yZS53YXJuaW5nKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICovXG4gICAgZXJyb3IobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIGNvcmUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKi9cbiAgICBpbmZvKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICBjb3JlLmluZm8obWVzc2FnZSk7XG4gICAgfVxufVxuIl19


/***/ }),

/***/ 141:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";


var net = __webpack_require__(631);
var tls = __webpack_require__(16);
var http = __webpack_require__(605);
var https = __webpack_require__(211);
var events = __webpack_require__(614);
var assert = __webpack_require__(357);
var util = __webpack_require__(669);


exports.httpOverHttp = httpOverHttp;
exports.httpsOverHttp = httpsOverHttp;
exports.httpOverHttps = httpOverHttps;
exports.httpsOverHttps = httpsOverHttps;


function httpOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  return agent;
}

function httpsOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}

function httpOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  return agent;
}

function httpsOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}


function TunnelingAgent(options) {
  var self = this;
  self.options = options || {};
  self.proxyOptions = self.options.proxy || {};
  self.maxSockets = self.options.maxSockets || http.Agent.defaultMaxSockets;
  self.requests = [];
  self.sockets = [];

  self.on('free', function onFree(socket, host, port, localAddress) {
    var options = toOptions(host, port, localAddress);
    for (var i = 0, len = self.requests.length; i < len; ++i) {
      var pending = self.requests[i];
      if (pending.host === options.host && pending.port === options.port) {
        // Detect the request to connect same origin server,
        // reuse the connection.
        self.requests.splice(i, 1);
        pending.request.onSocket(socket);
        return;
      }
    }
    socket.destroy();
    self.removeSocket(socket);
  });
}
util.inherits(TunnelingAgent, events.EventEmitter);

TunnelingAgent.prototype.addRequest = function addRequest(req, host, port, localAddress) {
  var self = this;
  var options = mergeOptions({request: req}, self.options, toOptions(host, port, localAddress));

  if (self.sockets.length >= this.maxSockets) {
    // We are over limit so we'll add it to the queue.
    self.requests.push(options);
    return;
  }

  // If we are under maxSockets create a new one.
  self.createSocket(options, function(socket) {
    socket.on('free', onFree);
    socket.on('close', onCloseOrRemove);
    socket.on('agentRemove', onCloseOrRemove);
    req.onSocket(socket);

    function onFree() {
      self.emit('free', socket, options);
    }

    function onCloseOrRemove(err) {
      self.removeSocket(socket);
      socket.removeListener('free', onFree);
      socket.removeListener('close', onCloseOrRemove);
      socket.removeListener('agentRemove', onCloseOrRemove);
    }
  });
};

TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
  var self = this;
  var placeholder = {};
  self.sockets.push(placeholder);

  var connectOptions = mergeOptions({}, self.proxyOptions, {
    method: 'CONNECT',
    path: options.host + ':' + options.port,
    agent: false,
    headers: {
      host: options.host + ':' + options.port
    }
  });
  if (options.localAddress) {
    connectOptions.localAddress = options.localAddress;
  }
  if (connectOptions.proxyAuth) {
    connectOptions.headers = connectOptions.headers || {};
    connectOptions.headers['Proxy-Authorization'] = 'Basic ' +
        new Buffer(connectOptions.proxyAuth).toString('base64');
  }

  debug('making CONNECT request');
  var connectReq = self.request(connectOptions);
  connectReq.useChunkedEncodingByDefault = false; // for v0.6
  connectReq.once('response', onResponse); // for v0.6
  connectReq.once('upgrade', onUpgrade);   // for v0.6
  connectReq.once('connect', onConnect);   // for v0.7 or later
  connectReq.once('error', onError);
  connectReq.end();

  function onResponse(res) {
    // Very hacky. This is necessary to avoid http-parser leaks.
    res.upgrade = true;
  }

  function onUpgrade(res, socket, head) {
    // Hacky.
    process.nextTick(function() {
      onConnect(res, socket, head);
    });
  }

  function onConnect(res, socket, head) {
    connectReq.removeAllListeners();
    socket.removeAllListeners();

    if (res.statusCode !== 200) {
      debug('tunneling socket could not be established, statusCode=%d',
        res.statusCode);
      socket.destroy();
      var error = new Error('tunneling socket could not be established, ' +
        'statusCode=' + res.statusCode);
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    if (head.length > 0) {
      debug('got illegal response body from proxy');
      socket.destroy();
      var error = new Error('got illegal response body from proxy');
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    debug('tunneling connection has established');
    self.sockets[self.sockets.indexOf(placeholder)] = socket;
    return cb(socket);
  }

  function onError(cause) {
    connectReq.removeAllListeners();

    debug('tunneling socket could not be established, cause=%s\n',
          cause.message, cause.stack);
    var error = new Error('tunneling socket could not be established, ' +
                          'cause=' + cause.message);
    error.code = 'ECONNRESET';
    options.request.emit('error', error);
    self.removeSocket(placeholder);
  }
};

TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
  var pos = this.sockets.indexOf(socket)
  if (pos === -1) {
    return;
  }
  this.sockets.splice(pos, 1);

  var pending = this.requests.shift();
  if (pending) {
    // If we have pending requests and a socket gets closed a new one
    // needs to be created to take over in the pool for the one that closed.
    this.createSocket(pending, function(socket) {
      pending.request.onSocket(socket);
    });
  }
};

function createSecureSocket(options, cb) {
  var self = this;
  TunnelingAgent.prototype.createSocket.call(self, options, function(socket) {
    var hostHeader = options.request.getHeader('host');
    var tlsOptions = mergeOptions({}, self.options, {
      socket: socket,
      servername: hostHeader ? hostHeader.replace(/:.*$/, '') : options.host
    });

    // 0 is dummy port for v0.6
    var secureSocket = tls.connect(0, tlsOptions);
    self.sockets[self.sockets.indexOf(socket)] = secureSocket;
    cb(secureSocket);
  });
}


function toOptions(host, port, localAddress) {
  if (typeof host === 'string') { // since v0.10
    return {
      host: host,
      port: port,
      localAddress: localAddress
    };
  }
  return host; // for v0.11 or later
}

function mergeOptions(target) {
  for (var i = 1, len = arguments.length; i < len; ++i) {
    var overrides = arguments[i];
    if (typeof overrides === 'object') {
      var keys = Object.keys(overrides);
      for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {
        var k = keys[j];
        if (overrides[k] !== undefined) {
          target[k] = overrides[k];
        }
      }
    }
  }
  return target;
}


var debug;
if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
  debug = function() {
    var args = Array.prototype.slice.call(arguments);
    if (typeof args[0] === 'string') {
      args[0] = 'TUNNEL: ' + args[0];
    } else {
      args.unshift('TUNNEL:');
    }
    console.error.apply(console, args);
  }
} else {
  debug = function() {};
}
exports.debug = debug; // for test


/***/ }),

/***/ 143:
/***/ (function(module) {

// parse out just the options we care about so we always get a consistent
// obj with keys in a consistent order.
const opts = ['includePrerelease', 'loose', 'rtl']
const parseOptions = options =>
  !options ? {}
  : typeof options !== 'object' ? { loose: true }
  : opts.filter(k => options[k]).reduce((options, k) => {
    options[k] = true
    return options
  }, {})
module.exports = parseOptions


/***/ }),

/***/ 149:
/***/ (function(__unusedmodule, exports) {

"use strict";

// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coordinator = void 0;
/**
 * Represents a coordinator that performs the replacement pipeline of the action.
 */
class Coordinator {
    /**
     * Initialises a new instance of the {@link Coordinator} class.
     * @param _loader The {@link IVersionInfoFileLoader} to use to load files.
     * @param _replacers The {@link IReplacerFactory} to use to create replacers.
     * @param _validator The {@link IValidatePerformedReplacements} to use to validate performed replacements before persisting.
     */
    constructor(_loader, _replacers, _validator) {
        this._loader = _loader;
        this._replacers = _replacers;
        this._validator = _validator;
    }
    /**
     * Performs the replacement pipeline for the specified files
     * @param paths The paths to the files to replace version info in.
     */
    performFor(paths, replacements) {
        return __awaiter(this, void 0, void 0, function* () {
            const files = yield this._loader.loadAll(paths);
            const replacers = replacements.map(({ replacement, type, match }) => this._replacers.createFor(replacement, type, match));
            for (const file of files) {
                file.execute(replacers);
                this._validator.validateFile(file);
            }
            for (const file of files) {
                yield file.persist();
            }
        });
    }
}
exports.Coordinator = Coordinator;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNvdXJjZS9Db29yZGluYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsK0NBQStDO0FBQy9DLHFHQUFxRzs7Ozs7Ozs7Ozs7O0FBT3JHOztHQUVHO0FBQ0gsTUFBYSxXQUFXO0lBQ3BCOzs7OztPQUtHO0lBQ0gsWUFDcUIsT0FBK0IsRUFDL0IsVUFBNEIsRUFDNUIsVUFBMEM7UUFGMUMsWUFBTyxHQUFQLE9BQU8sQ0FBd0I7UUFDL0IsZUFBVSxHQUFWLFVBQVUsQ0FBa0I7UUFDNUIsZUFBVSxHQUFWLFVBQVUsQ0FBZ0M7SUFDNUQsQ0FBQztJQUVKOzs7T0FHRztJQUNHLFVBQVUsQ0FBQyxLQUFlLEVBQUUsWUFBaUM7O1lBQy9ELE1BQU0sS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFaEQsTUFBTSxTQUFTLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBRXhILEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxFQUFFO2dCQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN0QztZQUVELEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxFQUFFO2dCQUN0QixNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUN4QjtRQUNMLENBQUM7S0FBQTtDQUNKO0FBL0JELGtDQStCQyIsImZpbGUiOiJDb29yZGluYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgRG9saXR0bGUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBSZXBsYWNlbWVudENvbmZpZyB9IGZyb20gJy4vQ29uZmlndXJhdGlvbi9SZXBsYWNlbWVudENvbmZpZyc7XG5pbXBvcnQgeyBJUmVwbGFjZXJGYWN0b3J5IH0gZnJvbSAnLi9JUmVwbGFjZXJGYWN0b3J5JztcbmltcG9ydCB7IElWYWxpZGF0ZVBlcmZvcm1lZFJlcGxhY2VtZW50cyB9IGZyb20gJy4vSVZhbGlkYXRlUGVyZm9ybWVkUmVwbGFjZW1lbnRzJztcbmltcG9ydCB7IElWZXJzaW9uSW5mb0ZpbGVMb2FkZXIgfSBmcm9tICcuL0lWZXJzaW9uSW5mb0ZpbGVMb2FkZXInO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBjb29yZGluYXRvciB0aGF0IHBlcmZvcm1zIHRoZSByZXBsYWNlbWVudCBwaXBlbGluZSBvZiB0aGUgYWN0aW9uLlxuICovXG5leHBvcnQgY2xhc3MgQ29vcmRpbmF0b3Ige1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpc2VzIGEgbmV3IGluc3RhbmNlIG9mIHRoZSB7QGxpbmsgQ29vcmRpbmF0b3J9IGNsYXNzLlxuICAgICAqIEBwYXJhbSBfbG9hZGVyIFRoZSB7QGxpbmsgSVZlcnNpb25JbmZvRmlsZUxvYWRlcn0gdG8gdXNlIHRvIGxvYWQgZmlsZXMuXG4gICAgICogQHBhcmFtIF9yZXBsYWNlcnMgVGhlIHtAbGluayBJUmVwbGFjZXJGYWN0b3J5fSB0byB1c2UgdG8gY3JlYXRlIHJlcGxhY2Vycy5cbiAgICAgKiBAcGFyYW0gX3ZhbGlkYXRvciBUaGUge0BsaW5rIElWYWxpZGF0ZVBlcmZvcm1lZFJlcGxhY2VtZW50c30gdG8gdXNlIHRvIHZhbGlkYXRlIHBlcmZvcm1lZCByZXBsYWNlbWVudHMgYmVmb3JlIHBlcnNpc3RpbmcuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2xvYWRlcjogSVZlcnNpb25JbmZvRmlsZUxvYWRlcixcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfcmVwbGFjZXJzOiBJUmVwbGFjZXJGYWN0b3J5LFxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF92YWxpZGF0b3I6IElWYWxpZGF0ZVBlcmZvcm1lZFJlcGxhY2VtZW50c1xuICAgICkge31cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIHRoZSByZXBsYWNlbWVudCBwaXBlbGluZSBmb3IgdGhlIHNwZWNpZmllZCBmaWxlc1xuICAgICAqIEBwYXJhbSBwYXRocyBUaGUgcGF0aHMgdG8gdGhlIGZpbGVzIHRvIHJlcGxhY2UgdmVyc2lvbiBpbmZvIGluLlxuICAgICAqL1xuICAgIGFzeW5jIHBlcmZvcm1Gb3IocGF0aHM6IHN0cmluZ1tdLCByZXBsYWNlbWVudHM6IFJlcGxhY2VtZW50Q29uZmlnW10pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgZmlsZXMgPSBhd2FpdCB0aGlzLl9sb2FkZXIubG9hZEFsbChwYXRocyk7XG5cbiAgICAgICAgY29uc3QgcmVwbGFjZXJzID0gcmVwbGFjZW1lbnRzLm1hcCgoe3JlcGxhY2VtZW50LCB0eXBlLCBtYXRjaH0pID0+IHRoaXMuX3JlcGxhY2Vycy5jcmVhdGVGb3IocmVwbGFjZW1lbnQsIHR5cGUsIG1hdGNoKSk7XG5cbiAgICAgICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgICAgICAgICBmaWxlLmV4ZWN1dGUocmVwbGFjZXJzKTtcbiAgICAgICAgICAgIHRoaXMuX3ZhbGlkYXRvci52YWxpZGF0ZUZpbGUoZmlsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICAgICAgICAgIGF3YWl0IGZpbGUucGVyc2lzdCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19


/***/ }),

/***/ 156:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplacerFactory = void 0;
const ExactReplacer_1 = __webpack_require__(969);
const NumberReplacer_1 = __webpack_require__(272);
const StringReplacer_1 = __webpack_require__(674);
/**
 * Defines a system that can create instances of {@link IReplacer}.
 */
class ReplacerFactory {
    constructor(_values, _logger) {
        this._values = _values;
        this._logger = _logger;
    }
    /** @inheritdoc */
    createFor(replacement, type, match) {
        const valueToReplace = this._values.getValueFor(replacement);
        switch (type) {
            case 'exact':
                this._logger.debug(`Creating ${ExactReplacer_1.ExactReplacer.name} for replacement ${replacement}`);
                return new ExactReplacer_1.ExactReplacer(replacement, match, valueToReplace);
            case 'string':
                this._logger.debug(`Creating ${StringReplacer_1.StringReplacer.name} for replacement ${replacement}`);
                return new StringReplacer_1.StringReplacer(replacement, match, valueToReplace);
            case 'number':
                this._logger.debug(`Creating ${NumberReplacer_1.NumberReplacer.name} for replacement ${replacement}`);
                return new NumberReplacer_1.NumberReplacer(replacement, match, valueToReplace);
        }
    }
}
exports.ReplacerFactory = ReplacerFactory;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNvdXJjZS9SZXBsYWNlckZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLCtDQUErQztBQUMvQyxxR0FBcUc7OztBQU9yRyw2REFBMEQ7QUFFMUQsK0RBQTREO0FBQzVELCtEQUE0RDtBQUU1RDs7R0FFRztBQUNILE1BQWEsZUFBZTtJQUN4QixZQUNxQixPQUEyQixFQUMzQixPQUFlO1FBRGYsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFDM0IsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUNqQyxDQUFDO0lBRUosa0JBQWtCO0lBQ2xCLFNBQVMsQ0FBQyxXQUF3QixFQUFFLElBQXFCLEVBQUUsS0FBYTtRQUNwRSxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUU3RCxRQUFRLElBQUksRUFBRTtZQUNWLEtBQUssT0FBTztnQkFDUixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLDZCQUFhLENBQUMsSUFBSSxvQkFBb0IsV0FBVyxFQUFFLENBQUMsQ0FBQztnQkFDcEYsT0FBTyxJQUFJLDZCQUFhLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxjQUFjLENBQUMsQ0FBQztZQUNqRSxLQUFLLFFBQVE7Z0JBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSwrQkFBYyxDQUFDLElBQUksb0JBQW9CLFdBQVcsRUFBRSxDQUFDLENBQUM7Z0JBQ3JGLE9BQU8sSUFBSSwrQkFBYyxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsY0FBYyxDQUFDLENBQUM7WUFDbEUsS0FBSyxRQUFRO2dCQUNULElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksK0JBQWMsQ0FBQyxJQUFJLG9CQUFvQixXQUFXLEVBQUUsQ0FBQyxDQUFDO2dCQUNyRixPQUFPLElBQUksK0JBQWMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQ3JFO0lBQ0wsQ0FBQztDQUNKO0FBdEJELDBDQXNCQyIsImZpbGUiOiJSZXBsYWNlckZhY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIERvbGl0dGxlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnQGRvbGl0dGxlL2dpdGh1Yi1hY3Rpb25zLnNoYXJlZC5sb2dnaW5nJztcbmltcG9ydCB7IFJlcGxhY2VtZW50IH0gZnJvbSAnLi9Db25maWd1cmF0aW9uL1JlcGxhY2VtZW50JztcbmltcG9ydCB7IFJlcGxhY2VtZW50VHlwZSB9IGZyb20gJy4vQ29uZmlndXJhdGlvbi9SZXBsYWNlbWVudFR5cGUnO1xuaW1wb3J0IHsgSVJlcGxhY2VtZW50VmFsdWVzIH0gZnJvbSAnLi9JUmVwbGFjZW1lbnRWYWx1ZXMnO1xuaW1wb3J0IHsgSVJlcGxhY2VyRmFjdG9yeSB9IGZyb20gJy4vSVJlcGxhY2VyRmFjdG9yeSc7XG5pbXBvcnQgeyBFeGFjdFJlcGxhY2VyIH0gZnJvbSAnLi9SZXBsYWNlcnMvRXhhY3RSZXBsYWNlcic7XG5pbXBvcnQgeyBJUmVwbGFjZXIgfSBmcm9tICcuL1JlcGxhY2Vycy9JUmVwbGFjZXInO1xuaW1wb3J0IHsgTnVtYmVyUmVwbGFjZXIgfSBmcm9tICcuL1JlcGxhY2Vycy9OdW1iZXJSZXBsYWNlcic7XG5pbXBvcnQgeyBTdHJpbmdSZXBsYWNlciB9IGZyb20gJy4vUmVwbGFjZXJzL1N0cmluZ1JlcGxhY2VyJztcblxuLyoqXG4gKiBEZWZpbmVzIGEgc3lzdGVtIHRoYXQgY2FuIGNyZWF0ZSBpbnN0YW5jZXMgb2Yge0BsaW5rIElSZXBsYWNlcn0uXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXBsYWNlckZhY3RvcnkgaW1wbGVtZW50cyBJUmVwbGFjZXJGYWN0b3J5IHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfdmFsdWVzOiBJUmVwbGFjZW1lbnRWYWx1ZXMsXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2xvZ2dlcjogTG9nZ2VyXG4gICAgKSB7fVxuXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXG4gICAgY3JlYXRlRm9yKHJlcGxhY2VtZW50OiBSZXBsYWNlbWVudCwgdHlwZTogUmVwbGFjZW1lbnRUeXBlLCBtYXRjaDogc3RyaW5nKTogSVJlcGxhY2VyIHtcbiAgICAgICAgY29uc3QgdmFsdWVUb1JlcGxhY2UgPSB0aGlzLl92YWx1ZXMuZ2V0VmFsdWVGb3IocmVwbGFjZW1lbnQpO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnZXhhY3QnOlxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgJHtFeGFjdFJlcGxhY2VyLm5hbWV9IGZvciByZXBsYWNlbWVudCAke3JlcGxhY2VtZW50fWApO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXhhY3RSZXBsYWNlcihyZXBsYWNlbWVudCwgbWF0Y2gsIHZhbHVlVG9SZXBsYWNlKTtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmRlYnVnKGBDcmVhdGluZyAke1N0cmluZ1JlcGxhY2VyLm5hbWV9IGZvciByZXBsYWNlbWVudCAke3JlcGxhY2VtZW50fWApO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU3RyaW5nUmVwbGFjZXIocmVwbGFjZW1lbnQsIG1hdGNoLCB2YWx1ZVRvUmVwbGFjZSk7XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgJHtOdW1iZXJSZXBsYWNlci5uYW1lfSBmb3IgcmVwbGFjZW1lbnQgJHtyZXBsYWNlbWVudH1gKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE51bWJlclJlcGxhY2VyKHJlcGxhY2VtZW50LCBtYXRjaCwgdmFsdWVUb1JlcGxhY2UpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19


/***/ }),

/***/ 164:
/***/ (function(module, __unusedexports, __webpack_require__) {

const SemVer = __webpack_require__(65)
const Range = __webpack_require__(124)
const gt = __webpack_require__(486)

const minVersion = (range, loose) => {
  range = new Range(range, loose)

  let minver = new SemVer('0.0.0')
  if (range.test(minver)) {
    return minver
  }

  minver = new SemVer('0.0.0-0')
  if (range.test(minver)) {
    return minver
  }

  minver = null
  for (let i = 0; i < range.set.length; ++i) {
    const comparators = range.set[i]

    let setMin = null
    comparators.forEach((comparator) => {
      // Clone to avoid manipulating the comparator's semver object.
      const compver = new SemVer(comparator.semver.version)
      switch (comparator.operator) {
        case '>':
          if (compver.prerelease.length === 0) {
            compver.patch++
          } else {
            compver.prerelease.push(0)
          }
          compver.raw = compver.format()
          /* fallthrough */
        case '':
        case '>=':
          if (!setMin || gt(compver, setMin)) {
            setMin = compver
          }
          break
        case '<':
        case '<=':
          /* Ignore maximum versions */
          break
        /* istanbul ignore next */
        default:
          throw new Error(`Unexpected operation: ${comparator.operator}`)
      }
    })
    if (setMin && (!minver || gt(minver, setMin)))
      minver = setMin
  }

  if (minver && range.test(minver)) {
    return minver
  }

  return null
}
module.exports = minVersion


/***/ }),

/***/ 167:
/***/ (function(module, __unusedexports, __webpack_require__) {

const compare = __webpack_require__(92)
const gte = (a, b, loose) => compare(a, b, loose) >= 0
module.exports = gte


/***/ }),

/***/ 174:
/***/ (function(module, __unusedexports, __webpack_require__) {

const ANY = Symbol('SemVer ANY')
// hoisted class for cyclic dependency
class Comparator {
  static get ANY () {
    return ANY
  }
  constructor (comp, options) {
    options = parseOptions(options)

    if (comp instanceof Comparator) {
      if (comp.loose === !!options.loose) {
        return comp
      } else {
        comp = comp.value
      }
    }

    debug('comparator', comp, options)
    this.options = options
    this.loose = !!options.loose
    this.parse(comp)

    if (this.semver === ANY) {
      this.value = ''
    } else {
      this.value = this.operator + this.semver.version
    }

    debug('comp', this)
  }

  parse (comp) {
    const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR]
    const m = comp.match(r)

    if (!m) {
      throw new TypeError(`Invalid comparator: ${comp}`)
    }

    this.operator = m[1] !== undefined ? m[1] : ''
    if (this.operator === '=') {
      this.operator = ''
    }

    // if it literally is just '>' or '' then allow anything.
    if (!m[2]) {
      this.semver = ANY
    } else {
      this.semver = new SemVer(m[2], this.options.loose)
    }
  }

  toString () {
    return this.value
  }

  test (version) {
    debug('Comparator.test', version, this.options.loose)

    if (this.semver === ANY || version === ANY) {
      return true
    }

    if (typeof version === 'string') {
      try {
        version = new SemVer(version, this.options)
      } catch (er) {
        return false
      }
    }

    return cmp(version, this.operator, this.semver, this.options)
  }

  intersects (comp, options) {
    if (!(comp instanceof Comparator)) {
      throw new TypeError('a Comparator is required')
    }

    if (!options || typeof options !== 'object') {
      options = {
        loose: !!options,
        includePrerelease: false
      }
    }

    if (this.operator === '') {
      if (this.value === '') {
        return true
      }
      return new Range(comp.value, options).test(this.value)
    } else if (comp.operator === '') {
      if (comp.value === '') {
        return true
      }
      return new Range(this.value, options).test(comp.semver)
    }

    const sameDirectionIncreasing =
      (this.operator === '>=' || this.operator === '>') &&
      (comp.operator === '>=' || comp.operator === '>')
    const sameDirectionDecreasing =
      (this.operator === '<=' || this.operator === '<') &&
      (comp.operator === '<=' || comp.operator === '<')
    const sameSemVer = this.semver.version === comp.semver.version
    const differentDirectionsInclusive =
      (this.operator === '>=' || this.operator === '<=') &&
      (comp.operator === '>=' || comp.operator === '<=')
    const oppositeDirectionsLessThan =
      cmp(this.semver, '<', comp.semver, options) &&
      (this.operator === '>=' || this.operator === '>') &&
        (comp.operator === '<=' || comp.operator === '<')
    const oppositeDirectionsGreaterThan =
      cmp(this.semver, '>', comp.semver, options) &&
      (this.operator === '<=' || this.operator === '<') &&
        (comp.operator === '>=' || comp.operator === '>')

    return (
      sameDirectionIncreasing ||
      sameDirectionDecreasing ||
      (sameSemVer && differentDirectionsInclusive) ||
      oppositeDirectionsLessThan ||
      oppositeDirectionsGreaterThan
    )
  }
}

module.exports = Comparator

const parseOptions = __webpack_require__(143)
const {re, t} = __webpack_require__(976)
const cmp = __webpack_require__(752)
const debug = __webpack_require__(548)
const SemVer = __webpack_require__(65)
const Range = __webpack_require__(124)


/***/ }),

/***/ 181:
/***/ (function(module) {

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
const SEMVER_SPEC_VERSION = '2.0.0'

const MAX_LENGTH = 256
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER ||
  /* istanbul ignore next */ 9007199254740991

// Max safe segment length for coercion.
const MAX_SAFE_COMPONENT_LENGTH = 16

module.exports = {
  SEMVER_SPEC_VERSION,
  MAX_LENGTH,
  MAX_SAFE_INTEGER,
  MAX_SAFE_COMPONENT_LENGTH
}


/***/ }),

/***/ 211:
/***/ (function(module) {

module.exports = require("https");

/***/ }),

/***/ 219:
/***/ (function(module, __unusedexports, __webpack_require__) {

const Range = __webpack_require__(124)

// Mostly just for testing and legacy API reasons
const toComparators = (range, options) =>
  new Range(range, options).set
    .map(comp => comp.map(c => c.value).join(' ').trim().split(' '))

module.exports = toComparators


/***/ }),

/***/ 226:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class BasicCredentialHandler {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    prepareRequest(options) {
        options.headers['Authorization'] =
            'Basic ' +
                Buffer.from(this.username + ':' + this.password).toString('base64');
    }
    // This handler cannot handle 401
    canHandleAuthentication(response) {
        return false;
    }
    handleAuthentication(httpClient, requestInfo, objs) {
        return null;
    }
}
exports.BasicCredentialHandler = BasicCredentialHandler;
class BearerCredentialHandler {
    constructor(token) {
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        options.headers['Authorization'] = 'Bearer ' + this.token;
    }
    // This handler cannot handle 401
    canHandleAuthentication(response) {
        return false;
    }
    handleAuthentication(httpClient, requestInfo, objs) {
        return null;
    }
}
exports.BearerCredentialHandler = BearerCredentialHandler;
class PersonalAccessTokenCredentialHandler {
    constructor(token) {
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        options.headers['Authorization'] =
            'Basic ' + Buffer.from('PAT:' + this.token).toString('base64');
    }
    // This handler cannot handle 401
    canHandleAuthentication(response) {
        return false;
    }
    handleAuthentication(httpClient, requestInfo, objs) {
        return null;
    }
}
exports.PersonalAccessTokenCredentialHandler = PersonalAccessTokenCredentialHandler;


/***/ }),

/***/ 240:
/***/ (function(__unusedmodule, exports) {

"use strict";

// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Replacer = void 0;
/**
 * Represents an abstract implementation of {@link IReplacer}.
 */
class Replacer {
    /**
     * Initialises a new instance of the {@link Replacer} class.
     * @param replacement The {@link Replacement} that this replacer performs replacements for.
     */
    constructor(replacement) {
        this.replacement = replacement;
    }
    /** @inheritdoc */
    execute(path, contents) {
        let modified = contents;
        const replacements = [];
        while (true) {
            const match = this.getExpressionFor(path).exec(modified);
            if (!match) {
                break;
            }
            const replaceWith = this.getValueFor(path);
            modified = modified.slice(0, match.index) + replaceWith + modified.slice(match.index + match[0].length);
            replacements.push({
                replacement: this.replacement,
                before: match[0],
                after: replaceWith,
            });
        }
        return { replacements, contents: modified };
    }
}
exports.Replacer = Replacer;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNvdXJjZS9SZXBsYWNlcnMvUmVwbGFjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLCtDQUErQztBQUMvQyxxR0FBcUc7OztBQU9yRzs7R0FFRztBQUNILE1BQXNCLFFBQVE7SUFDMUI7OztPQUdHO0lBQ0gsWUFDdUIsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFDNUMsQ0FBQztJQUVKLGtCQUFrQjtJQUNsQixPQUFPLENBQUMsSUFBWSxFQUFFLFFBQWdCO1FBQ2xDLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN4QixNQUFNLFlBQVksR0FBMkIsRUFBRSxDQUFDO1FBRWhELE9BQU8sSUFBSSxFQUFFO1lBQ1QsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUV6RCxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNSLE1BQU07YUFDVDtZQUVELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0MsUUFBUSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxXQUFXLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUV4RyxZQUFZLENBQUMsSUFBSSxDQUFDO2dCQUNkLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztnQkFDN0IsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLEtBQUssRUFBRSxXQUFXO2FBQ3JCLENBQUMsQ0FBQztTQUNOO1FBRUQsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7SUFDaEQsQ0FBQztDQWFKO0FBN0NELDRCQTZDQyIsImZpbGUiOiJSZXBsYWNlcnMvUmVwbGFjZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIERvbGl0dGxlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgUmVwbGFjZW1lbnQgfSBmcm9tICcuLi9Db25maWd1cmF0aW9uL1JlcGxhY2VtZW50JztcbmltcG9ydCB7IFBlcmZvcm1lZFJlcGxhY2VtZW50IH0gZnJvbSAnLi4vUGVyZm9ybWVkUmVwbGFjZW1lbnQnO1xuaW1wb3J0IHsgSVJlcGxhY2VyIH0gZnJvbSAnLi9JUmVwbGFjZXInO1xuaW1wb3J0IHsgUmVwbGFjZXJSZXN1bHQgfSBmcm9tICcuL1JlcGxhY2VyUmVzdWx0JztcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIGFic3RyYWN0IGltcGxlbWVudGF0aW9uIG9mIHtAbGluayBJUmVwbGFjZXJ9LlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUmVwbGFjZXIgaW1wbGVtZW50cyBJUmVwbGFjZXIge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpc2VzIGEgbmV3IGluc3RhbmNlIG9mIHRoZSB7QGxpbmsgUmVwbGFjZXJ9IGNsYXNzLlxuICAgICAqIEBwYXJhbSByZXBsYWNlbWVudCBUaGUge0BsaW5rIFJlcGxhY2VtZW50fSB0aGF0IHRoaXMgcmVwbGFjZXIgcGVyZm9ybXMgcmVwbGFjZW1lbnRzIGZvci5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IHJlcGxhY2VtZW50OiBSZXBsYWNlbWVudFxuICAgICkge31cblxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xuICAgIGV4ZWN1dGUocGF0aDogc3RyaW5nLCBjb250ZW50czogc3RyaW5nKTogUmVwbGFjZXJSZXN1bHQge1xuICAgICAgICBsZXQgbW9kaWZpZWQgPSBjb250ZW50cztcbiAgICAgICAgY29uc3QgcmVwbGFjZW1lbnRzOiBQZXJmb3JtZWRSZXBsYWNlbWVudFtdID0gW107XG5cbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gdGhpcy5nZXRFeHByZXNzaW9uRm9yKHBhdGgpLmV4ZWMobW9kaWZpZWQpO1xuXG4gICAgICAgICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHJlcGxhY2VXaXRoID0gdGhpcy5nZXRWYWx1ZUZvcihwYXRoKTtcbiAgICAgICAgICAgIG1vZGlmaWVkID0gbW9kaWZpZWQuc2xpY2UoMCwgbWF0Y2guaW5kZXgpICsgcmVwbGFjZVdpdGggKyBtb2RpZmllZC5zbGljZShtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCk7XG5cbiAgICAgICAgICAgIHJlcGxhY2VtZW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgICByZXBsYWNlbWVudDogdGhpcy5yZXBsYWNlbWVudCxcbiAgICAgICAgICAgICAgICBiZWZvcmU6IG1hdGNoWzBdLFxuICAgICAgICAgICAgICAgIGFmdGVyOiByZXBsYWNlV2l0aCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgcmVwbGFjZW1lbnRzLCBjb250ZW50czogbW9kaWZpZWQgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSB7QGxpbmsgUmVnRXhwfSB0byB1c2UgZm9yIGZpbmRpbmcgcmVwbGFjZW1lbnRzIGZvciB0aGUgc3BlY2lmaWVkIHBhdGguXG4gICAgICogQHBhcmFtIHBhdGggVGhlIHBhdGggb2YgdGhlIGZpbGUgdG8gcmVwbGFjZSBjb250ZW50cyBvZi5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0RXhwcmVzc2lvbkZvcihwYXRoOiBzdHJpbmcpOiBSZWdFeHA7XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHZhbHVlIHRvIHJlcGxhY2UgbWF0Y2hlcyB3aXRoIGZvciB0aGUgc3BlY2lmaWVkIHBhdGguXG4gICAgICogQHBhcmFtIHBhdGggVGhlIHBhdGggb2YgdGhlIGZpbGUgdG8gcmVwbGFjZSBjb250ZW50cyBvZi5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0VmFsdWVGb3IocGF0aDogc3RyaW5nKTogc3RyaW5nO1xufVxuIl19


/***/ }),

/***/ 259:
/***/ (function(module, __unusedexports, __webpack_require__) {

const Range = __webpack_require__(124)
const intersects = (r1, r2, options) => {
  r1 = new Range(r1, options)
  r2 = new Range(r2, options)
  return r1.intersects(r2)
}
module.exports = intersects


/***/ }),

/***/ 272:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberReplacer = void 0;
const LanguageSpecificReplacer_1 = __webpack_require__(399);
/**
 * Represents a {@link LanguageSpecificReplacer} that replaces number literals with another string.
 */
class NumberReplacer extends LanguageSpecificReplacer_1.LanguageSpecificReplacer {
    /** @inheritdoc */
    wrapLiteral(value) {
        return value;
    }
}
exports.NumberReplacer = NumberReplacer;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNvdXJjZS9SZXBsYWNlcnMvTnVtYmVyUmVwbGFjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLCtDQUErQztBQUMvQyxxR0FBcUc7OztBQUVyRyx5RUFBc0U7QUFFdEU7O0dBRUc7QUFDSCxNQUFhLGNBQWUsU0FBUSxtREFBd0I7SUFFeEQsa0JBQWtCO0lBQ1IsV0FBVyxDQUFDLEtBQWE7UUFDL0IsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztDQUNKO0FBTkQsd0NBTUMiLCJmaWxlIjoiUmVwbGFjZXJzL051bWJlclJlcGxhY2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBEb2xpdHRsZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS4gU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExhbmd1YWdlU3BlY2lmaWNSZXBsYWNlciB9IGZyb20gJy4vTGFuZ3VhZ2VTcGVjaWZpY1JlcGxhY2VyJztcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEge0BsaW5rIExhbmd1YWdlU3BlY2lmaWNSZXBsYWNlcn0gdGhhdCByZXBsYWNlcyBudW1iZXIgbGl0ZXJhbHMgd2l0aCBhbm90aGVyIHN0cmluZy5cbiAqL1xuZXhwb3J0IGNsYXNzIE51bWJlclJlcGxhY2VyIGV4dGVuZHMgTGFuZ3VhZ2VTcGVjaWZpY1JlcGxhY2VyIHtcblxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xuICAgIHByb3RlY3RlZCB3cmFwTGl0ZXJhbCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbn1cbiJdfQ==


/***/ }),

/***/ 283:
/***/ (function(module, __unusedexports, __webpack_require__) {

const compare = __webpack_require__(92)
const compareLoose = (a, b) => compare(a, b, true)
module.exports = compareLoose


/***/ }),

/***/ 298:
/***/ (function(module, __unusedexports, __webpack_require__) {

const compare = __webpack_require__(92)
const eq = (a, b, loose) => compare(a, b, loose) === 0
module.exports = eq


/***/ }),

/***/ 310:
/***/ (function(module, __unusedexports, __webpack_require__) {

const Range = __webpack_require__(124)
const satisfies = (version, range, options) => {
  try {
    range = new Range(range, options)
  } catch (er) {
    return false
  }
  return range.test(version)
}
module.exports = satisfies


/***/ }),

/***/ 323:
/***/ (function(module, __unusedexports, __webpack_require__) {

const outside = __webpack_require__(462)
// Determine if version is less than all the versions possible in the range
const ltr = (version, range, options) => outside(version, range, '<', options)
module.exports = ltr


/***/ }),

/***/ 345:
/***/ (function(__unusedmodule, exports) {

"use strict";

// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatePerformedReplacements = void 0;
/**
 * Represents an implementation of {@link IValidatePerformedReplacements} that checks for multiple or no replacements for a set of specified replacements.
 */
class ValidatePerformedReplacements {
    constructor(_specifiedReplacements, _allowMultipleReplacements, _allowNoReplacements) {
        this._specifiedReplacements = _specifiedReplacements;
        this._allowMultipleReplacements = _allowMultipleReplacements;
        this._allowNoReplacements = _allowNoReplacements;
    }
    /** @inheritdoc */
    validateFile(file) {
        for (const config of this._specifiedReplacements) {
            const performed = file.performed.filter(_ => _.replacement === config.replacement);
            if (performed.length > 1 && !this._allowMultipleReplacements) {
                throw new Error(`The replacement ${config.replacement} was performed multiple times in file ${file}.`);
            }
            if (performed.length < 1 && !this._allowNoReplacements) {
                throw new Error(`The replacement ${config.replacement} was not performed in file ${file}.`);
            }
        }
    }
}
exports.ValidatePerformedReplacements = ValidatePerformedReplacements;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNvdXJjZS9WYWxpZGF0ZVBlcmZvcm1lZFJlcGxhY2VtZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsK0NBQStDO0FBQy9DLHFHQUFxRzs7O0FBTXJHOztHQUVHO0FBQ0gsTUFBYSw2QkFBNkI7SUFDdEMsWUFDcUIsc0JBQTJDLEVBQzNDLDBCQUFtQyxFQUNuQyxvQkFBNkI7UUFGN0IsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUFxQjtRQUMzQywrQkFBMEIsR0FBMUIsMEJBQTBCLENBQVM7UUFDbkMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFTO0lBQy9DLENBQUM7SUFFSixrQkFBa0I7SUFDbEIsWUFBWSxDQUFDLElBQXNCO1FBQy9CLEtBQUssTUFBTSxNQUFNLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQzlDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsS0FBSyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFbkYsSUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRTtnQkFDMUQsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsTUFBTSxDQUFDLFdBQVcseUNBQXlDLElBQUksR0FBRyxDQUFDLENBQUM7YUFDMUc7WUFFRCxJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFO2dCQUNwRCxNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFtQixNQUFNLENBQUMsV0FBVyw4QkFBOEIsSUFBSSxHQUFHLENBQUMsQ0FBQzthQUMvRjtTQUNKO0lBQ0wsQ0FBQztDQUNKO0FBckJELHNFQXFCQyIsImZpbGUiOiJWYWxpZGF0ZVBlcmZvcm1lZFJlcGxhY2VtZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgRG9saXR0bGUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBSZXBsYWNlbWVudENvbmZpZyB9IGZyb20gJy4vQ29uZmlndXJhdGlvbi9SZXBsYWNlbWVudENvbmZpZyc7XG5pbXBvcnQgeyBJVmFsaWRhdGVQZXJmb3JtZWRSZXBsYWNlbWVudHMgfSBmcm9tICcuL0lWYWxpZGF0ZVBlcmZvcm1lZFJlcGxhY2VtZW50cyc7XG5pbXBvcnQgeyBJVmVyc2lvbkluZm9GaWxlIH0gZnJvbSAnLi9JVmVyc2lvbkluZm9GaWxlJztcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIGltcGxlbWVudGF0aW9uIG9mIHtAbGluayBJVmFsaWRhdGVQZXJmb3JtZWRSZXBsYWNlbWVudHN9IHRoYXQgY2hlY2tzIGZvciBtdWx0aXBsZSBvciBubyByZXBsYWNlbWVudHMgZm9yIGEgc2V0IG9mIHNwZWNpZmllZCByZXBsYWNlbWVudHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBWYWxpZGF0ZVBlcmZvcm1lZFJlcGxhY2VtZW50cyBpbXBsZW1lbnRzIElWYWxpZGF0ZVBlcmZvcm1lZFJlcGxhY2VtZW50cyB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX3NwZWNpZmllZFJlcGxhY2VtZW50czogUmVwbGFjZW1lbnRDb25maWdbXSxcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfYWxsb3dNdWx0aXBsZVJlcGxhY2VtZW50czogYm9vbGVhbixcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfYWxsb3dOb1JlcGxhY2VtZW50czogYm9vbGVhblxuICAgICkge31cblxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xuICAgIHZhbGlkYXRlRmlsZShmaWxlOiBJVmVyc2lvbkluZm9GaWxlKTogdm9pZCB7XG4gICAgICAgIGZvciAoY29uc3QgY29uZmlnIG9mIHRoaXMuX3NwZWNpZmllZFJlcGxhY2VtZW50cykge1xuICAgICAgICAgICAgY29uc3QgcGVyZm9ybWVkID0gZmlsZS5wZXJmb3JtZWQuZmlsdGVyKF8gPT4gXy5yZXBsYWNlbWVudCA9PT0gY29uZmlnLnJlcGxhY2VtZW50KTtcblxuICAgICAgICAgICAgaWYgKHBlcmZvcm1lZC5sZW5ndGggPiAxICYmICF0aGlzLl9hbGxvd011bHRpcGxlUmVwbGFjZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgcmVwbGFjZW1lbnQgJHtjb25maWcucmVwbGFjZW1lbnR9IHdhcyBwZXJmb3JtZWQgbXVsdGlwbGUgdGltZXMgaW4gZmlsZSAke2ZpbGV9LmApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocGVyZm9ybWVkLmxlbmd0aCA8IDEgJiYgIXRoaXMuX2FsbG93Tm9SZXBsYWNlbWVudHMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSByZXBsYWNlbWVudCAke2NvbmZpZy5yZXBsYWNlbWVudH0gd2FzIG5vdCBwZXJmb3JtZWQgaW4gZmlsZSAke2ZpbGV9LmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19


/***/ }),

/***/ 357:
/***/ (function(module) {

module.exports = require("assert");

/***/ }),

/***/ 396:
/***/ (function(module) {

"use strict";

module.exports = function (Yallist) {
  Yallist.prototype[Symbol.iterator] = function* () {
    for (let walker = this.head; walker; walker = walker.next) {
      yield walker.value
    }
  }
}


/***/ }),

/***/ 399:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageSpecificReplacer = void 0;
const Replacer_1 = __webpack_require__(240);
/**
 * Represents an abstract implementation of {@link Replacer} that handles language specific literal representations.
 */
class LanguageSpecificReplacer extends Replacer_1.Replacer {
    /**
     * Initialises a new instance of the {@link LanguageSpecificReplacer} class.
     * @param replacement The {@link Replacement} that this replacer performs replacements for.
     * @param _match The string used to match the values to replace.
     * @param _value The value used to replace the matches with.
     */
    constructor(replacement, _match, _value) {
        super(replacement);
        this._match = _match;
        this._value = _value;
    }
    /** @inheritdoc */
    getExpressionFor(path) {
        return new RegExp(this.wrapLiteral(this._match, path));
    }
    /** @inheritdoc */
    getValueFor(path) {
        return this.wrapLiteral(this._value, path);
    }
}
exports.LanguageSpecificReplacer = LanguageSpecificReplacer;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNvdXJjZS9SZXBsYWNlcnMvTGFuZ3VhZ2VTcGVjaWZpY1JlcGxhY2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwrQ0FBK0M7QUFDL0MscUdBQXFHOzs7QUFHckcseUNBQXNDO0FBRXRDOztHQUVHO0FBQ0gsTUFBc0Isd0JBQXlCLFNBQVEsbUJBQVE7SUFDM0Q7Ozs7O09BS0c7SUFDSCxZQUNJLFdBQXdCLEVBQ0wsTUFBYyxFQUNkLE1BQWM7UUFFakMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBSEEsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFHckMsQ0FBQztJQVNELGtCQUFrQjtJQUNSLGdCQUFnQixDQUFDLElBQVk7UUFDbkMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsa0JBQWtCO0lBQ1IsV0FBVyxDQUFDLElBQVk7UUFDOUIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQztDQUNKO0FBL0JELDREQStCQyIsImZpbGUiOiJSZXBsYWNlcnMvTGFuZ3VhZ2VTcGVjaWZpY1JlcGxhY2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBEb2xpdHRsZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS4gU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IFJlcGxhY2VtZW50IH0gZnJvbSAnLi4vQ29uZmlndXJhdGlvbi9SZXBsYWNlbWVudCc7XG5pbXBvcnQgeyBSZXBsYWNlciB9IGZyb20gJy4vUmVwbGFjZXInO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gYWJzdHJhY3QgaW1wbGVtZW50YXRpb24gb2Yge0BsaW5rIFJlcGxhY2VyfSB0aGF0IGhhbmRsZXMgbGFuZ3VhZ2Ugc3BlY2lmaWMgbGl0ZXJhbCByZXByZXNlbnRhdGlvbnMuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBMYW5ndWFnZVNwZWNpZmljUmVwbGFjZXIgZXh0ZW5kcyBSZXBsYWNlciB7XG4gICAgLyoqXG4gICAgICogSW5pdGlhbGlzZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIHtAbGluayBMYW5ndWFnZVNwZWNpZmljUmVwbGFjZXJ9IGNsYXNzLlxuICAgICAqIEBwYXJhbSByZXBsYWNlbWVudCBUaGUge0BsaW5rIFJlcGxhY2VtZW50fSB0aGF0IHRoaXMgcmVwbGFjZXIgcGVyZm9ybXMgcmVwbGFjZW1lbnRzIGZvci5cbiAgICAgKiBAcGFyYW0gX21hdGNoIFRoZSBzdHJpbmcgdXNlZCB0byBtYXRjaCB0aGUgdmFsdWVzIHRvIHJlcGxhY2UuXG4gICAgICogQHBhcmFtIF92YWx1ZSBUaGUgdmFsdWUgdXNlZCB0byByZXBsYWNlIHRoZSBtYXRjaGVzIHdpdGguXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHJlcGxhY2VtZW50OiBSZXBsYWNlbWVudCxcbiAgICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IF9tYXRjaDogc3RyaW5nLFxuICAgICAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgX3ZhbHVlOiBzdHJpbmdcbiAgICApIHtcbiAgICAgICAgc3VwZXIocmVwbGFjZW1lbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdyYXBzIGEgbGl0ZXJhbCB2YWx1ZSBmb3IgdGhlIHNwZWNpZmllZCBmaWxlIHR5cGUuXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBsaXRlcmFsIHZhbHVlIHRvIHdyYXAuXG4gICAgICogQHBhcmFtIHBhdGggVGhlIHBhdGggb2YgdGhlIGZpbGUgdG8gcmVwbGFjZSBjb250ZW50cyBvZi5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3Qgd3JhcExpdGVyYWwodmFsdWU6IHN0cmluZywgcGF0aDogc3RyaW5nKTogc3RyaW5nO1xuXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXG4gICAgcHJvdGVjdGVkIGdldEV4cHJlc3Npb25Gb3IocGF0aDogc3RyaW5nKTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAodGhpcy53cmFwTGl0ZXJhbCh0aGlzLl9tYXRjaCwgcGF0aCkpO1xuICAgIH1cblxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xuICAgIHByb3RlY3RlZCBnZXRWYWx1ZUZvcihwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy53cmFwTGl0ZXJhbCh0aGlzLl92YWx1ZSwgcGF0aCk7XG4gICAgfVxufVxuIl19


/***/ }),

/***/ 413:
/***/ (function(module, __unusedexports, __webpack_require__) {

module.exports = __webpack_require__(141);


/***/ }),

/***/ 431:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.issue = exports.issueCommand = void 0;
const os = __importStar(__webpack_require__(87));
const utils_1 = __webpack_require__(82);
/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */
function issueCommand(command, properties, message) {
    const cmd = new Command(command, properties, message);
    process.stdout.write(cmd.toString() + os.EOL);
}
exports.issueCommand = issueCommand;
function issue(name, message = '') {
    issueCommand(name, {}, message);
}
exports.issue = issue;
const CMD_STRING = '::';
class Command {
    constructor(command, properties, message) {
        if (!command) {
            command = 'missing.command';
        }
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' ';
            let first = true;
            for (const key in this.properties) {
                if (this.properties.hasOwnProperty(key)) {
                    const val = this.properties[key];
                    if (val) {
                        if (first) {
                            first = false;
                        }
                        else {
                            cmdStr += ',';
                        }
                        cmdStr += `${key}=${escapeProperty(val)}`;
                    }
                }
            }
        }
        cmdStr += `${CMD_STRING}${escapeData(this.message)}`;
        return cmdStr;
    }
}
function escapeData(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A');
}
function escapeProperty(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A')
        .replace(/:/g, '%3A')
        .replace(/,/g, '%2C');
}
//# sourceMappingURL=command.js.map

/***/ }),

/***/ 435:
/***/ (function(__unusedmodule, exports) {

"use strict";

// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
Object.defineProperty(exports, "__esModule", { value: true });
exports.isReplacementType = void 0;
/**
 * Checks whether the provided value is a {@link ReplacementType}.
 * @param value The value to check.
 * @returns A value indicating whether the value is a valid {@link ReplacementType}.
 */
exports.isReplacementType = (value) => {
    switch (value) {
        case 'number':
        case 'string':
        case 'exact':
            return true;
        default:
            return false;
    }
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNvdXJjZS9Db25maWd1cmF0aW9uL1JlcGxhY2VtZW50VHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsK0NBQStDO0FBQy9DLHFHQUFxRzs7O0FBT3JHOzs7O0dBSUc7QUFDVSxRQUFBLGlCQUFpQixHQUFHLENBQUMsS0FBYSxFQUE0QixFQUFFO0lBQ3pFLFFBQVEsS0FBSyxFQUFFO1FBQ1gsS0FBSyxRQUFRLENBQUM7UUFDZCxLQUFLLFFBQVEsQ0FBQztRQUNkLEtBQUssT0FBTztZQUNSLE9BQU8sSUFBSSxDQUFDO1FBQ2hCO1lBQ0ksT0FBTyxLQUFLLENBQUM7S0FDcEI7QUFDTCxDQUFDLENBQUMiLCJmaWxlIjoiQ29uZmlndXJhdGlvbi9SZXBsYWNlbWVudFR5cGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIERvbGl0dGxlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgcmVwbGFjZW1lbnQgdHlwZXMgY2FuIGJlIHBlcmZvcm1lZCBpbiBhIHZlcnNpb24gaW5mbyBmaWxlLlxuICovXG4gZXhwb3J0IHR5cGUgUmVwbGFjZW1lbnRUeXBlID0gJ251bWJlcicgfCAnc3RyaW5nJyB8ICdleGFjdCc7XG5cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgdGhlIHByb3ZpZGVkIHZhbHVlIGlzIGEge0BsaW5rIFJlcGxhY2VtZW50VHlwZX0uXG4gKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMgQSB2YWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHZhbHVlIGlzIGEgdmFsaWQge0BsaW5rIFJlcGxhY2VtZW50VHlwZX0uXG4gKi9cbmV4cG9ydCBjb25zdCBpc1JlcGxhY2VtZW50VHlwZSA9ICh2YWx1ZTogc3RyaW5nKTogdmFsdWUgaXMgUmVwbGFjZW1lbnRUeXBlID0+IHtcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgIGNhc2UgJ2V4YWN0JzpcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn07XG4iXX0=


/***/ }),

/***/ 462:
/***/ (function(module, __unusedexports, __webpack_require__) {

const SemVer = __webpack_require__(65)
const Comparator = __webpack_require__(174)
const {ANY} = Comparator
const Range = __webpack_require__(124)
const satisfies = __webpack_require__(310)
const gt = __webpack_require__(486)
const lt = __webpack_require__(586)
const lte = __webpack_require__(898)
const gte = __webpack_require__(167)

const outside = (version, range, hilo, options) => {
  version = new SemVer(version, options)
  range = new Range(range, options)

  let gtfn, ltefn, ltfn, comp, ecomp
  switch (hilo) {
    case '>':
      gtfn = gt
      ltefn = lte
      ltfn = lt
      comp = '>'
      ecomp = '>='
      break
    case '<':
      gtfn = lt
      ltefn = gte
      ltfn = gt
      comp = '<'
      ecomp = '<='
      break
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"')
  }

  // If it satisfies the range it is not outside
  if (satisfies(version, range, options)) {
    return false
  }

  // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.

  for (let i = 0; i < range.set.length; ++i) {
    const comparators = range.set[i]

    let high = null
    let low = null

    comparators.forEach((comparator) => {
      if (comparator.semver === ANY) {
        comparator = new Comparator('>=0.0.0')
      }
      high = high || comparator
      low = low || comparator
      if (gtfn(comparator.semver, high.semver, options)) {
        high = comparator
      } else if (ltfn(comparator.semver, low.semver, options)) {
        low = comparator
      }
    })

    // If the edge version comparator has a operator then our version
    // isn't outside it
    if (high.operator === comp || high.operator === ecomp) {
      return false
    }

    // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range
    if ((!low.operator || low.operator === comp) &&
        ltefn(version, low.semver)) {
      return false
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false
    }
  }
  return true
}

module.exports = outside


/***/ }),

/***/ 465:
/***/ (function(module, __unusedexports, __webpack_require__) {

const SemVer = __webpack_require__(65)
const compareBuild = (a, b, loose) => {
  const versionA = new SemVer(a, loose)
  const versionB = new SemVer(b, loose)
  return versionA.compare(versionB) || versionA.compareBuild(versionB)
}
module.exports = compareBuild


/***/ }),

/***/ 470:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIDToken = exports.getState = exports.saveState = exports.group = exports.endGroup = exports.startGroup = exports.info = exports.notice = exports.warning = exports.error = exports.debug = exports.isDebug = exports.setFailed = exports.setCommandEcho = exports.setOutput = exports.getBooleanInput = exports.getMultilineInput = exports.getInput = exports.addPath = exports.setSecret = exports.exportVariable = exports.ExitCode = void 0;
const command_1 = __webpack_require__(431);
const file_command_1 = __webpack_require__(102);
const utils_1 = __webpack_require__(82);
const os = __importStar(__webpack_require__(87));
const path = __importStar(__webpack_require__(622));
const oidc_utils_1 = __webpack_require__(742);
/**
 * The code to exit an action
 */
var ExitCode;
(function (ExitCode) {
    /**
     * A code indicating that the action was successful
     */
    ExitCode[ExitCode["Success"] = 0] = "Success";
    /**
     * A code indicating that the action was a failure
     */
    ExitCode[ExitCode["Failure"] = 1] = "Failure";
})(ExitCode = exports.ExitCode || (exports.ExitCode = {}));
//-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------
/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function exportVariable(name, val) {
    const convertedVal = utils_1.toCommandValue(val);
    process.env[name] = convertedVal;
    const filePath = process.env['GITHUB_ENV'] || '';
    if (filePath) {
        const delimiter = '_GitHubActionsFileCommandDelimeter_';
        const commandValue = `${name}<<${delimiter}${os.EOL}${convertedVal}${os.EOL}${delimiter}`;
        file_command_1.issueCommand('ENV', commandValue);
    }
    else {
        command_1.issueCommand('set-env', { name }, convertedVal);
    }
}
exports.exportVariable = exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */
function setSecret(secret) {
    command_1.issueCommand('add-mask', {}, secret);
}
exports.setSecret = setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */
function addPath(inputPath) {
    const filePath = process.env['GITHUB_PATH'] || '';
    if (filePath) {
        file_command_1.issueCommand('PATH', inputPath);
    }
    else {
        command_1.issueCommand('add-path', {}, inputPath);
    }
    process.env['PATH'] = `${inputPath}${path.delimiter}${process.env['PATH']}`;
}
exports.addPath = addPath;
/**
 * Gets the value of an input.
 * Unless trimWhitespace is set to false in InputOptions, the value is also trimmed.
 * Returns an empty string if the value is not defined.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */
function getInput(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
    if (options && options.required && !val) {
        throw new Error(`Input required and not supplied: ${name}`);
    }
    if (options && options.trimWhitespace === false) {
        return val;
    }
    return val.trim();
}
exports.getInput = getInput;
/**
 * Gets the values of an multiline input.  Each value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string[]
 *
 */
function getMultilineInput(name, options) {
    const inputs = getInput(name, options)
        .split('\n')
        .filter(x => x !== '');
    return inputs;
}
exports.getMultilineInput = getMultilineInput;
/**
 * Gets the input value of the boolean type in the YAML 1.2 "core schema" specification.
 * Support boolean input list: `true | True | TRUE | false | False | FALSE` .
 * The return value is also in boolean type.
 * ref: https://yaml.org/spec/1.2/spec.html#id2804923
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   boolean
 */
function getBooleanInput(name, options) {
    const trueValue = ['true', 'True', 'TRUE'];
    const falseValue = ['false', 'False', 'FALSE'];
    const val = getInput(name, options);
    if (trueValue.includes(val))
        return true;
    if (falseValue.includes(val))
        return false;
    throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${name}\n` +
        `Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
}
exports.getBooleanInput = getBooleanInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setOutput(name, value) {
    process.stdout.write(os.EOL);
    command_1.issueCommand('set-output', { name }, value);
}
exports.setOutput = setOutput;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */
function setCommandEcho(enabled) {
    command_1.issue('echo', enabled ? 'on' : 'off');
}
exports.setCommandEcho = setCommandEcho;
//-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */
function setFailed(message) {
    process.exitCode = ExitCode.Failure;
    error(message);
}
exports.setFailed = setFailed;
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------
/**
 * Gets whether Actions Step Debug is on or not
 */
function isDebug() {
    return process.env['RUNNER_DEBUG'] === '1';
}
exports.isDebug = isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */
function debug(message) {
    command_1.issueCommand('debug', {}, message);
}
exports.debug = debug;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function error(message, properties = {}) {
    command_1.issueCommand('error', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
exports.error = error;
/**
 * Adds a warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function warning(message, properties = {}) {
    command_1.issueCommand('warning', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
exports.warning = warning;
/**
 * Adds a notice issue
 * @param message notice issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function notice(message, properties = {}) {
    command_1.issueCommand('notice', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
exports.notice = notice;
/**
 * Writes info to log with console.log.
 * @param message info message
 */
function info(message) {
    process.stdout.write(message + os.EOL);
}
exports.info = info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */
function startGroup(name) {
    command_1.issue('group', name);
}
exports.startGroup = startGroup;
/**
 * End an output group.
 */
function endGroup() {
    command_1.issue('endgroup');
}
exports.endGroup = endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */
function group(name, fn) {
    return __awaiter(this, void 0, void 0, function* () {
        startGroup(name);
        let result;
        try {
            result = yield fn();
        }
        finally {
            endGroup();
        }
        return result;
    });
}
exports.group = group;
//-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------
/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function saveState(name, value) {
    command_1.issueCommand('save-state', { name }, value);
}
exports.saveState = saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */
function getState(name) {
    return process.env[`STATE_${name}`] || '';
}
exports.getState = getState;
function getIDToken(aud) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield oidc_utils_1.OidcClient.getIDToken(aud);
    });
}
exports.getIDToken = getIDToken;
//# sourceMappingURL=core.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __unusedexports, __webpack_require__) {

const Range = __webpack_require__(124)
const validRange = (range, options) => {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range(range, options).range || '*'
  } catch (er) {
    return null
  }
}
module.exports = validRange


/***/ }),

/***/ 486:
/***/ (function(module, __unusedexports, __webpack_require__) {

const compare = __webpack_require__(92)
const gt = (a, b, loose) => compare(a, b, loose) > 0
module.exports = gt


/***/ }),

/***/ 489:
/***/ (function(module, __unusedexports, __webpack_require__) {

const SemVer = __webpack_require__(65)
const patch = (a, loose) => new SemVer(a, loose).patch
module.exports = patch


/***/ }),

/***/ 499:
/***/ (function(module, __unusedexports, __webpack_require__) {

const SemVer = __webpack_require__(65)
const parse = __webpack_require__(830)
const {re, t} = __webpack_require__(976)

const coerce = (version, options) => {
  if (version instanceof SemVer) {
    return version
  }

  if (typeof version === 'number') {
    version = String(version)
  }

  if (typeof version !== 'string') {
    return null
  }

  options = options || {}

  let match = null
  if (!options.rtl) {
    match = version.match(re[t.COERCE])
  } else {
    // Find the right-most coercible string that does not share
    // a terminus with a more left-ward coercible string.
    // Eg, '1.2.3.4' wants to coerce '2.3.4', not '3.4' or '4'
    //
    // Walk through the string checking with a /g regexp
    // Manually set the index so as to pick up overlapping matches.
    // Stop when we get a match that ends at the string end, since no
    // coercible string can be more right-ward without the same terminus.
    let next
    while ((next = re[t.COERCERTL].exec(version)) &&
        (!match || match.index + match[0].length !== version.length)
    ) {
      if (!match ||
            next.index + next[0].length !== match.index + match[0].length) {
        match = next
      }
      re[t.COERCERTL].lastIndex = next.index + next[1].length + next[2].length
    }
    // leave it in a clean state
    re[t.COERCERTL].lastIndex = -1
  }

  if (match === null)
    return null

  return parse(`${match[2]}.${match[3] || '0'}.${match[4] || '0'}`, options)
}
module.exports = coerce


/***/ }),

/***/ 503:
/***/ (function(module, __unusedexports, __webpack_require__) {

const parse = __webpack_require__(830)
const clean = (version, options) => {
  const s = parse(version.trim().replace(/^[=v]+/, ''), options)
  return s ? s.version : null
}
module.exports = clean


/***/ }),

/***/ 531:
/***/ (function(module, __unusedexports, __webpack_require__) {

// Determine if version is greater than all the versions possible in the range.
const outside = __webpack_require__(462)
const gtr = (version, range, options) => outside(version, range, '>', options)
module.exports = gtr


/***/ }),

/***/ 539:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const http = __webpack_require__(605);
const https = __webpack_require__(211);
const pm = __webpack_require__(950);
let tunnel;
var HttpCodes;
(function (HttpCodes) {
    HttpCodes[HttpCodes["OK"] = 200] = "OK";
    HttpCodes[HttpCodes["MultipleChoices"] = 300] = "MultipleChoices";
    HttpCodes[HttpCodes["MovedPermanently"] = 301] = "MovedPermanently";
    HttpCodes[HttpCodes["ResourceMoved"] = 302] = "ResourceMoved";
    HttpCodes[HttpCodes["SeeOther"] = 303] = "SeeOther";
    HttpCodes[HttpCodes["NotModified"] = 304] = "NotModified";
    HttpCodes[HttpCodes["UseProxy"] = 305] = "UseProxy";
    HttpCodes[HttpCodes["SwitchProxy"] = 306] = "SwitchProxy";
    HttpCodes[HttpCodes["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    HttpCodes[HttpCodes["PermanentRedirect"] = 308] = "PermanentRedirect";
    HttpCodes[HttpCodes["BadRequest"] = 400] = "BadRequest";
    HttpCodes[HttpCodes["Unauthorized"] = 401] = "Unauthorized";
    HttpCodes[HttpCodes["PaymentRequired"] = 402] = "PaymentRequired";
    HttpCodes[HttpCodes["Forbidden"] = 403] = "Forbidden";
    HttpCodes[HttpCodes["NotFound"] = 404] = "NotFound";
    HttpCodes[HttpCodes["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HttpCodes[HttpCodes["NotAcceptable"] = 406] = "NotAcceptable";
    HttpCodes[HttpCodes["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    HttpCodes[HttpCodes["RequestTimeout"] = 408] = "RequestTimeout";
    HttpCodes[HttpCodes["Conflict"] = 409] = "Conflict";
    HttpCodes[HttpCodes["Gone"] = 410] = "Gone";
    HttpCodes[HttpCodes["TooManyRequests"] = 429] = "TooManyRequests";
    HttpCodes[HttpCodes["InternalServerError"] = 500] = "InternalServerError";
    HttpCodes[HttpCodes["NotImplemented"] = 501] = "NotImplemented";
    HttpCodes[HttpCodes["BadGateway"] = 502] = "BadGateway";
    HttpCodes[HttpCodes["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    HttpCodes[HttpCodes["GatewayTimeout"] = 504] = "GatewayTimeout";
})(HttpCodes = exports.HttpCodes || (exports.HttpCodes = {}));
var Headers;
(function (Headers) {
    Headers["Accept"] = "accept";
    Headers["ContentType"] = "content-type";
})(Headers = exports.Headers || (exports.Headers = {}));
var MediaTypes;
(function (MediaTypes) {
    MediaTypes["ApplicationJson"] = "application/json";
})(MediaTypes = exports.MediaTypes || (exports.MediaTypes = {}));
/**
 * Returns the proxy URL, depending upon the supplied url and proxy environment variables.
 * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
 */
function getProxyUrl(serverUrl) {
    let proxyUrl = pm.getProxyUrl(new URL(serverUrl));
    return proxyUrl ? proxyUrl.href : '';
}
exports.getProxyUrl = getProxyUrl;
const HttpRedirectCodes = [
    HttpCodes.MovedPermanently,
    HttpCodes.ResourceMoved,
    HttpCodes.SeeOther,
    HttpCodes.TemporaryRedirect,
    HttpCodes.PermanentRedirect
];
const HttpResponseRetryCodes = [
    HttpCodes.BadGateway,
    HttpCodes.ServiceUnavailable,
    HttpCodes.GatewayTimeout
];
const RetryableHttpVerbs = ['OPTIONS', 'GET', 'DELETE', 'HEAD'];
const ExponentialBackoffCeiling = 10;
const ExponentialBackoffTimeSlice = 5;
class HttpClientError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'HttpClientError';
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, HttpClientError.prototype);
    }
}
exports.HttpClientError = HttpClientError;
class HttpClientResponse {
    constructor(message) {
        this.message = message;
    }
    readBody() {
        return new Promise(async (resolve, reject) => {
            let output = Buffer.alloc(0);
            this.message.on('data', (chunk) => {
                output = Buffer.concat([output, chunk]);
            });
            this.message.on('end', () => {
                resolve(output.toString());
            });
        });
    }
}
exports.HttpClientResponse = HttpClientResponse;
function isHttps(requestUrl) {
    let parsedUrl = new URL(requestUrl);
    return parsedUrl.protocol === 'https:';
}
exports.isHttps = isHttps;
class HttpClient {
    constructor(userAgent, handlers, requestOptions) {
        this._ignoreSslError = false;
        this._allowRedirects = true;
        this._allowRedirectDowngrade = false;
        this._maxRedirects = 50;
        this._allowRetries = false;
        this._maxRetries = 1;
        this._keepAlive = false;
        this._disposed = false;
        this.userAgent = userAgent;
        this.handlers = handlers || [];
        this.requestOptions = requestOptions;
        if (requestOptions) {
            if (requestOptions.ignoreSslError != null) {
                this._ignoreSslError = requestOptions.ignoreSslError;
            }
            this._socketTimeout = requestOptions.socketTimeout;
            if (requestOptions.allowRedirects != null) {
                this._allowRedirects = requestOptions.allowRedirects;
            }
            if (requestOptions.allowRedirectDowngrade != null) {
                this._allowRedirectDowngrade = requestOptions.allowRedirectDowngrade;
            }
            if (requestOptions.maxRedirects != null) {
                this._maxRedirects = Math.max(requestOptions.maxRedirects, 0);
            }
            if (requestOptions.keepAlive != null) {
                this._keepAlive = requestOptions.keepAlive;
            }
            if (requestOptions.allowRetries != null) {
                this._allowRetries = requestOptions.allowRetries;
            }
            if (requestOptions.maxRetries != null) {
                this._maxRetries = requestOptions.maxRetries;
            }
        }
    }
    options(requestUrl, additionalHeaders) {
        return this.request('OPTIONS', requestUrl, null, additionalHeaders || {});
    }
    get(requestUrl, additionalHeaders) {
        return this.request('GET', requestUrl, null, additionalHeaders || {});
    }
    del(requestUrl, additionalHeaders) {
        return this.request('DELETE', requestUrl, null, additionalHeaders || {});
    }
    post(requestUrl, data, additionalHeaders) {
        return this.request('POST', requestUrl, data, additionalHeaders || {});
    }
    patch(requestUrl, data, additionalHeaders) {
        return this.request('PATCH', requestUrl, data, additionalHeaders || {});
    }
    put(requestUrl, data, additionalHeaders) {
        return this.request('PUT', requestUrl, data, additionalHeaders || {});
    }
    head(requestUrl, additionalHeaders) {
        return this.request('HEAD', requestUrl, null, additionalHeaders || {});
    }
    sendStream(verb, requestUrl, stream, additionalHeaders) {
        return this.request(verb, requestUrl, stream, additionalHeaders);
    }
    /**
     * Gets a typed object from an endpoint
     * Be aware that not found returns a null.  Other errors (4xx, 5xx) reject the promise
     */
    async getJson(requestUrl, additionalHeaders = {}) {
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        let res = await this.get(requestUrl, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
    }
    async postJson(requestUrl, obj, additionalHeaders = {}) {
        let data = JSON.stringify(obj, null, 2);
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
        let res = await this.post(requestUrl, data, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
    }
    async putJson(requestUrl, obj, additionalHeaders = {}) {
        let data = JSON.stringify(obj, null, 2);
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
        let res = await this.put(requestUrl, data, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
    }
    async patchJson(requestUrl, obj, additionalHeaders = {}) {
        let data = JSON.stringify(obj, null, 2);
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
        let res = await this.patch(requestUrl, data, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
    }
    /**
     * Makes a raw http request.
     * All other methods such as get, post, patch, and request ultimately call this.
     * Prefer get, del, post and patch
     */
    async request(verb, requestUrl, data, headers) {
        if (this._disposed) {
            throw new Error('Client has already been disposed.');
        }
        let parsedUrl = new URL(requestUrl);
        let info = this._prepareRequest(verb, parsedUrl, headers);
        // Only perform retries on reads since writes may not be idempotent.
        let maxTries = this._allowRetries && RetryableHttpVerbs.indexOf(verb) != -1
            ? this._maxRetries + 1
            : 1;
        let numTries = 0;
        let response;
        while (numTries < maxTries) {
            response = await this.requestRaw(info, data);
            // Check if it's an authentication challenge
            if (response &&
                response.message &&
                response.message.statusCode === HttpCodes.Unauthorized) {
                let authenticationHandler;
                for (let i = 0; i < this.handlers.length; i++) {
                    if (this.handlers[i].canHandleAuthentication(response)) {
                        authenticationHandler = this.handlers[i];
                        break;
                    }
                }
                if (authenticationHandler) {
                    return authenticationHandler.handleAuthentication(this, info, data);
                }
                else {
                    // We have received an unauthorized response but have no handlers to handle it.
                    // Let the response return to the caller.
                    return response;
                }
            }
            let redirectsRemaining = this._maxRedirects;
            while (HttpRedirectCodes.indexOf(response.message.statusCode) != -1 &&
                this._allowRedirects &&
                redirectsRemaining > 0) {
                const redirectUrl = response.message.headers['location'];
                if (!redirectUrl) {
                    // if there's no location to redirect to, we won't
                    break;
                }
                let parsedRedirectUrl = new URL(redirectUrl);
                if (parsedUrl.protocol == 'https:' &&
                    parsedUrl.protocol != parsedRedirectUrl.protocol &&
                    !this._allowRedirectDowngrade) {
                    throw new Error('Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.');
                }
                // we need to finish reading the response before reassigning response
                // which will leak the open socket.
                await response.readBody();
                // strip authorization header if redirected to a different hostname
                if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
                    for (let header in headers) {
                        // header names are case insensitive
                        if (header.toLowerCase() === 'authorization') {
                            delete headers[header];
                        }
                    }
                }
                // let's make the request with the new redirectUrl
                info = this._prepareRequest(verb, parsedRedirectUrl, headers);
                response = await this.requestRaw(info, data);
                redirectsRemaining--;
            }
            if (HttpResponseRetryCodes.indexOf(response.message.statusCode) == -1) {
                // If not a retry code, return immediately instead of retrying
                return response;
            }
            numTries += 1;
            if (numTries < maxTries) {
                await response.readBody();
                await this._performExponentialBackoff(numTries);
            }
        }
        return response;
    }
    /**
     * Needs to be called if keepAlive is set to true in request options.
     */
    dispose() {
        if (this._agent) {
            this._agent.destroy();
        }
        this._disposed = true;
    }
    /**
     * Raw request.
     * @param info
     * @param data
     */
    requestRaw(info, data) {
        return new Promise((resolve, reject) => {
            let callbackForResult = function (err, res) {
                if (err) {
                    reject(err);
                }
                resolve(res);
            };
            this.requestRawWithCallback(info, data, callbackForResult);
        });
    }
    /**
     * Raw request with callback.
     * @param info
     * @param data
     * @param onResult
     */
    requestRawWithCallback(info, data, onResult) {
        let socket;
        if (typeof data === 'string') {
            info.options.headers['Content-Length'] = Buffer.byteLength(data, 'utf8');
        }
        let callbackCalled = false;
        let handleResult = (err, res) => {
            if (!callbackCalled) {
                callbackCalled = true;
                onResult(err, res);
            }
        };
        let req = info.httpModule.request(info.options, (msg) => {
            let res = new HttpClientResponse(msg);
            handleResult(null, res);
        });
        req.on('socket', sock => {
            socket = sock;
        });
        // If we ever get disconnected, we want the socket to timeout eventually
        req.setTimeout(this._socketTimeout || 3 * 60000, () => {
            if (socket) {
                socket.end();
            }
            handleResult(new Error('Request timeout: ' + info.options.path), null);
        });
        req.on('error', function (err) {
            // err has statusCode property
            // res should have headers
            handleResult(err, null);
        });
        if (data && typeof data === 'string') {
            req.write(data, 'utf8');
        }
        if (data && typeof data !== 'string') {
            data.on('close', function () {
                req.end();
            });
            data.pipe(req);
        }
        else {
            req.end();
        }
    }
    /**
     * Gets an http agent. This function is useful when you need an http agent that handles
     * routing through a proxy server - depending upon the url and proxy environment variables.
     * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
     */
    getAgent(serverUrl) {
        let parsedUrl = new URL(serverUrl);
        return this._getAgent(parsedUrl);
    }
    _prepareRequest(method, requestUrl, headers) {
        const info = {};
        info.parsedUrl = requestUrl;
        const usingSsl = info.parsedUrl.protocol === 'https:';
        info.httpModule = usingSsl ? https : http;
        const defaultPort = usingSsl ? 443 : 80;
        info.options = {};
        info.options.host = info.parsedUrl.hostname;
        info.options.port = info.parsedUrl.port
            ? parseInt(info.parsedUrl.port)
            : defaultPort;
        info.options.path =
            (info.parsedUrl.pathname || '') + (info.parsedUrl.search || '');
        info.options.method = method;
        info.options.headers = this._mergeHeaders(headers);
        if (this.userAgent != null) {
            info.options.headers['user-agent'] = this.userAgent;
        }
        info.options.agent = this._getAgent(info.parsedUrl);
        // gives handlers an opportunity to participate
        if (this.handlers) {
            this.handlers.forEach(handler => {
                handler.prepareRequest(info.options);
            });
        }
        return info;
    }
    _mergeHeaders(headers) {
        const lowercaseKeys = obj => Object.keys(obj).reduce((c, k) => ((c[k.toLowerCase()] = obj[k]), c), {});
        if (this.requestOptions && this.requestOptions.headers) {
            return Object.assign({}, lowercaseKeys(this.requestOptions.headers), lowercaseKeys(headers));
        }
        return lowercaseKeys(headers || {});
    }
    _getExistingOrDefaultHeader(additionalHeaders, header, _default) {
        const lowercaseKeys = obj => Object.keys(obj).reduce((c, k) => ((c[k.toLowerCase()] = obj[k]), c), {});
        let clientHeader;
        if (this.requestOptions && this.requestOptions.headers) {
            clientHeader = lowercaseKeys(this.requestOptions.headers)[header];
        }
        return additionalHeaders[header] || clientHeader || _default;
    }
    _getAgent(parsedUrl) {
        let agent;
        let proxyUrl = pm.getProxyUrl(parsedUrl);
        let useProxy = proxyUrl && proxyUrl.hostname;
        if (this._keepAlive && useProxy) {
            agent = this._proxyAgent;
        }
        if (this._keepAlive && !useProxy) {
            agent = this._agent;
        }
        // if agent is already assigned use that agent.
        if (!!agent) {
            return agent;
        }
        const usingSsl = parsedUrl.protocol === 'https:';
        let maxSockets = 100;
        if (!!this.requestOptions) {
            maxSockets = this.requestOptions.maxSockets || http.globalAgent.maxSockets;
        }
        if (useProxy) {
            // If using proxy, need tunnel
            if (!tunnel) {
                tunnel = __webpack_require__(413);
            }
            const agentOptions = {
                maxSockets: maxSockets,
                keepAlive: this._keepAlive,
                proxy: {
                    ...((proxyUrl.username || proxyUrl.password) && {
                        proxyAuth: `${proxyUrl.username}:${proxyUrl.password}`
                    }),
                    host: proxyUrl.hostname,
                    port: proxyUrl.port
                }
            };
            let tunnelAgent;
            const overHttps = proxyUrl.protocol === 'https:';
            if (usingSsl) {
                tunnelAgent = overHttps ? tunnel.httpsOverHttps : tunnel.httpsOverHttp;
            }
            else {
                tunnelAgent = overHttps ? tunnel.httpOverHttps : tunnel.httpOverHttp;
            }
            agent = tunnelAgent(agentOptions);
            this._proxyAgent = agent;
        }
        // if reusing agent across request and tunneling agent isn't assigned create a new agent
        if (this._keepAlive && !agent) {
            const options = { keepAlive: this._keepAlive, maxSockets: maxSockets };
            agent = usingSsl ? new https.Agent(options) : new http.Agent(options);
            this._agent = agent;
        }
        // if not using private agent and tunnel agent isn't setup then use global agent
        if (!agent) {
            agent = usingSsl ? https.globalAgent : http.globalAgent;
        }
        if (usingSsl && this._ignoreSslError) {
            // we don't want to set NODE_TLS_REJECT_UNAUTHORIZED=0 since that will affect request for entire process
            // http.RequestOptions doesn't expose a way to modify RequestOptions.agent.options
            // we have to cast it to any and change it directly
            agent.options = Object.assign(agent.options || {}, {
                rejectUnauthorized: false
            });
        }
        return agent;
    }
    _performExponentialBackoff(retryNumber) {
        retryNumber = Math.min(ExponentialBackoffCeiling, retryNumber);
        const ms = ExponentialBackoffTimeSlice * Math.pow(2, retryNumber);
        return new Promise(resolve => setTimeout(() => resolve(), ms));
    }
    static dateTimeDeserializer(key, value) {
        if (typeof value === 'string') {
            let a = new Date(value);
            if (!isNaN(a.valueOf())) {
                return a;
            }
        }
        return value;
    }
    async _processResponse(res, options) {
        return new Promise(async (resolve, reject) => {
            const statusCode = res.message.statusCode;
            const response = {
                statusCode: statusCode,
                result: null,
                headers: {}
            };
            // not found leads to null obj returned
            if (statusCode == HttpCodes.NotFound) {
                resolve(response);
            }
            let obj;
            let contents;
            // get the result from the body
            try {
                contents = await res.readBody();
                if (contents && contents.length > 0) {
                    if (options && options.deserializeDates) {
                        obj = JSON.parse(contents, HttpClient.dateTimeDeserializer);
                    }
                    else {
                        obj = JSON.parse(contents);
                    }
                    response.result = obj;
                }
                response.headers = res.message.headers;
            }
            catch (err) {
                // Invalid resource (contents not json);  leaving result obj null
            }
            // note that 3xx redirects are handled by the http layer.
            if (statusCode > 299) {
                let msg;
                // if exception/error in body, attempt to get better error
                if (obj && obj.message) {
                    msg = obj.message;
                }
                else if (contents && contents.length > 0) {
                    // it may be the case that the exception is in the body message as string
                    msg = contents;
                }
                else {
                    msg = 'Failed request: (' + statusCode + ')';
                }
                let err = new HttpClientError(msg, statusCode);
                err.result = response.result;
                reject(err);
            }
            else {
                resolve(response);
            }
        });
    }
}
exports.HttpClient = HttpClient;


/***/ }),

/***/ 548:
/***/ (function(module) {

const debug = (
  typeof process === 'object' &&
  process.env &&
  process.env.NODE_DEBUG &&
  /\bsemver\b/i.test(process.env.NODE_DEBUG)
) ? (...args) => console.error('SEMVER', ...args)
  : () => {}

module.exports = debug


/***/ }),

/***/ 554:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionInfoFile = void 0;
const fs_1 = __importDefault(__webpack_require__(747));
/**
 * Represents an implementation of {@link IVersionInfoFile} that uses the local file system.
 */
class VersionInfoFile {
    /**
     * Initialises a new instance of the {@link VersionInfoFile} class.
     * @param path The path of the file on the local file system.
     * @param _logger The {@link Logger} to use for logging.
     */
    constructor(path, _logger) {
        this.path = path;
        this._logger = _logger;
        this._hasLoadedContents = false;
        /** @inheritdoc */
        this.performed = [];
    }
    /**
     * Loads the contents of the file on the local file system to memory.
     * @returns A {@link Promise} that represents the asynchronous operation.
     */
    load() {
        return new Promise((resolve, reject) => {
            this._logger.debug(`Reading contents of file from ${this.path}`);
            if (this._hasLoadedContents) {
                reject(new Error(`The file ${this.path} has already been loaded. It should only be done once.`));
                return;
            }
            fs_1.default.readFile(this.path, { encoding: 'utf-8' }, (error, data) => {
                if (!error) {
                    this._hasLoadedContents = true;
                    this._originalContents = data;
                    this._modifiedContents = data;
                    resolve();
                }
                else {
                    reject(error);
                }
            });
        });
    }
    /** @inheritdoc */
    execute(replacers) {
        if (!this._hasLoadedContents) {
            throw new Error(`The file ${this.path} has not been loaded. It needs to be loaded before replacements can be executed.`);
        }
        for (const replacer of replacers) {
            const result = replacer.execute(this.path, this._modifiedContents);
            this._modifiedContents = result.contents;
            this.performed.push(...result.replacements);
        }
    }
    /** @inheritdoc */
    persist() {
        return new Promise((resolve, reject) => {
            if (!this._hasLoadedContents) {
                reject(new Error(`The file ${this.path} has not been loaded. It needs to be loaded before it can be persisted.`));
            }
            this._logger.debug(`Writing new contents of file to ${this.path}`);
            fs_1.default.writeFile(this.path, this._modifiedContents, { encoding: 'utf-8' }, (error) => {
                if (!error) {
                    resolve();
                }
                else {
                    reject(error);
                }
            });
        });
    }
    /** @inheritdoc */
    toString() {
        return this.path;
    }
}
exports.VersionInfoFile = VersionInfoFile;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNvdXJjZS9WZXJzaW9uSW5mb0ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLCtDQUErQztBQUMvQyxxR0FBcUc7Ozs7OztBQUdyRyw0Q0FBb0I7QUFNcEI7O0dBRUc7QUFDSCxNQUFhLGVBQWU7SUFReEI7Ozs7T0FJRztJQUNILFlBQ2EsSUFBWSxFQUNKLE9BQWU7UUFEdkIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNKLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFkNUIsdUJBQWtCLEdBQVksS0FBSyxDQUFDO1FBSTVDLGtCQUFrQjtRQUNULGNBQVMsR0FBMkIsRUFBRSxDQUFDO0lBVTdDLENBQUM7SUFFSjs7O09BR0c7SUFDSCxJQUFJO1FBQ0EsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFFakUsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7Z0JBQ3pCLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLHdEQUF3RCxDQUFDLENBQUMsQ0FBQztnQkFDakcsT0FBTzthQUNWO1lBRUQsWUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBQyxFQUFFLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFO2dCQUN6RCxJQUFJLENBQUMsS0FBSyxFQUFFO29CQUNSLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7b0JBQy9CLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7b0JBQzlCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7b0JBQzlCLE9BQU8sRUFBRSxDQUFDO2lCQUNiO3FCQUFNO29CQUNILE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDakI7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGtCQUFrQjtJQUNsQixPQUFPLENBQUMsU0FBc0I7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMxQixNQUFNLElBQUksS0FBSyxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksa0ZBQWtGLENBQUMsQ0FBQztTQUM1SDtRQUVELEtBQUssTUFBTSxRQUFRLElBQUksU0FBUyxFQUFFO1lBQzlCLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsaUJBQWtCLENBQUMsQ0FBQztZQUNwRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMvQztJQUNMLENBQUM7SUFFRCxrQkFBa0I7SUFDbEIsT0FBTztRQUNILE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtnQkFDMUIsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUkseUVBQXlFLENBQUMsQ0FBQyxDQUFDO2FBQ3JIO1lBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUNBQW1DLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBRW5FLFlBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsaUJBQWtCLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDOUUsSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDUixPQUFPLEVBQUUsQ0FBQztpQkFDYjtxQkFBTTtvQkFDSCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2pCO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxrQkFBa0I7SUFDbEIsUUFBUTtRQUNKLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0NBQ0o7QUFoRkQsMENBZ0ZDIiwiZmlsZSI6IlZlcnNpb25JbmZvRmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgRG9saXR0bGUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICdAZG9saXR0bGUvZ2l0aHViLWFjdGlvbnMuc2hhcmVkLmxvZ2dpbmcnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcblxuaW1wb3J0IHsgSVJlcGxhY2VyIH0gZnJvbSAnLi9SZXBsYWNlcnMvSVJlcGxhY2VyJztcbmltcG9ydCB7IElWZXJzaW9uSW5mb0ZpbGUgfSBmcm9tICcuL0lWZXJzaW9uSW5mb0ZpbGUnO1xuaW1wb3J0IHsgUGVyZm9ybWVkUmVwbGFjZW1lbnQgfSBmcm9tICcuL1BlcmZvcm1lZFJlcGxhY2VtZW50JztcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIGltcGxlbWVudGF0aW9uIG9mIHtAbGluayBJVmVyc2lvbkluZm9GaWxlfSB0aGF0IHVzZXMgdGhlIGxvY2FsIGZpbGUgc3lzdGVtLlxuICovXG5leHBvcnQgY2xhc3MgVmVyc2lvbkluZm9GaWxlIGltcGxlbWVudHMgSVZlcnNpb25JbmZvRmlsZSB7XG4gICAgcHJpdmF0ZSBfaGFzTG9hZGVkQ29udGVudHM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIF9vcmlnaW5hbENvbnRlbnRzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBfbW9kaWZpZWRDb250ZW50czogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXG4gICAgcmVhZG9ubHkgcGVyZm9ybWVkOiBQZXJmb3JtZWRSZXBsYWNlbWVudFtdID0gW107XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXNlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUge0BsaW5rIFZlcnNpb25JbmZvRmlsZX0gY2xhc3MuXG4gICAgICogQHBhcmFtIHBhdGggVGhlIHBhdGggb2YgdGhlIGZpbGUgb24gdGhlIGxvY2FsIGZpbGUgc3lzdGVtLlxuICAgICAqIEBwYXJhbSBfbG9nZ2VyIFRoZSB7QGxpbmsgTG9nZ2VyfSB0byB1c2UgZm9yIGxvZ2dpbmcuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHJlYWRvbmx5IHBhdGg6IHN0cmluZyxcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfbG9nZ2VyOiBMb2dnZXJcbiAgICApIHt9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkcyB0aGUgY29udGVudHMgb2YgdGhlIGZpbGUgb24gdGhlIGxvY2FsIGZpbGUgc3lzdGVtIHRvIG1lbW9yeS5cbiAgICAgKiBAcmV0dXJucyBBIHtAbGluayBQcm9taXNlfSB0aGF0IHJlcHJlc2VudHMgdGhlIGFzeW5jaHJvbm91cyBvcGVyYXRpb24uXG4gICAgICovXG4gICAgbG9hZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5kZWJ1ZyhgUmVhZGluZyBjb250ZW50cyBvZiBmaWxlIGZyb20gJHt0aGlzLnBhdGh9YCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9oYXNMb2FkZWRDb250ZW50cykge1xuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYFRoZSBmaWxlICR7dGhpcy5wYXRofSBoYXMgYWxyZWFkeSBiZWVuIGxvYWRlZC4gSXQgc2hvdWxkIG9ubHkgYmUgZG9uZSBvbmNlLmApKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZzLnJlYWRGaWxlKHRoaXMucGF0aCwgeyBlbmNvZGluZzogJ3V0Zi04J30sIChlcnJvciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFzTG9hZGVkQ29udGVudHMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vcmlnaW5hbENvbnRlbnRzID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW9kaWZpZWRDb250ZW50cyA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBleGVjdXRlKHJlcGxhY2VyczogSVJlcGxhY2VyW10pOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9oYXNMb2FkZWRDb250ZW50cykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZmlsZSAke3RoaXMucGF0aH0gaGFzIG5vdCBiZWVuIGxvYWRlZC4gSXQgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSByZXBsYWNlbWVudHMgY2FuIGJlIGV4ZWN1dGVkLmApO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCByZXBsYWNlciBvZiByZXBsYWNlcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlcGxhY2VyLmV4ZWN1dGUodGhpcy5wYXRoLCB0aGlzLl9tb2RpZmllZENvbnRlbnRzISk7XG4gICAgICAgICAgICB0aGlzLl9tb2RpZmllZENvbnRlbnRzID0gcmVzdWx0LmNvbnRlbnRzO1xuICAgICAgICAgICAgdGhpcy5wZXJmb3JtZWQucHVzaCguLi5yZXN1bHQucmVwbGFjZW1lbnRzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xuICAgIHBlcnNpc3QoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2hhc0xvYWRlZENvbnRlbnRzKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgVGhlIGZpbGUgJHt0aGlzLnBhdGh9IGhhcyBub3QgYmVlbiBsb2FkZWQuIEl0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgaXQgY2FuIGJlIHBlcnNpc3RlZC5gKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5kZWJ1ZyhgV3JpdGluZyBuZXcgY29udGVudHMgb2YgZmlsZSB0byAke3RoaXMucGF0aH1gKTtcblxuICAgICAgICAgICAgZnMud3JpdGVGaWxlKHRoaXMucGF0aCwgdGhpcy5fbW9kaWZpZWRDb250ZW50cyEsIHsgZW5jb2Rpbmc6ICd1dGYtOCcgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGF0aDtcbiAgICB9XG59XG4iXX0=


/***/ }),

/***/ 586:
/***/ (function(module, __unusedexports, __webpack_require__) {

const compare = __webpack_require__(92)
const lt = (a, b, loose) => compare(a, b, loose) < 0
module.exports = lt


/***/ }),

/***/ 593:
/***/ (function(module, __unusedexports, __webpack_require__) {

const compareBuild = __webpack_require__(465)
const rsort = (list, loose) => list.sort((a, b) => compareBuild(b, a, loose))
module.exports = rsort


/***/ }),

/***/ 605:
/***/ (function(module) {

module.exports = require("http");

/***/ }),

/***/ 611:
/***/ (function(__unusedmodule, exports) {

"use strict";

// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
Object.defineProperty(exports, "__esModule", { value: true });
exports.isReplacement = void 0;
/**
 * Checks whether the provided value is a {@link Replacement}.
 * @param value The value to check.
 * @returns A value indicating whether the value is a valid {@link Replacement}.
 */
exports.isReplacement = (value) => {
    switch (value) {
        case 'major':
        case 'minor':
        case 'patch':
        case 'prerelease':
        case 'full':
            return true;
        default:
            return false;
    }
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNvdXJjZS9Db25maWd1cmF0aW9uL1JlcGxhY2VtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwrQ0FBK0M7QUFDL0MscUdBQXFHOzs7QUFPckc7Ozs7R0FJRztBQUNVLFFBQUEsYUFBYSxHQUFHLENBQUMsS0FBYSxFQUF3QixFQUFFO0lBQ2pFLFFBQVEsS0FBSyxFQUFFO1FBQ1gsS0FBSyxPQUFPLENBQUM7UUFDYixLQUFLLE9BQU8sQ0FBQztRQUNiLEtBQUssT0FBTyxDQUFDO1FBQ2IsS0FBSyxZQUFZLENBQUM7UUFDbEIsS0FBSyxNQUFNO1lBQ1AsT0FBTyxJQUFJLENBQUM7UUFDaEI7WUFDSSxPQUFPLEtBQUssQ0FBQztLQUNwQjtBQUNMLENBQUMsQ0FBQyIsImZpbGUiOiJDb25maWd1cmF0aW9uL1JlcGxhY2VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBEb2xpdHRsZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS4gU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHJlcGxhY2VtZW50IHRoYXQgY2FuIGJlIHBlcmZvcm1lZCBpbiBhIHZlcnNpb24gaW5mbyBmaWxlLlxuICovXG5leHBvcnQgdHlwZSBSZXBsYWNlbWVudCA9ICdtYWpvcicgfCAnbWlub3InIHwgJ3BhdGNoJyB8ICdwcmVyZWxlYXNlJyB8ICdmdWxsJztcblxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciB0aGUgcHJvdmlkZWQgdmFsdWUgaXMgYSB7QGxpbmsgUmVwbGFjZW1lbnR9LlxuICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIEEgdmFsdWUgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSB2YWx1ZSBpcyBhIHZhbGlkIHtAbGluayBSZXBsYWNlbWVudH0uXG4gKi9cbmV4cG9ydCBjb25zdCBpc1JlcGxhY2VtZW50ID0gKHZhbHVlOiBzdHJpbmcpOiB2YWx1ZSBpcyBSZXBsYWNlbWVudCA9PiB7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICBjYXNlICdtYWpvcic6XG4gICAgICAgIGNhc2UgJ21pbm9yJzpcbiAgICAgICAgY2FzZSAncGF0Y2gnOlxuICAgICAgICBjYXNlICdwcmVyZWxlYXNlJzpcbiAgICAgICAgY2FzZSAnZnVsbCc6XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59O1xuIl19


/***/ }),

/***/ 612:
/***/ (function(module, __unusedexports, __webpack_require__) {

"use strict";

module.exports = Yallist

Yallist.Node = Node
Yallist.create = Yallist

function Yallist (list) {
  var self = this
  if (!(self instanceof Yallist)) {
    self = new Yallist()
  }

  self.tail = null
  self.head = null
  self.length = 0

  if (list && typeof list.forEach === 'function') {
    list.forEach(function (item) {
      self.push(item)
    })
  } else if (arguments.length > 0) {
    for (var i = 0, l = arguments.length; i < l; i++) {
      self.push(arguments[i])
    }
  }

  return self
}

Yallist.prototype.removeNode = function (node) {
  if (node.list !== this) {
    throw new Error('removing node which does not belong to this list')
  }

  var next = node.next
  var prev = node.prev

  if (next) {
    next.prev = prev
  }

  if (prev) {
    prev.next = next
  }

  if (node === this.head) {
    this.head = next
  }
  if (node === this.tail) {
    this.tail = prev
  }

  node.list.length--
  node.next = null
  node.prev = null
  node.list = null

  return next
}

Yallist.prototype.unshiftNode = function (node) {
  if (node === this.head) {
    return
  }

  if (node.list) {
    node.list.removeNode(node)
  }

  var head = this.head
  node.list = this
  node.next = head
  if (head) {
    head.prev = node
  }

  this.head = node
  if (!this.tail) {
    this.tail = node
  }
  this.length++
}

Yallist.prototype.pushNode = function (node) {
  if (node === this.tail) {
    return
  }

  if (node.list) {
    node.list.removeNode(node)
  }

  var tail = this.tail
  node.list = this
  node.prev = tail
  if (tail) {
    tail.next = node
  }

  this.tail = node
  if (!this.head) {
    this.head = node
  }
  this.length++
}

Yallist.prototype.push = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    push(this, arguments[i])
  }
  return this.length
}

Yallist.prototype.unshift = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    unshift(this, arguments[i])
  }
  return this.length
}

Yallist.prototype.pop = function () {
  if (!this.tail) {
    return undefined
  }

  var res = this.tail.value
  this.tail = this.tail.prev
  if (this.tail) {
    this.tail.next = null
  } else {
    this.head = null
  }
  this.length--
  return res
}

Yallist.prototype.shift = function () {
  if (!this.head) {
    return undefined
  }

  var res = this.head.value
  this.head = this.head.next
  if (this.head) {
    this.head.prev = null
  } else {
    this.tail = null
  }
  this.length--
  return res
}

Yallist.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this.head, i = 0; walker !== null; i++) {
    fn.call(thisp, walker.value, i, this)
    walker = walker.next
  }
}

Yallist.prototype.forEachReverse = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
    fn.call(thisp, walker.value, i, this)
    walker = walker.prev
  }
}

Yallist.prototype.get = function (n) {
  for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.next
  }
  if (i === n && walker !== null) {
    return walker.value
  }
}

Yallist.prototype.getReverse = function (n) {
  for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.prev
  }
  if (i === n && walker !== null) {
    return walker.value
  }
}

Yallist.prototype.map = function (fn, thisp) {
  thisp = thisp || this
  var res = new Yallist()
  for (var walker = this.head; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this))
    walker = walker.next
  }
  return res
}

Yallist.prototype.mapReverse = function (fn, thisp) {
  thisp = thisp || this
  var res = new Yallist()
  for (var walker = this.tail; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this))
    walker = walker.prev
  }
  return res
}

Yallist.prototype.reduce = function (fn, initial) {
  var acc
  var walker = this.head
  if (arguments.length > 1) {
    acc = initial
  } else if (this.head) {
    walker = this.head.next
    acc = this.head.value
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = 0; walker !== null; i++) {
    acc = fn(acc, walker.value, i)
    walker = walker.next
  }

  return acc
}

Yallist.prototype.reduceReverse = function (fn, initial) {
  var acc
  var walker = this.tail
  if (arguments.length > 1) {
    acc = initial
  } else if (this.tail) {
    walker = this.tail.prev
    acc = this.tail.value
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = this.length - 1; walker !== null; i--) {
    acc = fn(acc, walker.value, i)
    walker = walker.prev
  }

  return acc
}

Yallist.prototype.toArray = function () {
  var arr = new Array(this.length)
  for (var i = 0, walker = this.head; walker !== null; i++) {
    arr[i] = walker.value
    walker = walker.next
  }
  return arr
}

Yallist.prototype.toArrayReverse = function () {
  var arr = new Array(this.length)
  for (var i = 0, walker = this.tail; walker !== null; i++) {
    arr[i] = walker.value
    walker = walker.prev
  }
  return arr
}

Yallist.prototype.slice = function (from, to) {
  to = to || this.length
  if (to < 0) {
    to += this.length
  }
  from = from || 0
  if (from < 0) {
    from += this.length
  }
  var ret = new Yallist()
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0
  }
  if (to > this.length) {
    to = this.length
  }
  for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
    walker = walker.next
  }
  for (; walker !== null && i < to; i++, walker = walker.next) {
    ret.push(walker.value)
  }
  return ret
}

Yallist.prototype.sliceReverse = function (from, to) {
  to = to || this.length
  if (to < 0) {
    to += this.length
  }
  from = from || 0
  if (from < 0) {
    from += this.length
  }
  var ret = new Yallist()
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0
  }
  if (to > this.length) {
    to = this.length
  }
  for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
    walker = walker.prev
  }
  for (; walker !== null && i > from; i--, walker = walker.prev) {
    ret.push(walker.value)
  }
  return ret
}

Yallist.prototype.splice = function (start, deleteCount, ...nodes) {
  if (start > this.length) {
    start = this.length - 1
  }
  if (start < 0) {
    start = this.length + start;
  }

  for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
    walker = walker.next
  }

  var ret = []
  for (var i = 0; walker && i < deleteCount; i++) {
    ret.push(walker.value)
    walker = this.removeNode(walker)
  }
  if (walker === null) {
    walker = this.tail
  }

  if (walker !== this.head && walker !== this.tail) {
    walker = walker.prev
  }

  for (var i = 0; i < nodes.length; i++) {
    walker = insert(this, walker, nodes[i])
  }
  return ret;
}

Yallist.prototype.reverse = function () {
  var head = this.head
  var tail = this.tail
  for (var walker = head; walker !== null; walker = walker.prev) {
    var p = walker.prev
    walker.prev = walker.next
    walker.next = p
  }
  this.head = tail
  this.tail = head
  return this
}

function insert (self, node, value) {
  var inserted = node === self.head ?
    new Node(value, null, node, self) :
    new Node(value, node, node.next, self)

  if (inserted.next === null) {
    self.tail = inserted
  }
  if (inserted.prev === null) {
    self.head = inserted
  }

  self.length++

  return inserted
}

function push (self, item) {
  self.tail = new Node(item, self.tail, null, self)
  if (!self.head) {
    self.head = self.tail
  }
  self.length++
}

function unshift (self, item) {
  self.head = new Node(item, null, self.head, self)
  if (!self.tail) {
    self.tail = self.head
  }
  self.length++
}

function Node (value, prev, next, list) {
  if (!(this instanceof Node)) {
    return new Node(value, prev, next, list)
  }

  this.list = list
  this.value = value

  if (prev) {
    prev.next = this
    this.prev = prev
  } else {
    this.prev = null
  }

  if (next) {
    next.prev = this
    this.next = next
  } else {
    this.next = null
  }
}

try {
  // add if support for Symbol.iterator is present
  __webpack_require__(396)(Yallist)
} catch (er) {}


/***/ }),

/***/ 614:
/***/ (function(module) {

module.exports = require("events");

/***/ }),

/***/ 622:
/***/ (function(module) {

module.exports = require("path");

/***/ }),

/***/ 630:
/***/ (function(module, __unusedexports, __webpack_require__) {

const compare = __webpack_require__(92)
const rcompare = (a, b, loose) => compare(b, a, loose)
module.exports = rcompare


/***/ }),

/***/ 631:
/***/ (function(module) {

module.exports = require("net");

/***/ }),

/***/ 641:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklMb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJJTG9nZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIERvbGl0dGxlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyoqXG4gKiBEZWZpbmVzIGEgc3lzdGVtIHRoYXQgY2FuIGxvZyBtZXNzYWdlc1xuICpcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgSUxvZ2dlclxuICovXG5leHBvcnQgaW50ZXJmYWNlIElMb2dnZXIge1xuXG4gICAgLyoqXG4gICAgICogTG9ncyBhIGRlYnVnZ2luZyBtZXNzYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICAgICAqL1xuICAgIGRlYnVnKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQ7XG5cbiAgICAvKipcbiAgICAgKiBMb2dzIGEgd2FybmluZyBtZXNzYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICAgICAqL1xuICAgIHdhcm5pbmcobWVzc2FnZTogc3RyaW5nKTogdm9pZDtcblxuICAgIC8qKlxuICAgICAqIExvZ3MgYW4gZXJyb3IgbWVzc2FnZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAgICAgKi9cbiAgICBlcnJvcihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkO1xuXG4gICAgLyoqXG4gICAgICogTG9ncyB0aGUgaW5mbyBtZXNzYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICAgICAqL1xuICAgIGluZm8obWVzc2FnZTogc3RyaW5nKTogdm9pZFxuXG59XG4iXX0=


/***/ }),

/***/ 669:
/***/ (function(module) {

module.exports = require("util");

/***/ }),

/***/ 674:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringReplacer = void 0;
const LanguageSpecificReplacer_1 = __webpack_require__(399);
/**
 * Represents a {@link LanguageSpecificReplacer} that replaces string literals with another string.
 */
class StringReplacer extends LanguageSpecificReplacer_1.LanguageSpecificReplacer {
    /** @inheritdoc */
    wrapLiteral(value, path) {
        const quote = this.getStringQuoteFor(path);
        return quote + value + quote;
    }
    getStringQuoteFor(path) {
        if (path.match(/.[jt]s$/i)) {
            return '\'';
        }
        if (path.match(/.go/i)) {
            return '"';
        }
        if (path.match(/.cs/i)) {
            return '"';
        }
        return '"';
    }
}
exports.StringReplacer = StringReplacer;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNvdXJjZS9SZXBsYWNlcnMvU3RyaW5nUmVwbGFjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLCtDQUErQztBQUMvQyxxR0FBcUc7OztBQUVyRyx5RUFBc0U7QUFFdEU7O0dBRUc7QUFDSCxNQUFhLGNBQWUsU0FBUSxtREFBd0I7SUFDeEQsa0JBQWtCO0lBQ1IsV0FBVyxDQUFDLEtBQWEsRUFBRSxJQUFZO1FBQzdDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxPQUFPLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFFTyxpQkFBaUIsQ0FBQyxJQUFZO1FBQ2xDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN4QixPQUFPLElBQUksQ0FBQztTQUNmO1FBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3BCLE9BQU8sR0FBRyxDQUFDO1NBQ2Q7UUFFRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDcEIsT0FBTyxHQUFHLENBQUM7U0FDZDtRQUVELE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztDQUNKO0FBdEJELHdDQXNCQyIsImZpbGUiOiJSZXBsYWNlcnMvU3RyaW5nUmVwbGFjZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIERvbGl0dGxlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTGFuZ3VhZ2VTcGVjaWZpY1JlcGxhY2VyIH0gZnJvbSAnLi9MYW5ndWFnZVNwZWNpZmljUmVwbGFjZXInO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSB7QGxpbmsgTGFuZ3VhZ2VTcGVjaWZpY1JlcGxhY2VyfSB0aGF0IHJlcGxhY2VzIHN0cmluZyBsaXRlcmFscyB3aXRoIGFub3RoZXIgc3RyaW5nLlxuICovXG5leHBvcnQgY2xhc3MgU3RyaW5nUmVwbGFjZXIgZXh0ZW5kcyBMYW5ndWFnZVNwZWNpZmljUmVwbGFjZXIge1xuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xuICAgIHByb3RlY3RlZCB3cmFwTGl0ZXJhbCh2YWx1ZTogc3RyaW5nLCBwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBxdW90ZSA9IHRoaXMuZ2V0U3RyaW5nUXVvdGVGb3IocGF0aCk7XG4gICAgICAgIHJldHVybiBxdW90ZSArIHZhbHVlICsgcXVvdGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRTdHJpbmdRdW90ZUZvcihwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBpZiAocGF0aC5tYXRjaCgvLltqdF1zJC9pKSkge1xuICAgICAgICAgICAgcmV0dXJuICdcXCcnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhdGgubWF0Y2goLy5nby9pKSkge1xuICAgICAgICAgICAgcmV0dXJuICdcIic7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGF0aC5tYXRjaCgvLmNzL2kpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ1wiJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnXCInO1xuICAgIH1cbn1cbiJdfQ==


/***/ }),

/***/ 702:
/***/ (function(module, __unusedexports, __webpack_require__) {

"use strict";


// A linked list to keep track of recently-used-ness
const Yallist = __webpack_require__(612)

const MAX = Symbol('max')
const LENGTH = Symbol('length')
const LENGTH_CALCULATOR = Symbol('lengthCalculator')
const ALLOW_STALE = Symbol('allowStale')
const MAX_AGE = Symbol('maxAge')
const DISPOSE = Symbol('dispose')
const NO_DISPOSE_ON_SET = Symbol('noDisposeOnSet')
const LRU_LIST = Symbol('lruList')
const CACHE = Symbol('cache')
const UPDATE_AGE_ON_GET = Symbol('updateAgeOnGet')

const naiveLength = () => 1

// lruList is a yallist where the head is the youngest
// item, and the tail is the oldest.  the list contains the Hit
// objects as the entries.
// Each Hit object has a reference to its Yallist.Node.  This
// never changes.
//
// cache is a Map (or PseudoMap) that matches the keys to
// the Yallist.Node object.
class LRUCache {
  constructor (options) {
    if (typeof options === 'number')
      options = { max: options }

    if (!options)
      options = {}

    if (options.max && (typeof options.max !== 'number' || options.max < 0))
      throw new TypeError('max must be a non-negative number')
    // Kind of weird to have a default max of Infinity, but oh well.
    const max = this[MAX] = options.max || Infinity

    const lc = options.length || naiveLength
    this[LENGTH_CALCULATOR] = (typeof lc !== 'function') ? naiveLength : lc
    this[ALLOW_STALE] = options.stale || false
    if (options.maxAge && typeof options.maxAge !== 'number')
      throw new TypeError('maxAge must be a number')
    this[MAX_AGE] = options.maxAge || 0
    this[DISPOSE] = options.dispose
    this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false
    this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false
    this.reset()
  }

  // resize the cache when the max changes.
  set max (mL) {
    if (typeof mL !== 'number' || mL < 0)
      throw new TypeError('max must be a non-negative number')

    this[MAX] = mL || Infinity
    trim(this)
  }
  get max () {
    return this[MAX]
  }

  set allowStale (allowStale) {
    this[ALLOW_STALE] = !!allowStale
  }
  get allowStale () {
    return this[ALLOW_STALE]
  }

  set maxAge (mA) {
    if (typeof mA !== 'number')
      throw new TypeError('maxAge must be a non-negative number')

    this[MAX_AGE] = mA
    trim(this)
  }
  get maxAge () {
    return this[MAX_AGE]
  }

  // resize the cache when the lengthCalculator changes.
  set lengthCalculator (lC) {
    if (typeof lC !== 'function')
      lC = naiveLength

    if (lC !== this[LENGTH_CALCULATOR]) {
      this[LENGTH_CALCULATOR] = lC
      this[LENGTH] = 0
      this[LRU_LIST].forEach(hit => {
        hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key)
        this[LENGTH] += hit.length
      })
    }
    trim(this)
  }
  get lengthCalculator () { return this[LENGTH_CALCULATOR] }

  get length () { return this[LENGTH] }
  get itemCount () { return this[LRU_LIST].length }

  rforEach (fn, thisp) {
    thisp = thisp || this
    for (let walker = this[LRU_LIST].tail; walker !== null;) {
      const prev = walker.prev
      forEachStep(this, fn, walker, thisp)
      walker = prev
    }
  }

  forEach (fn, thisp) {
    thisp = thisp || this
    for (let walker = this[LRU_LIST].head; walker !== null;) {
      const next = walker.next
      forEachStep(this, fn, walker, thisp)
      walker = next
    }
  }

  keys () {
    return this[LRU_LIST].toArray().map(k => k.key)
  }

  values () {
    return this[LRU_LIST].toArray().map(k => k.value)
  }

  reset () {
    if (this[DISPOSE] &&
        this[LRU_LIST] &&
        this[LRU_LIST].length) {
      this[LRU_LIST].forEach(hit => this[DISPOSE](hit.key, hit.value))
    }

    this[CACHE] = new Map() // hash of items by key
    this[LRU_LIST] = new Yallist() // list of items in order of use recency
    this[LENGTH] = 0 // length of items in the list
  }

  dump () {
    return this[LRU_LIST].map(hit =>
      isStale(this, hit) ? false : {
        k: hit.key,
        v: hit.value,
        e: hit.now + (hit.maxAge || 0)
      }).toArray().filter(h => h)
  }

  dumpLru () {
    return this[LRU_LIST]
  }

  set (key, value, maxAge) {
    maxAge = maxAge || this[MAX_AGE]

    if (maxAge && typeof maxAge !== 'number')
      throw new TypeError('maxAge must be a number')

    const now = maxAge ? Date.now() : 0
    const len = this[LENGTH_CALCULATOR](value, key)

    if (this[CACHE].has(key)) {
      if (len > this[MAX]) {
        del(this, this[CACHE].get(key))
        return false
      }

      const node = this[CACHE].get(key)
      const item = node.value

      // dispose of the old one before overwriting
      // split out into 2 ifs for better coverage tracking
      if (this[DISPOSE]) {
        if (!this[NO_DISPOSE_ON_SET])
          this[DISPOSE](key, item.value)
      }

      item.now = now
      item.maxAge = maxAge
      item.value = value
      this[LENGTH] += len - item.length
      item.length = len
      this.get(key)
      trim(this)
      return true
    }

    const hit = new Entry(key, value, len, now, maxAge)

    // oversized objects fall out of cache automatically.
    if (hit.length > this[MAX]) {
      if (this[DISPOSE])
        this[DISPOSE](key, value)

      return false
    }

    this[LENGTH] += hit.length
    this[LRU_LIST].unshift(hit)
    this[CACHE].set(key, this[LRU_LIST].head)
    trim(this)
    return true
  }

  has (key) {
    if (!this[CACHE].has(key)) return false
    const hit = this[CACHE].get(key).value
    return !isStale(this, hit)
  }

  get (key) {
    return get(this, key, true)
  }

  peek (key) {
    return get(this, key, false)
  }

  pop () {
    const node = this[LRU_LIST].tail
    if (!node)
      return null

    del(this, node)
    return node.value
  }

  del (key) {
    del(this, this[CACHE].get(key))
  }

  load (arr) {
    // reset the cache
    this.reset()

    const now = Date.now()
    // A previous serialized cache has the most recent items first
    for (let l = arr.length - 1; l >= 0; l--) {
      const hit = arr[l]
      const expiresAt = hit.e || 0
      if (expiresAt === 0)
        // the item was created without expiration in a non aged cache
        this.set(hit.k, hit.v)
      else {
        const maxAge = expiresAt - now
        // dont add already expired items
        if (maxAge > 0) {
          this.set(hit.k, hit.v, maxAge)
        }
      }
    }
  }

  prune () {
    this[CACHE].forEach((value, key) => get(this, key, false))
  }
}

const get = (self, key, doUse) => {
  const node = self[CACHE].get(key)
  if (node) {
    const hit = node.value
    if (isStale(self, hit)) {
      del(self, node)
      if (!self[ALLOW_STALE])
        return undefined
    } else {
      if (doUse) {
        if (self[UPDATE_AGE_ON_GET])
          node.value.now = Date.now()
        self[LRU_LIST].unshiftNode(node)
      }
    }
    return hit.value
  }
}

const isStale = (self, hit) => {
  if (!hit || (!hit.maxAge && !self[MAX_AGE]))
    return false

  const diff = Date.now() - hit.now
  return hit.maxAge ? diff > hit.maxAge
    : self[MAX_AGE] && (diff > self[MAX_AGE])
}

const trim = self => {
  if (self[LENGTH] > self[MAX]) {
    for (let walker = self[LRU_LIST].tail;
      self[LENGTH] > self[MAX] && walker !== null;) {
      // We know that we're about to delete this one, and also
      // what the next least recently used key will be, so just
      // go ahead and set it now.
      const prev = walker.prev
      del(self, walker)
      walker = prev
    }
  }
}

const del = (self, node) => {
  if (node) {
    const hit = node.value
    if (self[DISPOSE])
      self[DISPOSE](hit.key, hit.value)

    self[LENGTH] -= hit.length
    self[CACHE].delete(hit.key)
    self[LRU_LIST].removeNode(node)
  }
}

class Entry {
  constructor (key, value, length, now, maxAge) {
    this.key = key
    this.value = value
    this.length = length
    this.now = now
    this.maxAge = maxAge || 0
  }
}

const forEachStep = (self, fn, node, thisp) => {
  let hit = node.value
  if (isStale(self, hit)) {
    del(self, node)
    if (!self[ALLOW_STALE])
      hit = undefined
  }
  if (hit)
    fn.call(thisp, hit.value, hit.key, self)
}

module.exports = LRUCache


/***/ }),

/***/ 714:
/***/ (function(module, __unusedexports, __webpack_require__) {

const parse = __webpack_require__(830)
const valid = (version, options) => {
  const v = parse(version, options)
  return v ? v.version : null
}
module.exports = valid


/***/ }),

/***/ 740:
/***/ (function(module, __unusedexports, __webpack_require__) {

const SemVer = __webpack_require__(65)
const Range = __webpack_require__(124)
const minSatisfying = (versions, range, options) => {
  let min = null
  let minSV = null
  let rangeObj = null
  try {
    rangeObj = new Range(range, options)
  } catch (er) {
    return null
  }
  versions.forEach((v) => {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!min || minSV.compare(v) === 1) {
        // compare(min, v, true)
        min = v
        minSV = new SemVer(min, options)
      }
    }
  })
  return min
}
module.exports = minSatisfying


/***/ }),

/***/ 742:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OidcClient = void 0;
const http_client_1 = __webpack_require__(539);
const auth_1 = __webpack_require__(226);
const core_1 = __webpack_require__(470);
class OidcClient {
    static createHttpClient(allowRetry = true, maxRetry = 10) {
        const requestOptions = {
            allowRetries: allowRetry,
            maxRetries: maxRetry
        };
        return new http_client_1.HttpClient('actions/oidc-client', [new auth_1.BearerCredentialHandler(OidcClient.getRequestToken())], requestOptions);
    }
    static getRequestToken() {
        const token = process.env['ACTIONS_ID_TOKEN_REQUEST_TOKEN'];
        if (!token) {
            throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable');
        }
        return token;
    }
    static getIDTokenUrl() {
        const runtimeUrl = process.env['ACTIONS_ID_TOKEN_REQUEST_URL'];
        if (!runtimeUrl) {
            throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable');
        }
        return runtimeUrl;
    }
    static getCall(id_token_url) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const httpclient = OidcClient.createHttpClient();
            const res = yield httpclient
                .getJson(id_token_url)
                .catch(error => {
                throw new Error(`Failed to get ID Token. \n 
        Error Code : ${error.statusCode}\n 
        Error Message: ${error.result.message}`);
            });
            const id_token = (_a = res.result) === null || _a === void 0 ? void 0 : _a.value;
            if (!id_token) {
                throw new Error('Response json body do not have ID Token field');
            }
            return id_token;
        });
    }
    static getIDToken(audience) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // New ID Token is requested from action service
                let id_token_url = OidcClient.getIDTokenUrl();
                if (audience) {
                    const encodedAudience = encodeURIComponent(audience);
                    id_token_url = `${id_token_url}&audience=${encodedAudience}`;
                }
                core_1.debug(`ID token url is ${id_token_url}`);
                const id_token = yield OidcClient.getCall(id_token_url);
                core_1.setSecret(id_token);
                return id_token;
            }
            catch (error) {
                throw new Error(`Error message: ${error.message}`);
            }
        });
    }
}
exports.OidcClient = OidcClient;
//# sourceMappingURL=oidc-utils.js.map

/***/ }),

/***/ 744:
/***/ (function(module, __unusedexports, __webpack_require__) {

const SemVer = __webpack_require__(65)
const major = (a, loose) => new SemVer(a, loose).major
module.exports = major


/***/ }),

/***/ 747:
/***/ (function(module) {

module.exports = require("fs");

/***/ }),

/***/ 752:
/***/ (function(module, __unusedexports, __webpack_require__) {

const eq = __webpack_require__(298)
const neq = __webpack_require__(873)
const gt = __webpack_require__(486)
const gte = __webpack_require__(167)
const lt = __webpack_require__(586)
const lte = __webpack_require__(898)

const cmp = (a, op, b, loose) => {
  switch (op) {
    case '===':
      if (typeof a === 'object')
        a = a.version
      if (typeof b === 'object')
        b = b.version
      return a === b

    case '!==':
      if (typeof a === 'object')
        a = a.version
      if (typeof b === 'object')
        b = b.version
      return a !== b

    case '':
    case '=':
    case '==':
      return eq(a, b, loose)

    case '!=':
      return neq(a, b, loose)

    case '>':
      return gt(a, b, loose)

    case '>=':
      return gte(a, b, loose)

    case '<':
      return lt(a, b, loose)

    case '<=':
      return lte(a, b, loose)

    default:
      throw new TypeError(`Invalid operator: ${op}`)
  }
}
module.exports = cmp


/***/ }),

/***/ 760:
/***/ (function(module) {

const numeric = /^[0-9]+$/
const compareIdentifiers = (a, b) => {
  const anum = numeric.test(a)
  const bnum = numeric.test(b)

  if (anum && bnum) {
    a = +a
    b = +b
  }

  return a === b ? 0
    : (anum && !bnum) ? -1
    : (bnum && !anum) ? 1
    : a < b ? -1
    : 1
}

const rcompareIdentifiers = (a, b) => compareIdentifiers(b, a)

module.exports = {
  compareIdentifiers,
  rcompareIdentifiers
}


/***/ }),

/***/ 803:
/***/ (function(module, __unusedexports, __webpack_require__) {

const SemVer = __webpack_require__(65)
const minor = (a, loose) => new SemVer(a, loose).minor
module.exports = minor


/***/ }),

/***/ 810:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NullLogger = void 0;
/**
 * Represents a null-implementation of {ILogger}
 *
 * @export
 * @class NullLogger
 * @implements {ILogger}
 */
class NullLogger {
    // tslint:disable-next-line: no-empty
    /**
     * @inheritdoc
     */
    debug(message) { }
    // tslint:disable-next-line: no-empty
    /**
     * @inheritdoc
     */
    warning(message) { }
    // tslint:disable-next-line: no-empty
    /**
     * @inheritdoc
     */
    error(message) { }
    // tslint:disable-next-line: no-empty
    /**
     * @inheritdoc
     */
    info(message) { }
}
exports.NullLogger = NullLogger;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk51bGxMb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBTUE7Ozs7OztHQU1HO0FBQ0gsTUFBYSxVQUFVO0lBRW5CLHFDQUFxQztJQUNyQzs7T0FFRztJQUNILEtBQUssQ0FBQyxPQUFlLElBQUksQ0FBQztJQUUxQixxQ0FBcUM7SUFDckM7O09BRUc7SUFDSCxPQUFPLENBQUMsT0FBZSxJQUFJLENBQUM7SUFFNUIscUNBQXFDO0lBQ3JDOztPQUVHO0lBQ0gsS0FBSyxDQUFDLE9BQWUsSUFBSSxDQUFDO0lBRTFCLHFDQUFxQztJQUNyQzs7T0FFRztJQUNILElBQUksQ0FBQyxPQUFlLElBQUksQ0FBQztDQUU1QjtBQTFCRCxnQ0EwQkMiLCJmaWxlIjoiTnVsbExvZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBEb2xpdHRsZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmltcG9ydCB7IElMb2dnZXIgfSBmcm9tICcuL0lMb2dnZXInO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBudWxsLWltcGxlbWVudGF0aW9uIG9mIHtJTG9nZ2VyfVxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBOdWxsTG9nZ2VyXG4gKiBAaW1wbGVtZW50cyB7SUxvZ2dlcn1cbiAqL1xuZXhwb3J0IGNsYXNzIE51bGxMb2dnZXIgaW1wbGVtZW50cyBJTG9nZ2VyIHtcblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tZW1wdHlcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqL1xuICAgIGRlYnVnKG1lc3NhZ2U6IHN0cmluZykgeyB9XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWVtcHR5XG4gICAgLyoqXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKi9cbiAgICB3YXJuaW5nKG1lc3NhZ2U6IHN0cmluZykgeyB9XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWVtcHR5XG4gICAgLyoqXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKi9cbiAgICBlcnJvcihtZXNzYWdlOiBzdHJpbmcpIHsgfVxuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1lbXB0eVxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICovXG4gICAgaW5mbyhtZXNzYWdlOiBzdHJpbmcpIHsgfVxuXG59XG4iXX0=


/***/ }),

/***/ 811:
/***/ (function(module, __unusedexports, __webpack_require__) {

const SemVer = __webpack_require__(65)
const Range = __webpack_require__(124)

const maxSatisfying = (versions, range, options) => {
  let max = null
  let maxSV = null
  let rangeObj = null
  try {
    rangeObj = new Range(range, options)
  } catch (er) {
    return null
  }
  versions.forEach((v) => {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!max || maxSV.compare(v) === -1) {
        // compare(max, v, true)
        max = v
        maxSV = new SemVer(max, options)
      }
    }
  })
  return max
}
module.exports = maxSatisfying


/***/ }),

/***/ 817:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionInfoFileLoader = void 0;
const VersionInfoFile_1 = __webpack_require__(554);
/**
 * Represents an implementation of {@link IVersionInfoFileLoader} that loads files from the local file system.
 */
class VersionInfoFileLoader {
    /**
     * Initialises a new instance of the {@link VersionInfoFileLoader} class.
     * @param _logger The {@link Logger} to use for logging.
     */
    constructor(_logger) {
        this._logger = _logger;
    }
    /** @inheritdoc */
    loadAll(files) {
        return __awaiter(this, void 0, void 0, function* () {
            const loaded = [];
            for (const file of files) {
                const versionInfoFile = new VersionInfoFile_1.VersionInfoFile(file, this._logger);
                this._logger.debug(`Loading file on path '${file}'`);
                yield versionInfoFile.load();
                loaded.push(versionInfoFile);
            }
            this._logger.debug(`Loaded ${loaded.length} files.`);
            return loaded;
        });
    }
}
exports.VersionInfoFileLoader = VersionInfoFileLoader;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNvdXJjZS9WZXJzaW9uSW5mb0ZpbGVMb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLCtDQUErQztBQUMvQyxxR0FBcUc7Ozs7Ozs7Ozs7OztBQUtyRyx1REFBb0Q7QUFFcEQ7O0dBRUc7QUFDSCxNQUFhLHFCQUFxQjtJQUM5Qjs7O09BR0c7SUFDSCxZQUNxQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUNqQyxDQUFDO0lBRUosa0JBQWtCO0lBQ1osT0FBTyxDQUFDLEtBQWU7O1lBQ3pCLE1BQU0sTUFBTSxHQUF1QixFQUFFLENBQUM7WUFFdEMsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLEVBQUU7Z0JBQ3RCLE1BQU0sZUFBZSxHQUFHLElBQUksaUNBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNoRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsSUFBSSxHQUFHLENBQUMsQ0FBQztnQkFDckQsTUFBTSxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDaEM7WUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLE1BQU0sQ0FBQyxNQUFNLFNBQVMsQ0FBQyxDQUFDO1lBQ3JELE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUM7S0FBQTtDQUNKO0FBdkJELHNEQXVCQyIsImZpbGUiOiJWZXJzaW9uSW5mb0ZpbGVMb2FkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIERvbGl0dGxlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnQGRvbGl0dGxlL2dpdGh1Yi1hY3Rpb25zLnNoYXJlZC5sb2dnaW5nJztcbmltcG9ydCB7IElWZXJzaW9uSW5mb0ZpbGUgfSBmcm9tICcuL0lWZXJzaW9uSW5mb0ZpbGUnO1xuaW1wb3J0IHsgSVZlcnNpb25JbmZvRmlsZUxvYWRlciB9IGZyb20gJy4vSVZlcnNpb25JbmZvRmlsZUxvYWRlcic7XG5pbXBvcnQgeyBWZXJzaW9uSW5mb0ZpbGUgfSBmcm9tICcuL1ZlcnNpb25JbmZvRmlsZSc7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBpbXBsZW1lbnRhdGlvbiBvZiB7QGxpbmsgSVZlcnNpb25JbmZvRmlsZUxvYWRlcn0gdGhhdCBsb2FkcyBmaWxlcyBmcm9tIHRoZSBsb2NhbCBmaWxlIHN5c3RlbS5cbiAqL1xuZXhwb3J0IGNsYXNzIFZlcnNpb25JbmZvRmlsZUxvYWRlciBpbXBsZW1lbnRzIElWZXJzaW9uSW5mb0ZpbGVMb2FkZXIge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpc2VzIGEgbmV3IGluc3RhbmNlIG9mIHRoZSB7QGxpbmsgVmVyc2lvbkluZm9GaWxlTG9hZGVyfSBjbGFzcy5cbiAgICAgKiBAcGFyYW0gX2xvZ2dlciBUaGUge0BsaW5rIExvZ2dlcn0gdG8gdXNlIGZvciBsb2dnaW5nLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9sb2dnZXI6IExvZ2dlclxuICAgICkge31cblxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xuICAgIGFzeW5jIGxvYWRBbGwoZmlsZXM6IHN0cmluZ1tdKTogUHJvbWlzZTxJVmVyc2lvbkluZm9GaWxlW10+IHtcbiAgICAgICAgY29uc3QgbG9hZGVkOiBJVmVyc2lvbkluZm9GaWxlW10gPSBbXTtcblxuICAgICAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnNpb25JbmZvRmlsZSA9IG5ldyBWZXJzaW9uSW5mb0ZpbGUoZmlsZSwgdGhpcy5fbG9nZ2VyKTtcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5kZWJ1ZyhgTG9hZGluZyBmaWxlIG9uIHBhdGggJyR7ZmlsZX0nYCk7XG4gICAgICAgICAgICBhd2FpdCB2ZXJzaW9uSW5mb0ZpbGUubG9hZCgpO1xuICAgICAgICAgICAgbG9hZGVkLnB1c2godmVyc2lvbkluZm9GaWxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2xvZ2dlci5kZWJ1ZyhgTG9hZGVkICR7bG9hZGVkLmxlbmd0aH0gZmlsZXMuYCk7XG4gICAgICAgIHJldHVybiBsb2FkZWQ7XG4gICAgfVxufVxuIl19


/***/ }),

/***/ 822:
/***/ (function(module, __unusedexports, __webpack_require__) {

const parse = __webpack_require__(830)
const eq = __webpack_require__(298)

const diff = (version1, version2) => {
  if (eq(version1, version2)) {
    return null
  } else {
    const v1 = parse(version1)
    const v2 = parse(version2)
    const hasPre = v1.prerelease.length || v2.prerelease.length
    const prefix = hasPre ? 'pre' : ''
    const defaultResult = hasPre ? 'prerelease' : ''
    for (const key in v1) {
      if (key === 'major' || key === 'minor' || key === 'patch') {
        if (v1[key] !== v2[key]) {
          return prefix + key
        }
      }
    }
    return defaultResult // may be undefined
  }
}
module.exports = diff


/***/ }),

/***/ 830:
/***/ (function(module, __unusedexports, __webpack_require__) {

const {MAX_LENGTH} = __webpack_require__(181)
const { re, t } = __webpack_require__(976)
const SemVer = __webpack_require__(65)

const parseOptions = __webpack_require__(143)
const parse = (version, options) => {
  options = parseOptions(options)

  if (version instanceof SemVer) {
    return version
  }

  if (typeof version !== 'string') {
    return null
  }

  if (version.length > MAX_LENGTH) {
    return null
  }

  const r = options.loose ? re[t.LOOSE] : re[t.FULL]
  if (!r.test(version)) {
    return null
  }

  try {
    return new SemVer(version, options)
  } catch (er) {
    return null
  }
}

module.exports = parse


/***/ }),

/***/ 873:
/***/ (function(module, __unusedexports, __webpack_require__) {

const compare = __webpack_require__(92)
const neq = (a, b, loose) => compare(a, b, loose) !== 0
module.exports = neq


/***/ }),

/***/ 874:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inputs = void 0;
const core_1 = __webpack_require__(470);
const semver_1 = __importDefault(__webpack_require__(876));
const Replacement_1 = __webpack_require__(611);
const ReplacementType_1 = __webpack_require__(435);
/**
 * Represents the inputs to the action.
 */
class Inputs {
    /**
     * Initialises a new instance of the {@link Inputs} class.
     * @param version The version to update the version info files with.
     * @param filesToUpdate The version info files to update.
     * @param replacements The replacements to perform.
     * @param allowMultipleReplacements Whether or not to allow multiple replacements to occur in a file.
     * @param allowNoReplacements Whether or not to allow no replacements to occur in a file.
     */
    constructor(version, filesToUpdate, replacements, allowMultipleReplacements, allowNoReplacements) {
        this.version = version;
        this.filesToUpdate = filesToUpdate;
        this.replacements = replacements;
        this.allowMultipleReplacements = allowMultipleReplacements;
        this.allowNoReplacements = allowNoReplacements;
    }
    /**
     * Logs the values of the inputs to the provided logger.
     * @param logger The {@link Logger} to write to.
     */
    log(logger) {
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
    static parse() {
        return new Inputs(this.getVersion(), this.getFilesToUpdate(), this.getReplacements(), this.getOptionalBooleanInput('allow-multiple-replacements'), this.getOptionalBooleanInput('allow-no-replacements'));
    }
    static getVersion() {
        const input = core_1.getInput('version', { required: true });
        if (!semver_1.default.valid(input)) {
            throw new Error(`The provided version '${input}' is not a valid SemVer.`);
        }
        return semver_1.default.parse(input);
    }
    static getFilesToUpdate() {
        const input = core_1.getInput('files-to-update', { required: true });
        return this.splitTrimIgnoreEmpty(input, /[,\n]/);
    }
    static getReplacements() {
        const input = core_1.getInput('replacements', { required: false });
        const configs = [];
        for (const replacement of this.splitTrimIgnoreEmpty(input, ',')) {
            if (Replacement_1.isReplacement(replacement)) {
                const config = this.getReplacementConfig(replacement);
                configs.push(config);
            }
            else {
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
    static getReplacementConfig(replacement) {
        const typeInput = core_1.getInput(replacement + '-type', { required: false }).trim();
        if (typeInput !== '' && !ReplacementType_1.isReplacementType(typeInput)) {
            throw new Error(`The provided replacement type ${typeInput} for ${replacement} is not a valid replacement type`);
        }
        const type = typeInput !== '' ? typeInput : this.getDefaultReplacementType(replacement);
        const matchInput = core_1.getInput(replacement + '-match', { required: false }).trim();
        const match = matchInput !== '' ? matchInput : this.getDefaultReplacementMatch(replacement);
        return { replacement, type, match };
    }
    static getDefaultReplacementType(replacement) {
        switch (replacement) {
            case 'major':
            case 'minor':
            case 'patch':
                return 'number';
            case 'prerelease':
            case 'full':
                return 'string';
        }
    }
    static getDefaultReplacementMatch(replacement) {
        switch (replacement) {
            case 'major':
                return '377';
            case 'minor':
                return '389';
            case 'patch':
                return '368';
            case 'prerelease':
                return 'PRERELEASE';
            case 'full':
                return '377.389.368-PRERELEASE';
        }
    }
    static splitTrimIgnoreEmpty(input, separator) {
        const split = input.split(separator);
        const trimmed = split.map(_ => _.trim());
        const filtered = trimmed.filter(_ => _.length > 0);
        return filtered;
    }
    static getOptionalBooleanInput(name) {
        if (core_1.getInput(name, { required: false }) === '') {
            return false;
        }
        return core_1.getBooleanInput(name);
    }
}
exports.Inputs = Inputs;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNvdXJjZS9JbnB1dHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLCtDQUErQztBQUMvQyxxR0FBcUc7Ozs7OztBQUVyRyx3Q0FBMEQ7QUFDMUQsb0RBQXdDO0FBR3hDLDZEQUF5RTtBQUN6RSxxRUFBcUY7QUFFckY7O0dBRUc7QUFDSCxNQUFhLE1BQU07SUFDZjs7Ozs7OztPQU9HO0lBQ0gsWUFDYSxPQUFlLEVBQ2YsYUFBdUIsRUFDdkIsWUFBaUMsRUFDakMseUJBQWtDLEVBQ2xDLG1CQUE0QjtRQUo1QixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2Ysa0JBQWEsR0FBYixhQUFhLENBQVU7UUFDdkIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBUztRQUNsQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQVM7SUFDdEMsQ0FBQztJQUVKOzs7T0FHRztJQUNILEdBQUcsQ0FBQyxNQUFjO1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JFLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxXQUFXLENBQUMsV0FBVyxpQkFBaUIsV0FBVyxDQUFDLEtBQUssVUFBVSxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM5RyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ0osTUFBTSxDQUFDLElBQUksQ0FBQyxrQ0FBa0MsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUMsQ0FBQztRQUNoRixNQUFNLENBQUMsSUFBSSxDQUFDLDRCQUE0QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsS0FBSztRQUNSLE9BQU8sSUFBSSxNQUFNLENBQ2IsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUNqQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFDdkIsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUN0QixJQUFJLENBQUMsdUJBQXVCLENBQUMsNkJBQTZCLENBQUMsRUFDM0QsSUFBSSxDQUFDLHVCQUF1QixDQUFDLHVCQUF1QixDQUFDLENBQ3hELENBQUM7SUFDTixDQUFDO0lBRU8sTUFBTSxDQUFDLFVBQVU7UUFDckIsTUFBTSxLQUFLLEdBQUcsZUFBUSxDQUFDLFNBQVMsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRXRELElBQUksQ0FBQyxnQkFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN0QixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixLQUFLLDBCQUEwQixDQUFDLENBQUM7U0FDN0U7UUFFRCxPQUFPLGdCQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBRSxDQUFDO0lBQ2hDLENBQUM7SUFFTyxNQUFNLENBQUMsZ0JBQWdCO1FBQzNCLE1BQU0sS0FBSyxHQUFHLGVBQVEsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRTlELE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU8sTUFBTSxDQUFDLGVBQWU7UUFDMUIsTUFBTSxLQUFLLEdBQUcsZUFBUSxDQUFDLGNBQWMsRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBRTVELE1BQU0sT0FBTyxHQUF3QixFQUFFLENBQUM7UUFDeEMsS0FBSyxNQUFNLFdBQVcsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUMvRDtZQUNJLElBQUksMkJBQWEsQ0FBQyxXQUFXLENBQUMsRUFBRTtnQkFDNUIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN0RCxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3hCO2lCQUFNO2dCQUNILE1BQU0sSUFBSSxLQUFLLENBQUMsNEJBQTRCLFdBQVcsNkJBQTZCLENBQUMsQ0FBQzthQUN6RjtTQUNKO1FBRUQsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNwQixPQUFPLE9BQU8sQ0FBQztTQUNsQjtRQUVELE9BQU87WUFDSCxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUM7WUFDbEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQztZQUNsQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxDQUFDO1NBQzFDLENBQUM7SUFDTixDQUFDO0lBRU8sTUFBTSxDQUFDLG9CQUFvQixDQUFDLFdBQXdCO1FBQ3hELE1BQU0sU0FBUyxHQUFHLGVBQVEsQ0FBQyxXQUFXLEdBQUcsT0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFOUUsSUFBSSxTQUFTLEtBQUssRUFBRSxJQUFJLENBQUMsbUNBQWlCLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDbkQsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsU0FBUyxRQUFRLFdBQVcsa0NBQWtDLENBQUMsQ0FBQztTQUNwSDtRQUVELE1BQU0sSUFBSSxHQUFHLFNBQVMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhGLE1BQU0sVUFBVSxHQUFHLGVBQVEsQ0FBQyxXQUFXLEdBQUcsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFaEYsTUFBTSxLQUFLLEdBQUcsVUFBVSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFNUYsT0FBTyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVPLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxXQUF3QjtRQUM3RCxRQUFRLFdBQVcsRUFBRTtZQUNqQixLQUFLLE9BQU8sQ0FBQztZQUNiLEtBQUssT0FBTyxDQUFDO1lBQ2IsS0FBSyxPQUFPO2dCQUNSLE9BQU8sUUFBUSxDQUFDO1lBQ3BCLEtBQUssWUFBWSxDQUFDO1lBQ2xCLEtBQUssTUFBTTtnQkFDUCxPQUFPLFFBQVEsQ0FBQztTQUN2QjtJQUNMLENBQUM7SUFFTyxNQUFNLENBQUMsMEJBQTBCLENBQUMsV0FBd0I7UUFDOUQsUUFBUSxXQUFXLEVBQUU7WUFDakIsS0FBSyxPQUFPO2dCQUNSLE9BQU8sS0FBSyxDQUFDO1lBQ2pCLEtBQUssT0FBTztnQkFDUixPQUFPLEtBQUssQ0FBQztZQUNqQixLQUFLLE9BQU87Z0JBQ1IsT0FBTyxLQUFLLENBQUM7WUFDakIsS0FBSyxZQUFZO2dCQUNiLE9BQU8sWUFBWSxDQUFDO1lBQ3hCLEtBQUssTUFBTTtnQkFDUCxPQUFPLHdCQUF3QixDQUFDO1NBQ3ZDO0lBQ0wsQ0FBQztJQUVPLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxLQUFhLEVBQUUsU0FBMEI7UUFDekUsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyQyxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDekMsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbkQsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQUVPLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxJQUFZO1FBQy9DLElBQUksZUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUM1QyxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUVELE9BQU8sc0JBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0NBQ0o7QUFsSkQsd0JBa0pDIiwiZmlsZSI6IklucHV0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgRG9saXR0bGUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBnZXRCb29sZWFuSW5wdXQsIGdldElucHV0IH0gZnJvbSAnQGFjdGlvbnMvY29yZSc7XG5pbXBvcnQgc2VtdmVyLCB7IFNlbVZlciB9IGZyb20gJ3NlbXZlcic7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICdAZG9saXR0bGUvZ2l0aHViLWFjdGlvbnMuc2hhcmVkLmxvZ2dpbmcnO1xuaW1wb3J0IHsgUmVwbGFjZW1lbnRDb25maWcgfSBmcm9tICcuL0NvbmZpZ3VyYXRpb24vUmVwbGFjZW1lbnRDb25maWcnO1xuaW1wb3J0IHsgaXNSZXBsYWNlbWVudCwgUmVwbGFjZW1lbnQgfSBmcm9tICcuL0NvbmZpZ3VyYXRpb24vUmVwbGFjZW1lbnQnO1xuaW1wb3J0IHsgaXNSZXBsYWNlbWVudFR5cGUsIFJlcGxhY2VtZW50VHlwZSB9IGZyb20gJy4vQ29uZmlndXJhdGlvbi9SZXBsYWNlbWVudFR5cGUnO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIGlucHV0cyB0byB0aGUgYWN0aW9uLlxuICovXG5leHBvcnQgY2xhc3MgSW5wdXRzIHtcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXNlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUge0BsaW5rIElucHV0c30gY2xhc3MuXG4gICAgICogQHBhcmFtIHZlcnNpb24gVGhlIHZlcnNpb24gdG8gdXBkYXRlIHRoZSB2ZXJzaW9uIGluZm8gZmlsZXMgd2l0aC5cbiAgICAgKiBAcGFyYW0gZmlsZXNUb1VwZGF0ZSBUaGUgdmVyc2lvbiBpbmZvIGZpbGVzIHRvIHVwZGF0ZS5cbiAgICAgKiBAcGFyYW0gcmVwbGFjZW1lbnRzIFRoZSByZXBsYWNlbWVudHMgdG8gcGVyZm9ybS5cbiAgICAgKiBAcGFyYW0gYWxsb3dNdWx0aXBsZVJlcGxhY2VtZW50cyBXaGV0aGVyIG9yIG5vdCB0byBhbGxvdyBtdWx0aXBsZSByZXBsYWNlbWVudHMgdG8gb2NjdXIgaW4gYSBmaWxlLlxuICAgICAqIEBwYXJhbSBhbGxvd05vUmVwbGFjZW1lbnRzIFdoZXRoZXIgb3Igbm90IHRvIGFsbG93IG5vIHJlcGxhY2VtZW50cyB0byBvY2N1ciBpbiBhIGZpbGUuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHJlYWRvbmx5IHZlcnNpb246IFNlbVZlcixcbiAgICAgICAgcmVhZG9ubHkgZmlsZXNUb1VwZGF0ZTogc3RyaW5nW10sXG4gICAgICAgIHJlYWRvbmx5IHJlcGxhY2VtZW50czogUmVwbGFjZW1lbnRDb25maWdbXSxcbiAgICAgICAgcmVhZG9ubHkgYWxsb3dNdWx0aXBsZVJlcGxhY2VtZW50czogYm9vbGVhbixcbiAgICAgICAgcmVhZG9ubHkgYWxsb3dOb1JlcGxhY2VtZW50czogYm9vbGVhblxuICAgICkge31cblxuICAgIC8qKlxuICAgICAqIExvZ3MgdGhlIHZhbHVlcyBvZiB0aGUgaW5wdXRzIHRvIHRoZSBwcm92aWRlZCBsb2dnZXIuXG4gICAgICogQHBhcmFtIGxvZ2dlciBUaGUge0BsaW5rIExvZ2dlcn0gdG8gd3JpdGUgdG8uXG4gICAgICovXG4gICAgbG9nKGxvZ2dlcjogTG9nZ2VyKTogdm9pZCB7XG4gICAgICAgIGxvZ2dlci5pbmZvKCdJbnB1dHM6Jyk7XG4gICAgICAgIGxvZ2dlci5pbmZvKGAgIHZlcnNpb246ICcke3RoaXMudmVyc2lvbn0nYCk7XG4gICAgICAgIGxvZ2dlci5pbmZvKGAgIGZpbGVzLXRvLXVwZGF0ZTogJyR7dGhpcy5maWxlc1RvVXBkYXRlLmpvaW4oJywgJyl9J2ApO1xuICAgICAgICBsb2dnZXIuaW5mbygnICByZXBsYWNlbWVudHM6Jyk7XG4gICAgICAgIHRoaXMucmVwbGFjZW1lbnRzLmZvckVhY2goKHJlcGxhY2VtZW50ID0+IHtcbiAgICAgICAgICAgIGxvZ2dlci5pbmZvKGAgICAgJHtyZXBsYWNlbWVudC5yZXBsYWNlbWVudH0gd2lsbCByZXBsYWNlICR7cmVwbGFjZW1lbnQubWF0Y2h9IHVzaW5nICR7cmVwbGFjZW1lbnQudHlwZX1gKTtcbiAgICAgICAgfSkpO1xuICAgICAgICBsb2dnZXIuaW5mbyhgICBhbGxvdy1tdWx0aXBsZS1yZXBsYWNlbWVudHM6ICR7dGhpcy5hbGxvd011bHRpcGxlUmVwbGFjZW1lbnRzfWApO1xuICAgICAgICBsb2dnZXIuaW5mbyhgICBhbGxvdy1uby1yZXBsYWNlbWVudHM6ICR7dGhpcy5hbGxvd05vUmVwbGFjZW1lbnRzfWApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0aGUgaW5wdXRzIHByb3ZpZGVkIHRvIHRoZSBhY3Rpb24uXG4gICAgICogQHJldHVybnMgVGhlIHBhcnNlZCB7QGxpbmsgSW5wdXRzfS5cbiAgICAgKi9cbiAgICBzdGF0aWMgcGFyc2UoKTogSW5wdXRzIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJbnB1dHMoXG4gICAgICAgICAgICB0aGlzLmdldFZlcnNpb24oKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0RmlsZXNUb1VwZGF0ZSgpLFxuICAgICAgICAgICAgdGhpcy5nZXRSZXBsYWNlbWVudHMoKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0T3B0aW9uYWxCb29sZWFuSW5wdXQoJ2FsbG93LW11bHRpcGxlLXJlcGxhY2VtZW50cycpLFxuICAgICAgICAgICAgdGhpcy5nZXRPcHRpb25hbEJvb2xlYW5JbnB1dCgnYWxsb3ctbm8tcmVwbGFjZW1lbnRzJylcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBnZXRWZXJzaW9uKCk6IFNlbVZlciB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZ2V0SW5wdXQoJ3ZlcnNpb24nLCB7IHJlcXVpcmVkOiB0cnVlIH0pO1xuXG4gICAgICAgIGlmICghc2VtdmVyLnZhbGlkKGlucHV0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgcHJvdmlkZWQgdmVyc2lvbiAnJHtpbnB1dH0nIGlzIG5vdCBhIHZhbGlkIFNlbVZlci5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzZW12ZXIucGFyc2UoaW5wdXQpITtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBnZXRGaWxlc1RvVXBkYXRlKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBnZXRJbnB1dCgnZmlsZXMtdG8tdXBkYXRlJywgeyByZXF1aXJlZDogdHJ1ZSB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5zcGxpdFRyaW1JZ25vcmVFbXB0eShpbnB1dCwgL1ssXFxuXS8pO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGdldFJlcGxhY2VtZW50cygpOiBSZXBsYWNlbWVudENvbmZpZ1tdIHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBnZXRJbnB1dCgncmVwbGFjZW1lbnRzJywgeyByZXF1aXJlZDogZmFsc2UgfSk7XG5cbiAgICAgICAgY29uc3QgY29uZmlnczogUmVwbGFjZW1lbnRDb25maWdbXSA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IHJlcGxhY2VtZW50IG9mIHRoaXMuc3BsaXRUcmltSWdub3JlRW1wdHkoaW5wdXQsICcsJykpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChpc1JlcGxhY2VtZW50KHJlcGxhY2VtZW50KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZ2V0UmVwbGFjZW1lbnRDb25maWcocmVwbGFjZW1lbnQpO1xuICAgICAgICAgICAgICAgIGNvbmZpZ3MucHVzaChjb25maWcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBwcm92aWRlZCByZXBsYWNlbWVudCAke3JlcGxhY2VtZW50fSBpcyBub3QgYSB2YWxpZCByZXBsYWNlbWVudGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbmZpZ3M7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgdGhpcy5nZXRSZXBsYWNlbWVudENvbmZpZygnbWFqb3InKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0UmVwbGFjZW1lbnRDb25maWcoJ21pbm9yJyksXG4gICAgICAgICAgICB0aGlzLmdldFJlcGxhY2VtZW50Q29uZmlnKCdwYXRjaCcpLFxuICAgICAgICAgICAgdGhpcy5nZXRSZXBsYWNlbWVudENvbmZpZygncHJlcmVsZWFzZScpLFxuICAgICAgICBdO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGdldFJlcGxhY2VtZW50Q29uZmlnKHJlcGxhY2VtZW50OiBSZXBsYWNlbWVudCk6IFJlcGxhY2VtZW50Q29uZmlnIHtcbiAgICAgICAgY29uc3QgdHlwZUlucHV0ID0gZ2V0SW5wdXQocmVwbGFjZW1lbnQgKyAnLXR5cGUnLCB7IHJlcXVpcmVkOiBmYWxzZSB9KS50cmltKCk7XG5cbiAgICAgICAgaWYgKHR5cGVJbnB1dCAhPT0gJycgJiYgIWlzUmVwbGFjZW1lbnRUeXBlKHR5cGVJbnB1dCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHByb3ZpZGVkIHJlcGxhY2VtZW50IHR5cGUgJHt0eXBlSW5wdXR9IGZvciAke3JlcGxhY2VtZW50fSBpcyBub3QgYSB2YWxpZCByZXBsYWNlbWVudCB0eXBlYCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0eXBlID0gdHlwZUlucHV0ICE9PSAnJyA/IHR5cGVJbnB1dCA6IHRoaXMuZ2V0RGVmYXVsdFJlcGxhY2VtZW50VHlwZShyZXBsYWNlbWVudCk7XG5cbiAgICAgICAgY29uc3QgbWF0Y2hJbnB1dCA9IGdldElucHV0KHJlcGxhY2VtZW50ICsgJy1tYXRjaCcsIHsgcmVxdWlyZWQ6IGZhbHNlIH0pLnRyaW0oKTtcblxuICAgICAgICBjb25zdCBtYXRjaCA9IG1hdGNoSW5wdXQgIT09ICcnID8gbWF0Y2hJbnB1dCA6IHRoaXMuZ2V0RGVmYXVsdFJlcGxhY2VtZW50TWF0Y2gocmVwbGFjZW1lbnQpO1xuXG4gICAgICAgIHJldHVybiB7IHJlcGxhY2VtZW50LCB0eXBlLCBtYXRjaCB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGdldERlZmF1bHRSZXBsYWNlbWVudFR5cGUocmVwbGFjZW1lbnQ6IFJlcGxhY2VtZW50KTogUmVwbGFjZW1lbnRUeXBlIHtcbiAgICAgICAgc3dpdGNoIChyZXBsYWNlbWVudCkge1xuICAgICAgICAgICAgY2FzZSAnbWFqb3InOlxuICAgICAgICAgICAgY2FzZSAnbWlub3InOlxuICAgICAgICAgICAgY2FzZSAncGF0Y2gnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnbnVtYmVyJztcbiAgICAgICAgICAgIGNhc2UgJ3ByZXJlbGVhc2UnOlxuICAgICAgICAgICAgY2FzZSAnZnVsbCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdzdHJpbmcnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0RGVmYXVsdFJlcGxhY2VtZW50TWF0Y2gocmVwbGFjZW1lbnQ6IFJlcGxhY2VtZW50KTogc3RyaW5nIHtcbiAgICAgICAgc3dpdGNoIChyZXBsYWNlbWVudCkge1xuICAgICAgICAgICAgY2FzZSAnbWFqb3InOlxuICAgICAgICAgICAgICAgIHJldHVybiAnMzc3JztcbiAgICAgICAgICAgIGNhc2UgJ21pbm9yJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJzM4OSc7XG4gICAgICAgICAgICBjYXNlICdwYXRjaCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICczNjgnO1xuICAgICAgICAgICAgY2FzZSAncHJlcmVsZWFzZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdQUkVSRUxFQVNFJztcbiAgICAgICAgICAgIGNhc2UgJ2Z1bGwnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnMzc3LjM4OS4zNjgtUFJFUkVMRUFTRSc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBzcGxpdFRyaW1JZ25vcmVFbXB0eShpbnB1dDogc3RyaW5nLCBzZXBhcmF0b3I6IHN0cmluZyB8IFJlZ0V4cCk6IHN0cmluZ1tdIHtcbiAgICAgICAgY29uc3Qgc3BsaXQgPSBpbnB1dC5zcGxpdChzZXBhcmF0b3IpO1xuICAgICAgICBjb25zdCB0cmltbWVkID0gc3BsaXQubWFwKF8gPT4gXy50cmltKCkpO1xuICAgICAgICBjb25zdCBmaWx0ZXJlZCA9IHRyaW1tZWQuZmlsdGVyKF8gPT4gXy5sZW5ndGggPiAwKTtcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGdldE9wdGlvbmFsQm9vbGVhbklucHV0KG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoZ2V0SW5wdXQobmFtZSwgeyByZXF1aXJlZDogZmFsc2UgfSkgPT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0Qm9vbGVhbklucHV0KG5hbWUpO1xuICAgIH1cbn1cbiJdfQ==


/***/ }),

/***/ 876:
/***/ (function(module, __unusedexports, __webpack_require__) {

// just pre-load all the stuff that index.js lazily exports
const internalRe = __webpack_require__(976)
module.exports = {
  re: internalRe.re,
  src: internalRe.src,
  tokens: internalRe.t,
  SEMVER_SPEC_VERSION: __webpack_require__(181).SEMVER_SPEC_VERSION,
  SemVer: __webpack_require__(65),
  compareIdentifiers: __webpack_require__(760).compareIdentifiers,
  rcompareIdentifiers: __webpack_require__(760).rcompareIdentifiers,
  parse: __webpack_require__(830),
  valid: __webpack_require__(714),
  clean: __webpack_require__(503),
  inc: __webpack_require__(928),
  diff: __webpack_require__(822),
  major: __webpack_require__(744),
  minor: __webpack_require__(803),
  patch: __webpack_require__(489),
  prerelease: __webpack_require__(968),
  compare: __webpack_require__(92),
  rcompare: __webpack_require__(630),
  compareLoose: __webpack_require__(283),
  compareBuild: __webpack_require__(465),
  sort: __webpack_require__(120),
  rsort: __webpack_require__(593),
  gt: __webpack_require__(486),
  lt: __webpack_require__(586),
  eq: __webpack_require__(298),
  neq: __webpack_require__(873),
  gte: __webpack_require__(167),
  lte: __webpack_require__(898),
  cmp: __webpack_require__(752),
  coerce: __webpack_require__(499),
  Comparator: __webpack_require__(174),
  Range: __webpack_require__(124),
  satisfies: __webpack_require__(310),
  toComparators: __webpack_require__(219),
  maxSatisfying: __webpack_require__(811),
  minSatisfying: __webpack_require__(740),
  minVersion: __webpack_require__(164),
  validRange: __webpack_require__(480),
  outside: __webpack_require__(462),
  gtr: __webpack_require__(531),
  ltr: __webpack_require__(323),
  intersects: __webpack_require__(259),
  simplifyRange: __webpack_require__(877),
  subset: __webpack_require__(999),
}


/***/ }),

/***/ 877:
/***/ (function(module, __unusedexports, __webpack_require__) {

// given a set of versions and a range, create a "simplified" range
// that includes the same versions that the original range does
// If the original range is shorter than the simplified one, return that.
const satisfies = __webpack_require__(310)
const compare = __webpack_require__(92)
module.exports = (versions, range, options) => {
  const set = []
  let min = null
  let prev = null
  const v = versions.sort((a, b) => compare(a, b, options))
  for (const version of v) {
    const included = satisfies(version, range, options)
    if (included) {
      prev = version
      if (!min)
        min = version
    } else {
      if (prev) {
        set.push([min, prev])
      }
      prev = null
      min = null
    }
  }
  if (min)
    set.push([min, null])

  const ranges = []
  for (const [min, max] of set) {
    if (min === max)
      ranges.push(min)
    else if (!max && min === v[0])
      ranges.push('*')
    else if (!max)
      ranges.push(`>=${min}`)
    else if (min === v[0])
      ranges.push(`<=${max}`)
    else
      ranges.push(`${min} - ${max}`)
  }
  const simplified = ranges.join(' || ')
  const original = typeof range.raw === 'string' ? range.raw : String(range)
  return simplified.length < original.length ? simplified : range
}


/***/ }),

/***/ 898:
/***/ (function(module, __unusedexports, __webpack_require__) {

const compare = __webpack_require__(92)
const lte = (a, b, loose) => compare(a, b, loose) <= 0
module.exports = lte


/***/ }),

/***/ 928:
/***/ (function(module, __unusedexports, __webpack_require__) {

const SemVer = __webpack_require__(65)

const inc = (version, release, options, identifier) => {
  if (typeof (options) === 'string') {
    identifier = options
    options = undefined
  }

  try {
    return new SemVer(version, options).inc(release, identifier).version
  } catch (er) {
    return null
  }
}
module.exports = inc


/***/ }),

/***/ 950:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getProxyUrl(reqUrl) {
    let usingSsl = reqUrl.protocol === 'https:';
    let proxyUrl;
    if (checkBypass(reqUrl)) {
        return proxyUrl;
    }
    let proxyVar;
    if (usingSsl) {
        proxyVar = process.env['https_proxy'] || process.env['HTTPS_PROXY'];
    }
    else {
        proxyVar = process.env['http_proxy'] || process.env['HTTP_PROXY'];
    }
    if (proxyVar) {
        proxyUrl = new URL(proxyVar);
    }
    return proxyUrl;
}
exports.getProxyUrl = getProxyUrl;
function checkBypass(reqUrl) {
    if (!reqUrl.hostname) {
        return false;
    }
    let noProxy = process.env['no_proxy'] || process.env['NO_PROXY'] || '';
    if (!noProxy) {
        return false;
    }
    // Determine the request port
    let reqPort;
    if (reqUrl.port) {
        reqPort = Number(reqUrl.port);
    }
    else if (reqUrl.protocol === 'http:') {
        reqPort = 80;
    }
    else if (reqUrl.protocol === 'https:') {
        reqPort = 443;
    }
    // Format the request hostname and hostname with port
    let upperReqHosts = [reqUrl.hostname.toUpperCase()];
    if (typeof reqPort === 'number') {
        upperReqHosts.push(`${upperReqHosts[0]}:${reqPort}`);
    }
    // Compare request host against noproxy
    for (let upperNoProxyItem of noProxy
        .split(',')
        .map(x => x.trim().toUpperCase())
        .filter(x => x)) {
        if (upperReqHosts.some(x => x === upperNoProxyItem)) {
            return true;
        }
    }
    return false;
}
exports.checkBypass = checkBypass;


/***/ }),

/***/ 968:
/***/ (function(module, __unusedexports, __webpack_require__) {

const parse = __webpack_require__(830)
const prerelease = (version, options) => {
  const parsed = parse(version, options)
  return (parsed && parsed.prerelease.length) ? parsed.prerelease : null
}
module.exports = prerelease


/***/ }),

/***/ 969:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExactReplacer = void 0;
const Replacer_1 = __webpack_require__(240);
/**
 * Represents a {@link Replacer} that replaces exact matches of a string with another string.
 */
class ExactReplacer extends Replacer_1.Replacer {
    /**
     * Initialises a new instance of the {@link ExactReplacer} class.
     * @param replacement The {@link Replacement} that this replacer performs replacements for.
     * @param _match The string used to match the exact values to replace.
     * @param _value The value used to replace the matches with.
     */
    constructor(replacement, _match, _value) {
        super(replacement);
        this._match = _match;
        this._value = _value;
    }
    /** @inheritdoc */
    getExpressionFor() {
        return new RegExp(this._match);
    }
    /** @inheritdoc */
    getValueFor() {
        return this._value;
    }
}
exports.ExactReplacer = ExactReplacer;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNvdXJjZS9SZXBsYWNlcnMvRXhhY3RSZXBsYWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsK0NBQStDO0FBQy9DLHFHQUFxRzs7O0FBR3JHLHlDQUFzQztBQUV0Qzs7R0FFRztBQUNILE1BQWEsYUFBYyxTQUFRLG1CQUFRO0lBQ3ZDOzs7OztPQUtHO0lBQ0gsWUFDSSxXQUF3QixFQUNQLE1BQWMsRUFDZCxNQUFjO1FBRS9CLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUhGLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBR25DLENBQUM7SUFFRCxrQkFBa0I7SUFDUixnQkFBZ0I7UUFDdEIsT0FBTyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELGtCQUFrQjtJQUNSLFdBQVc7UUFDakIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7Q0FDSjtBQXhCRCxzQ0F3QkMiLCJmaWxlIjoiUmVwbGFjZXJzL0V4YWN0UmVwbGFjZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIERvbGl0dGxlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgUmVwbGFjZW1lbnQgfSBmcm9tICcuLi9Db25maWd1cmF0aW9uL1JlcGxhY2VtZW50JztcbmltcG9ydCB7IFJlcGxhY2VyIH0gZnJvbSAnLi9SZXBsYWNlcic7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHtAbGluayBSZXBsYWNlcn0gdGhhdCByZXBsYWNlcyBleGFjdCBtYXRjaGVzIG9mIGEgc3RyaW5nIHdpdGggYW5vdGhlciBzdHJpbmcuXG4gKi9cbmV4cG9ydCBjbGFzcyBFeGFjdFJlcGxhY2VyIGV4dGVuZHMgUmVwbGFjZXIge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpc2VzIGEgbmV3IGluc3RhbmNlIG9mIHRoZSB7QGxpbmsgRXhhY3RSZXBsYWNlcn0gY2xhc3MuXG4gICAgICogQHBhcmFtIHJlcGxhY2VtZW50IFRoZSB7QGxpbmsgUmVwbGFjZW1lbnR9IHRoYXQgdGhpcyByZXBsYWNlciBwZXJmb3JtcyByZXBsYWNlbWVudHMgZm9yLlxuICAgICAqIEBwYXJhbSBfbWF0Y2ggVGhlIHN0cmluZyB1c2VkIHRvIG1hdGNoIHRoZSBleGFjdCB2YWx1ZXMgdG8gcmVwbGFjZS5cbiAgICAgKiBAcGFyYW0gX3ZhbHVlIFRoZSB2YWx1ZSB1c2VkIHRvIHJlcGxhY2UgdGhlIG1hdGNoZXMgd2l0aC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcmVwbGFjZW1lbnQ6IFJlcGxhY2VtZW50LFxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9tYXRjaDogc3RyaW5nLFxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF92YWx1ZTogc3RyaW5nXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKHJlcGxhY2VtZW50KTtcbiAgICB9XG5cbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0RXhwcmVzc2lvbkZvcigpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cCh0aGlzLl9tYXRjaCk7XG4gICAgfVxuXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXG4gICAgcHJvdGVjdGVkIGdldFZhbHVlRm9yKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG59XG4iXX0=


/***/ }),

/***/ 976:
/***/ (function(module, exports, __webpack_require__) {

const { MAX_SAFE_COMPONENT_LENGTH } = __webpack_require__(181)
const debug = __webpack_require__(548)
exports = module.exports = {}

// The actual regexps go on exports.re
const re = exports.re = []
const src = exports.src = []
const t = exports.t = {}
let R = 0

const createToken = (name, value, isGlobal) => {
  const index = R++
  debug(index, value)
  t[name] = index
  src[index] = value
  re[index] = new RegExp(value, isGlobal ? 'g' : undefined)
}

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*')
createToken('NUMERICIDENTIFIERLOOSE', '[0-9]+')

// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

createToken('NONNUMERICIDENTIFIER', '\\d*[a-zA-Z-][a-zA-Z0-9-]*')

// ## Main Version
// Three dot-separated numeric identifiers.

createToken('MAINVERSION', `(${src[t.NUMERICIDENTIFIER]})\\.` +
                   `(${src[t.NUMERICIDENTIFIER]})\\.` +
                   `(${src[t.NUMERICIDENTIFIER]})`)

createToken('MAINVERSIONLOOSE', `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
                        `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
                        `(${src[t.NUMERICIDENTIFIERLOOSE]})`)

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

createToken('PRERELEASEIDENTIFIER', `(?:${src[t.NUMERICIDENTIFIER]
}|${src[t.NONNUMERICIDENTIFIER]})`)

createToken('PRERELEASEIDENTIFIERLOOSE', `(?:${src[t.NUMERICIDENTIFIERLOOSE]
}|${src[t.NONNUMERICIDENTIFIER]})`)

// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

createToken('PRERELEASE', `(?:-(${src[t.PRERELEASEIDENTIFIER]
}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`)

createToken('PRERELEASELOOSE', `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]
}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`)

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

createToken('BUILDIDENTIFIER', '[0-9A-Za-z-]+')

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

createToken('BUILD', `(?:\\+(${src[t.BUILDIDENTIFIER]
}(?:\\.${src[t.BUILDIDENTIFIER]})*))`)

// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

createToken('FULLPLAIN', `v?${src[t.MAINVERSION]
}${src[t.PRERELEASE]}?${
  src[t.BUILD]}?`)

createToken('FULL', `^${src[t.FULLPLAIN]}$`)

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
createToken('LOOSEPLAIN', `[v=\\s]*${src[t.MAINVERSIONLOOSE]
}${src[t.PRERELEASELOOSE]}?${
  src[t.BUILD]}?`)

createToken('LOOSE', `^${src[t.LOOSEPLAIN]}$`)

createToken('GTLT', '((?:<|>)?=?)')

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
createToken('XRANGEIDENTIFIERLOOSE', `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`)
createToken('XRANGEIDENTIFIER', `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`)

createToken('XRANGEPLAIN', `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:${src[t.PRERELEASE]})?${
                     src[t.BUILD]}?` +
                   `)?)?`)

createToken('XRANGEPLAINLOOSE', `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:${src[t.PRERELEASELOOSE]})?${
                          src[t.BUILD]}?` +
                        `)?)?`)

createToken('XRANGE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`)
createToken('XRANGELOOSE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`)

// Coercion.
// Extract anything that could conceivably be a part of a valid semver
createToken('COERCE', `${'(^|[^\\d])' +
              '(\\d{1,'}${MAX_SAFE_COMPONENT_LENGTH}})` +
              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` +
              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` +
              `(?:$|[^\\d])`)
createToken('COERCERTL', src[t.COERCE], true)

// Tilde ranges.
// Meaning is "reasonably at or greater than"
createToken('LONETILDE', '(?:~>?)')

createToken('TILDETRIM', `(\\s*)${src[t.LONETILDE]}\\s+`, true)
exports.tildeTrimReplace = '$1~'

createToken('TILDE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`)
createToken('TILDELOOSE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`)

// Caret ranges.
// Meaning is "at least and backwards compatible with"
createToken('LONECARET', '(?:\\^)')

createToken('CARETTRIM', `(\\s*)${src[t.LONECARET]}\\s+`, true)
exports.caretTrimReplace = '$1^'

createToken('CARET', `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`)
createToken('CARETLOOSE', `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`)

// A simple gt/lt/eq thing, or just "" to indicate "any version"
createToken('COMPARATORLOOSE', `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`)
createToken('COMPARATOR', `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`)

// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
createToken('COMPARATORTRIM', `(\\s*)${src[t.GTLT]
}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true)
exports.comparatorTrimReplace = '$1$2$3'

// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
createToken('HYPHENRANGE', `^\\s*(${src[t.XRANGEPLAIN]})` +
                   `\\s+-\\s+` +
                   `(${src[t.XRANGEPLAIN]})` +
                   `\\s*$`)

createToken('HYPHENRANGELOOSE', `^\\s*(${src[t.XRANGEPLAINLOOSE]})` +
                        `\\s+-\\s+` +
                        `(${src[t.XRANGEPLAINLOOSE]})` +
                        `\\s*$`)

// Star ranges basically just allow anything at all.
createToken('STAR', '(<|>)?=?\\s*\\*')
// >=0.0.0 is like a star
createToken('GTE0', '^\\s*>=\\s*0\.0\.0\\s*$')
createToken('GTE0PRE', '^\\s*>=\\s*0\.0\.0-0\\s*$')


/***/ }),

/***/ 999:
/***/ (function(module, __unusedexports, __webpack_require__) {

const Range = __webpack_require__(124)
const Comparator = __webpack_require__(174)
const { ANY } = Comparator
const satisfies = __webpack_require__(310)
const compare = __webpack_require__(92)

// Complex range `r1 || r2 || ...` is a subset of `R1 || R2 || ...` iff:
// - Every simple range `r1, r2, ...` is a null set, OR
// - Every simple range `r1, r2, ...` which is not a null set is a subset of
//   some `R1, R2, ...`
//
// Simple range `c1 c2 ...` is a subset of simple range `C1 C2 ...` iff:
// - If c is only the ANY comparator
//   - If C is only the ANY comparator, return true
//   - Else if in prerelease mode, return false
//   - else replace c with `[>=0.0.0]`
// - If C is only the ANY comparator
//   - if in prerelease mode, return true
//   - else replace C with `[>=0.0.0]`
// - Let EQ be the set of = comparators in c
// - If EQ is more than one, return true (null set)
// - Let GT be the highest > or >= comparator in c
// - Let LT be the lowest < or <= comparator in c
// - If GT and LT, and GT.semver > LT.semver, return true (null set)
// - If any C is a = range, and GT or LT are set, return false
// - If EQ
//   - If GT, and EQ does not satisfy GT, return true (null set)
//   - If LT, and EQ does not satisfy LT, return true (null set)
//   - If EQ satisfies every C, return true
//   - Else return false
// - If GT
//   - If GT.semver is lower than any > or >= comp in C, return false
//   - If GT is >=, and GT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the GT.semver tuple, return false
// - If LT
//   - If LT.semver is greater than any < or <= comp in C, return false
//   - If LT is <=, and LT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the LT.semver tuple, return false
// - Else return true

const subset = (sub, dom, options = {}) => {
  if (sub === dom)
    return true

  sub = new Range(sub, options)
  dom = new Range(dom, options)
  let sawNonNull = false

  OUTER: for (const simpleSub of sub.set) {
    for (const simpleDom of dom.set) {
      const isSub = simpleSubset(simpleSub, simpleDom, options)
      sawNonNull = sawNonNull || isSub !== null
      if (isSub)
        continue OUTER
    }
    // the null set is a subset of everything, but null simple ranges in
    // a complex range should be ignored.  so if we saw a non-null range,
    // then we know this isn't a subset, but if EVERY simple range was null,
    // then it is a subset.
    if (sawNonNull)
      return false
  }
  return true
}

const simpleSubset = (sub, dom, options) => {
  if (sub === dom)
    return true

  if (sub.length === 1 && sub[0].semver === ANY) {
    if (dom.length === 1 && dom[0].semver === ANY)
      return true
    else if (options.includePrerelease)
      sub = [ new Comparator('>=0.0.0-0') ]
    else
      sub = [ new Comparator('>=0.0.0') ]
  }

  if (dom.length === 1 && dom[0].semver === ANY) {
    if (options.includePrerelease)
      return true
    else
      dom = [ new Comparator('>=0.0.0') ]
  }

  const eqSet = new Set()
  let gt, lt
  for (const c of sub) {
    if (c.operator === '>' || c.operator === '>=')
      gt = higherGT(gt, c, options)
    else if (c.operator === '<' || c.operator === '<=')
      lt = lowerLT(lt, c, options)
    else
      eqSet.add(c.semver)
  }

  if (eqSet.size > 1)
    return null

  let gtltComp
  if (gt && lt) {
    gtltComp = compare(gt.semver, lt.semver, options)
    if (gtltComp > 0)
      return null
    else if (gtltComp === 0 && (gt.operator !== '>=' || lt.operator !== '<='))
      return null
  }

  // will iterate one or zero times
  for (const eq of eqSet) {
    if (gt && !satisfies(eq, String(gt), options))
      return null

    if (lt && !satisfies(eq, String(lt), options))
      return null

    for (const c of dom) {
      if (!satisfies(eq, String(c), options))
        return false
    }

    return true
  }

  let higher, lower
  let hasDomLT, hasDomGT
  // if the subset has a prerelease, we need a comparator in the superset
  // with the same tuple and a prerelease, or it's not a subset
  let needDomLTPre = lt &&
    !options.includePrerelease &&
    lt.semver.prerelease.length ? lt.semver : false
  let needDomGTPre = gt &&
    !options.includePrerelease &&
    gt.semver.prerelease.length ? gt.semver : false
  // exception: <1.2.3-0 is the same as <1.2.3
  if (needDomLTPre && needDomLTPre.prerelease.length === 1 &&
      lt.operator === '<' && needDomLTPre.prerelease[0] === 0) {
    needDomLTPre = false
  }

  for (const c of dom) {
    hasDomGT = hasDomGT || c.operator === '>' || c.operator === '>='
    hasDomLT = hasDomLT || c.operator === '<' || c.operator === '<='
    if (gt) {
      if (needDomGTPre) {
        if (c.semver.prerelease && c.semver.prerelease.length &&
            c.semver.major === needDomGTPre.major &&
            c.semver.minor === needDomGTPre.minor &&
            c.semver.patch === needDomGTPre.patch) {
          needDomGTPre = false
        }
      }
      if (c.operator === '>' || c.operator === '>=') {
        higher = higherGT(gt, c, options)
        if (higher === c && higher !== gt)
          return false
      } else if (gt.operator === '>=' && !satisfies(gt.semver, String(c), options))
        return false
    }
    if (lt) {
      if (needDomLTPre) {
        if (c.semver.prerelease && c.semver.prerelease.length &&
            c.semver.major === needDomLTPre.major &&
            c.semver.minor === needDomLTPre.minor &&
            c.semver.patch === needDomLTPre.patch) {
          needDomLTPre = false
        }
      }
      if (c.operator === '<' || c.operator === '<=') {
        lower = lowerLT(lt, c, options)
        if (lower === c && lower !== lt)
          return false
      } else if (lt.operator === '<=' && !satisfies(lt.semver, String(c), options))
        return false
    }
    if (!c.operator && (lt || gt) && gtltComp !== 0)
      return false
  }

  // if there was a < or >, and nothing in the dom, then must be false
  // UNLESS it was limited by another range in the other direction.
  // Eg, >1.0.0 <1.0.1 is still a subset of <2.0.0
  if (gt && hasDomLT && !lt && gtltComp !== 0)
    return false

  if (lt && hasDomGT && !gt && gtltComp !== 0)
    return false

  // we needed a prerelease range in a specific tuple, but didn't get one
  // then this isn't a subset.  eg >=1.2.3-pre is not a subset of >=1.0.0,
  // because it includes prereleases in the 1.2.3 tuple
  if (needDomGTPre || needDomLTPre)
    return false

  return true
}

// >=1.2.3 is lower than >1.2.3
const higherGT = (a, b, options) => {
  if (!a)
    return b
  const comp = compare(a.semver, b.semver, options)
  return comp > 0 ? a
    : comp < 0 ? b
    : b.operator === '>' && a.operator === '>=' ? b
    : a
}

// <=1.2.3 is higher than <1.2.3
const lowerLT = (a, b, options) => {
  if (!a)
    return b
  const comp = compare(a.semver, b.semver, options)
  return comp < 0 ? a
    : comp > 0 ? b
    : b.operator === '<' && a.operator === '<=' ? b
    : a
}

module.exports = subset


/***/ })

/******/ });