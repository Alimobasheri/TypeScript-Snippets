"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A function to rename target keys of an on object.
 * @param {object} obj Target object.
 * @param {object} keyMaps An object mapping target keys to their new name.
 */
const renameKeys = (obj, keyMaps) => Object.keys(obj)
    .reduce((acc, key) => (Object.assign(Object.assign({}, acc), { [keyMaps[key] || key]: obj[key] })), {});
exports.default = renameKeys;
