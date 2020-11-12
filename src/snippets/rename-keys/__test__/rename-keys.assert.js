import { TestScheduler } from "jest"
import { idText } from "typescript"
import renameKeys from "../rename-keys"

const exmapleObj = {
    name: "karim",
    lastName: "mohammadi",
    lesson: "math"
}

const mapObject = {name: "firstName", lesson: "major"}

const outputObj = {
    firstName: "karim",
    lastName: "mohammadi",
    major: "math"
}

describe('Rename Keys Function', () => {
    it('Renames Object keys names(name -> firstName, lesson -> major)', () => {
        expect(renameKeys(exmapleObj, mapObject)).toEqual(outputObj)
    })
})