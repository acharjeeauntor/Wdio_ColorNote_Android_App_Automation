/* eslint-disable wdio/await-expect */
import { HomeScreen } from "../screenObjects/HomeScreen"
import { NoteScreen } from "../screenObjects/NoteScreen"
import {BottomBar} from "../screenObjects/BottomBar"
import { CommonUtils } from "../utils/CommonUtils"
import {NavigationDrawer} from "../screenObjects/NavigationDrawer"
import {TrashCanScreen} from "../screenObjects/TrashCanScreen"
import {ArchiveScreen} from "../screenObjects/ArchiveScreen"
import ChecklistData from "../test-data/ChecklistData.json"

import NoteData from "../test-data/NotesData.json"
//import allureReporter from '@wdio/allure-reporter'

let homeScreen = new HomeScreen()
let archiveScreen = new ArchiveScreen()
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

    it(`Single select->Archive->check list->Archive->Single select->UnArchive->Notes->check list`, async () => {
        await homeScreen.selectAddedNote(ChecklistData.firstChecklist.title)
        await bottomBar.clickArchiveMenu()
        await commonUtils.acceptPopup()
        expect(await homeScreen.isNoteTitleMatch(ChecklistData.firstChecklist.title)).toBeFalsy()
        await navigationDrawer.clickNavIcon()
        await navigationDrawer.clickArchive()
        await archiveScreen.selectArchivedNote(ChecklistData.firstChecklist.title)
        await bottomBar.clickUnArchiveMenu()
        await navigationDrawer.clickNavIcon()
        await navigationDrawer.clickNotesNavOption()
        expect(await homeScreen.isNoteTitleMatch(ChecklistData.firstChecklist.title)).toBeTruthy()
    })

    it(`Go inside single note->Click edit icon->Update Title->check list`, async () => {
        await homeScreen.clickAddedNote(ChecklistData.firstChecklist.title)
        await noteScreen.clickEditIcon()
        await noteScreen.updateTitle(NoteData.updatdeNoteTitle.title)
        await commonUtils.navigateBack()
        await commonUtils.navigateBack()
        expect(await homeScreen.isNoteTitleMatch(NoteData.updatdeNoteTitle.title)).toBeTruthy()
    })

});