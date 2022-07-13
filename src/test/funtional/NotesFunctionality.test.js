/* eslint-disable wdio/await-expect */
import { HomeScreen } from "../../screenFactory/screenRepository/HomeScreen"
import { NoteScreen } from "../../screenFactory/screenRepository/NoteScreen"
import { NavigationDrawer } from "../../screenFactory/screenRepository/NavigationDrawer"
import { TrashCanScreen } from "../../screenFactory/screenRepository/TrashCanScreen"
import { ScreenActions } from "../../lib/ScreenActions"
import NoteData from "../../test-data/notesData.json"
import allureReporter from '@wdio/allure-reporter'

let homeScreen = new HomeScreen()
let noteScreen = new NoteScreen()
let navigationDrawer = new NavigationDrawer()
let trashCanScreen = new TrashCanScreen()
let screenActions = new ScreenActions()

describe('Add Note', () => {
    it.only('Add a note, save changes & verify done', async () => {
        allureReporter.addSeverity('critical')
        await homeScreen.clickSkipBtn()
        expect(await homeScreen.isAddNoteDisplayed()).toBeTruthy()
        await homeScreen.clickAddNoteBtn()
        await homeScreen.clickTextPopup()
        expect(await noteScreen.isEditingTextDisplayed()).toBeTruthy()
        await noteScreen.enterNoteTitle('ffggb')
        await noteScreen.enterNotes(NoteData.myNotes)

        await screenActions.pressBackBtn()
        await screenActions.pressBackBtn()

        expect(await noteScreen.getEditIconLocator()).toBeDisplayed()
        expect(await noteScreen.getViewNotesLocator()).toHaveText(NoteData.myNotes)
        await screenActions.pressBackBtn()

        let noteLocator = await homeScreen.getAddedNoteLocator(NoteData.titleOfNote)
        await noteLocator.waitForDisplayed()
        expect(noteLocator).toBeDisplayed()
    })


    it('Delete a note & Verify the note in trash can ', async () => {

        await homeScreen.clickAddedNote(NoteData.titleOfNote)
        await noteScreen.clickMoreIcon()
        await noteScreen.deleteNote()
        expect(await homeScreen.getNoteListLocator()).not.toHaveText(NoteData.titleOfNote)
        await navigationDrawer.clickNavIcon()
        await navigationDrawer.clickTrashCan()
        await expect(await trashCanScreen.getDeletedNoteLocator(NoteData.titleOfNote)).toBeDisplayed()

    })
});


