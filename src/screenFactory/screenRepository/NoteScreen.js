import { NoteScreenObjects } from "../objectRepository/NoteScreenObjects"
import { ScreenActions } from "../../lib/ScreenActions"

let noteScreenObjects = new NoteScreenObjects()
let screenActions = new ScreenActions()

export class NoteScreen {


    async enterNoteTitle(title) {
        await screenActions.fillInputField(noteScreenObjects.Title_Input_Selector, title)
    }
    async enterNotes(notes) {
        await screenActions.fillInputField(noteScreenObjects.Note_Input_Selector, notes)
    }
    async isEditingTextDisplayed() {
        return await $(noteScreenObjects.Editing_Text_Selector).isDisplayed()
    }
    async getEditIconLocator() {
        return await screenActions.getLocatorForSelector(noteScreenObjects.Edit_Icon_Selector)
    }
    async getViewNotesLocator() {
        return await screenActions.getLocatorForSelector(noteScreenObjects.View_Note_Selector)
    }
    async clickMoreIcon() {
        await screenActions.clickElement(noteScreenObjects.More_Icon_Selector)
    }
    async deleteNote() {
        await screenActions.clickElement(noteScreenObjects.Delete_Btn_Selector)
        await screenActions.clickElement(noteScreenObjects.Ok_Btn_Selector)
    }

}