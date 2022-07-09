import { TrashCanScreenObject } from "../objectRepository/TrashCanScreenObject"
import { ScreenActions } from "../../lib/ScreenActions"

let trashCanScreenObject = new TrashCanScreenObject()
let screenActions = new ScreenActions()

export class TrashCanScreen {
    async getDeletedNoteLocator(titelOfNote) {
        return await screenActions.getLocatorForSelector(`//*[@text="${titelOfNote}"]`)
    }


}