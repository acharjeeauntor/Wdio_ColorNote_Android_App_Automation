/* eslint-disable wdio/await-expect */
import { HomeScreen } from "../screenObjects/HomeScreen"
import { NoteScreen } from "../screenObjects/NoteScreen"
import {BottomBar} from "../screenObjects/BottomBar"
import { CommonUtils } from "../utils/CommonUtils"
import {NavigationDrawer} from "../screenObjects/NavigationDrawer"
import {TrashCanScreen} from "../screenObjects/TrashCanScreen"
import ChecklistData from "../test-data/ChecklistData.json"

import NoteData from "../test-data/NotesData.json"
//import allureReporter from '@wdio/allure-reporter'

let homeScreen = new HomeScreen()
let noteScreen = new NoteScreen()
let commonUtils = new CommonUtils()
let bottomBar = new BottomBar()
let navigationDrawer = new NavigationDrawer()
let trashCanScreen = new TrashCanScreen()

describe('Check Note and checklist Functionality', () => {

    before(async () => {
        await homeScreen.clickSkipBtn()
    })

    it('Add Note->Text->Enter input->check list->+ click->checklist->enter input->check list', async () => {
        await homeScreen.clickAddNoteBtn()
        await homeScreen.clickTextPopup()
        await noteScreen.enterNoteDetails(NoteData.firstNote.titleOfNote, NoteData.firstNote.myNotes)
        await commonUtils.navigateBack()
        await commonUtils.navigateBack()
        await commonUtils.navigateBack()
        expect(await homeScreen.isNoteTitleMatch(NoteData.firstNote.titleOfNote)).toBeTruthy()
        await homeScreen.clickAddNoteIcon()
        await homeScreen.clickChecklistPopup()
        await noteScreen.enterChecklistDetails(ChecklistData.firstChecklist.title, ChecklistData.firstChecklist.note)
        await commonUtils.navigateBack()
        await commonUtils.navigateBack()
        expect(await homeScreen.isNoteTitleMatch(ChecklistData.firstChecklist.title)).toBeTruthy()
    })


    // it('search Note', async () => {
    //     await homeScreen.clickSearchIcon()
    //     await homeScreen.enterSearchItem(NoteData.firstNote.titleOfNote)
    //     expect(await homeScreen.isNoteTitleMatch(NoteData.firstNote.titleOfNote)).toBeTruthy()
    //     await homeScreen.clickSearchBack()
    //     await homeScreen.clickMoreIcon()
    //     await homeScreen.clickSearchOption()
    //     await homeScreen.enterSearchItem(ChecklistData.firstChecklist.title)
    //     expect(await homeScreen.isNoteTitleMatch(ChecklistData.firstChecklist.title)).toBeTruthy()
    //     await homeScreen.clickSearchBack()
    // })


    it(`Multiple select->Delete->trash can->check list->multi select->Restore->Notes->check list`, async () => {
        await homeScreen.selectAllNotes()
        await bottomBar.clickDeleteMenu()
        await commonUtils.acceptPopup()
        await navigationDrawer.clickNavIcon()
        await navigationDrawer.clickTrashCan()
        expect(await trashCanScreen.isTitleMatch(NoteData.firstNote.titleOfNote,ChecklistData.firstChecklist.title)).toBeTruthy()
        await trashCanScreen.selectAllNotes()
        await bottomBar.clickRestoreBtn()
        await navigationDrawer.clickNavIcon()
        await navigationDrawer.clickNotesNavOption()
        expect(await homeScreen.isNoteTitleMatch(ChecklistData.firstChecklist.title)).toBeTruthy()
    })

    it(`Single select->Delete->trash can->check list->Single select->Permanently Delete->check list->Notes`, async () => {
        await homeScreen.selectAddedNote(NoteData.firstNote.titleOfNote)
        await bottomBar.clickDeleteMenu()
        await commonUtils.acceptPopup()
        expect(await homeScreen.isNoteTitleMatch(NoteData.firstNote.titleOfNote)).toBeFalsy()
        await navigationDrawer.clickNavIcon()
        await navigationDrawer.clickTrashCan()
        await trashCanScreen.selectDeletedNote(NoteData.firstNote.titleOfNote)
        await bottomBar.clickPermanentlyDeleteBtn()
        await commonUtils.acceptPopup()
        expect(await trashCanScreen.isNoteExisting(NoteData.firstNote.titleOfNote)).toBeFalsy()
        await navigationDrawer.clickNavIcon()
        await navigationDrawer.clickNotesNavOption()
    })





















    // it('Delete a single Note', async () => {

    //     await homeScreen.selectAddedNote(NoteData.firstNote.titleOfNote)
    //     await bottomBar.clickDeleteMenu()
    //     expect(await bottomBar.getDeletePopupText()).toBe(NoteData.popupMsg)
    //     await bottomBar.acceptDeletePopup()
    //     expect(await homeScreen.getAddedNoteLocator(NoteData.firstNote.titleOfNote)).not.toBeDisplayed()
    //     await navigationDrawer.clickNavIcon()
    //     await navigationDrawer.clickTrashCan()
    //     expect(await trashCanScreen.getDeletedNoteLocator(NoteData.firstNote.titleOfNote)).toBeDisplayed()
    // })

    // for(var data of NoteData.multipleNote){
    //     it('Delete multiple Notes', async () => {
    //         await commonUtils.addNote(data.title,data.note)
    //         await homeScreen.selectAddedNote(NoteData.firstNote.titleOfNote)
    //         await bottomBar.clickDeleteMenu()
    //         expect(await bottomBar.getDeletePopupText()).toBe(NoteData.popupMsg)
    //         await bottomBar.acceptDeletePopup()
    //         expect(await homeScreen.getAddedNoteLocator(NoteData.firstNote.titleOfNote)).not.toBeDisplayed()
    //         await navigationDrawer.clickNavIcon()
    //         await navigationDrawer.clickTrashCan()
    //         expect(await trashCanScreen.getDeletedNoteLocator(NoteData.firstNote.titleOfNote)).toBeDisplayed()
    //     })
    // }




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