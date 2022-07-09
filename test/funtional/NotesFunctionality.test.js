import { HomeScreen } from "../../screenFactory/screenRepository/HomeScreen"
import { NoteScreen } from "../../screenFactory/screenRepository/NoteScreen"
import { NavigationDrawer } from "../../screenFactory/screenRepository/NavigationDrawer"
import { TrashCanScreen } from "../../screenFactory/screenRepository/TrashCanScreen"
import { ScreenActions } from "../../lib/ScreenActions"
//import { HomeScreenObjects } from "../../screenFactory/objectRepository/HomeScreenObjects"

let homeScreen = new HomeScreen()
let noteScreen = new NoteScreen()
let navigationDrawer = new NavigationDrawer()
let trashCanScreen = new TrashCanScreen()
let screenActions = new ScreenActions()
//let homeScreenObject = new HomeScreenObjects()

describe('Add Notes', () => {

    let titelOfNote = "My Notes"
    let myNotes = "Pathrail\nDelduar\nTangail"

    it('Add a note, save changes & verify done', async () => {
        await homeScreen.clickSkipBtn()
        expect(await homeScreen.isAddNoteDisplayed()).toBeTruthy()
        await homeScreen.clickAddNoteBtn()
        await homeScreen.clickTextPopup()
        expect(await noteScreen.isEditingTextDisplayed()).toBeTruthy()
        await noteScreen.enterNoteTitle(titelOfNote)
        await noteScreen.enterNotes(myNotes)

        await screenActions.pressBackBtn()
        await screenActions.pressBackBtn()

        await expect(await noteScreen.getEditIconLocator()).toBeDisplayed()

        //await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed()
        await expect(await noteScreen.getViewNotesLocator()).toHaveText(myNotes)
        await screenActions.pressBackBtn()
        await expect(await homeScreen.getAddedNoteLocator(titelOfNote)).toBeDisplayed()

    })


    it('Delete a note & Verify the note in trash can ', async () => {

        await homeScreen.clickAddedNote(titelOfNote)
        await noteScreen.clickMoreIcon()
        await noteScreen.deleteNote()
        await expect(await homeScreen.getNoteListLocator()).not.toHaveText(titelOfNote)
        await navigationDrawer.clickNavIcon()
        await navigationDrawer.clickTrashCan()
        await expect(await trashCanScreen.getDeletedNoteLocator(titelOfNote)).toBeDisplayed()

    })

});