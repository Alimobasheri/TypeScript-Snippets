/**
 * A function to rename target keys of an on object.
 * @param {object} obj Target object.
 * @param {object} keyMaps An object mapping target keys to their new name.
 */
const renameKeys = (obj: object, keyMaps: object) =>
    Object.keys(obj)
        .reduce((acc, key) => 
            ({
                ...acc,
                ...{[keyMaps[key] || key]: obj[key]}
            }),
            {}
        )

export default renameKeys