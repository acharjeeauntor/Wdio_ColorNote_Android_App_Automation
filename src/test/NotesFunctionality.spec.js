/* eslint-disable wdio/await-expect */
import { HomeScreen } from "../screenObjects/HomeScreen.screen"
import { NoteScreen } from "../screenObjects/NoteScreen.screen"

import NoteData from "../test-data/NotesData.json"
//import allureReporter from '@wdio/allure-reporter'

let homeScreen = new HomeScreen()
let noteScreen = new NoteScreen()


describe('Add Note', () => {

    before(async () => {
        await homeScreen.clickSkipBtn()
    })

    it('Add a note by Add Note button, save changes & verify done', async () => {
        await homeScreen.clickAddNoteBtn()
        await homeScreen.clickTextPopup()
        expect(await noteScreen.isEditingTextDisplayed()).toBeTruthy()
        await noteScreen.enterNoteDetails(NoteData.firstNote.titleOfNote, NoteData.firstNote.myNotes)

        await homeScreen.pressBackBtn()
        await homeScreen.pressBackBtn()

        expect(await noteScreen.getEditIconLocator()).toBeDisplayed()
        expect(await noteScreen.getViewNotesLocator()).toHaveText(NoteData.firstNote.myNotes)
        await homeScreen.pressBackBtn()

        let noteLocator = await homeScreen.getAddedNoteLocator(NoteData.firstNote.titleOfNote)
        await noteLocator.waitForDisplayed()
        expect(noteLocator).toBeDisplayed()
    })

    it('Add a note by pressing + Icon, save changes & verify done', async () => {
        await homeScreen.clickAddNoteIcon()
        await homeScreen.clickTextPopup()
        expect(await noteScreen.isEditingTextDisplayed()).toBeTruthy()
        await noteScreen.enterNoteDetails(NoteData.secondNote.titleOfNote, NoteData.secondNote.myNotes)

        await homeScreen.pressBackBtn()
        await homeScreen.pressBackBtn()

        expect(await noteScreen.getEditIconLocator()).toBeDisplayed()
        expect(await noteScreen.getViewNotesLocator()).toHaveText(NoteData.secondNote.myNotes)
        await homeScreen.pressBackBtn()

        let noteLocator = await homeScreen.getAddedNoteLocator(NoteData.secondNote.titleOfNote)
        await noteLocator.waitForDisplayed()
        expect(noteLocator).toBeDisplayed()
    })

    it('search Note', async () => {
        await homeScreen.clickSearchIcon()
        await homeScreen.enterSearchItem(NoteData.firstNote.titleOfNote)
        let noteLocator1 = await homeScreen.getAddedNoteLocator(NoteData.firstNote.titleOfNote)
        expect(noteLocator1).toBeDisplayed()
        await homeScreen.clickSearchBack()
        await homeScreen.clickMoreIcon()
        await homeScreen.clickSearchOption()
        await homeScreen.enterSearchItem(NoteData.secondNote.titleOfNote)
        let noteLocator2 = await homeScreen.getAddedNoteLocator(NoteData.secondNote.titleOfNote)
        expect(noteLocator2).toBeDisplayed()
    })



    // it('Delete a note & Verify the note in trash can ', async () => {

    //     await homeScreen.clickAddedNote(NoteData.titleOfNote)
    //     await noteScreen.clickMoreIcon()
    //     await noteScreen.deleteNote()
    //     expect(await homeScreen.getNoteListLocator()).not.toHaveText(NoteData.titleOfNote)
    //     await navigationDrawer.clickNavIcon()
    //     await navigationDrawer.clickTrashCan()
    //     await expect(await trashCanScreen.getDeletedNoteLocator(NoteData.titleOfNote)).toBeDisplayed()

    // })
});