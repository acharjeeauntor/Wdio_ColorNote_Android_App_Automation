import { ScreenActions } from "../../lib/ScreenActions"

let screenActions = new ScreenActions()

export class TrashCanScreen {
    async getDeletedNoteLocator(titelOfNote) {
        return await screenActions.getLocatorForSelector(`//*[@text="${titelOfNote}"]`)
    }


}