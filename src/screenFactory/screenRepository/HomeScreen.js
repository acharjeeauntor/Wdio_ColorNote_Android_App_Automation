import { HomeScreenObjects } from "../objectRepository/HomeScreenObjects"
import { ScreenActions } from "../../lib/ScreenActions"

let homeScreenObject = new HomeScreenObjects()
let screenActions = new ScreenActions()

export class HomeScreen {


    async clickSkipBtn() {
        await screenActions.clickElement(homeScreenObject.Skip_Btn_Selector)
    }
    async isAddNoteDisplayed() {
        return await $(homeScreenObject.AddNote_Text_Selector).isDisplayed()
    }
    async clickAddNoteBtn() {
        await screenActions.clickElement(homeScreenObject.AddNote_Text_Selector)
    }
    async clickTextPopup() {
        await screenActions.clickElement(homeScreenObject.Add_Text_Popup_Selector)
    }
    async getAddedNoteLocator(titleOfNote) {
        return await screenActions.getLocatorForSelector(`//*[@text="${titleOfNote}"]`)
    }
    async clickAddedNote(titleOfNote) {
        return await screenActions.clickElement(`//*[@text="${titleOfNote}"]`)
    }
    async getNoteListLocator() {
        return await screenActions.getLocatorForSelector(homeScreenObject.Note_List_Selctor)
    }

}