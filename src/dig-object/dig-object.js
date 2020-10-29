"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Extracts a value from an Object just by its key.
 * @param {string} key The key to be searched for.
 * @param {string} object The object to search for the key in.
 */
//dome
const digObject = (key, object) => key in object ?
    // If the key exists in the first level, return its value.
    object[key] :
    Object.values(object)
        .reduce((acc, value) => {
        // If a value has been returned to the acc return it.
        if (acc !== undefined)
            return acc;
        // If the value is an object itself, search it too.
        if (typeof value === 'object')
            return digObject(key, value);
    }, undefined);
exports.default = digObject;
//# sourceMappingURL=dig-object.js.map