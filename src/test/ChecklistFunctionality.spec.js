/* eslint-disable wdio/await-expect */
import { HomeScreen } from "../screenObjects/HomeScreen.screen"
import { NoteScreen } from "../screenObjects/NoteScreen.screen"
import ChecklistData from "../test-data/ChecklistData.json"
//import allureReporter from '@wdio/allure-reporter'

let homeScreen = new HomeScreen()
let noteScreen = new NoteScreen()


describe('Add checklist', () => {

    before(async () => {
        await homeScreen.clickSkipBtn()
    })
    it('Add a checklist by Add Note button, save changes & verify done', async () => {
        await homeScreen.clickAddNoteBtn()
        await homeScreen.clickChecklistPopup()
        expect(await noteScreen.isEditingTextDisplayed()).toBeTruthy()
        await noteScreen.enterChecklistDetails(ChecklistData.firstChecklist.title, ChecklistData.firstChecklist.note)
        await homeScreen.pressBackBtn()
        expect(await noteScreen.getEditIconLocator()).toBeDisplayed()
        expect(await noteScreen.getViewNotesLocator()).toHaveText(ChecklistData.firstChecklist.note)
        await homeScreen.pressBackBtn()
        let noteLocator = await homeScreen.getAddedNoteLocator(ChecklistData.firstChecklist.title)
        await noteLocator.waitForDisplayed()
        expect(noteLocator).toBeDisplayed()
    })

    it('Add a checklist by pressing + Icon, save changes & verify done', async () => {
        await homeScreen.clickAddNoteIcon()
        await homeScreen.clickChecklistPopup()
        expect(await noteScreen.isEditingTextDisplayed()).toBeTruthy()
        await noteScreen.enterChecklistDetails(ChecklistData.secondChecklist.title, ChecklistData.secondChecklist.note)
        await homeScreen.pressBackBtn()
        expect(await noteScreen.getEditIconLocator()).toBeDisplayed()
        expect(await noteScreen.getViewNotesLocator()).toHaveText(ChecklistData.secondChecklist.note)
        await homeScreen.pressBackBtn()
        let noteLocator = await homeScreen.getAddedNoteLocator(ChecklistData.secondChecklist.title)
        await noteLocator.waitForDisplayed()
        expect(noteLocator).toBeDisplayed()
    })

    it('search Note', async () => {
        await homeScreen.clickSearchIcon()
        await homeScreen.enterSearchItem(ChecklistData.firstChecklist.title)
        let checklistLocator1 = await homeScreen.getAddedNoteLocator(ChecklistData.firstChecklist.title)
        expect(checklistLocator1).toBeDisplayed()
        await homeScreen.clickSearchBack()
        await homeScreen.clickMoreIcon()
        await homeScreen.clickSearchOption()
        await homeScreen.enterSearchItem(ChecklistData.secondChecklist.title)
        let checklistLocator2 = await homeScreen.getAddedNoteLocator(ChecklistData.secondChecklist.title)
        expect(checklistLocator2).toBeDisplayed()
    })

 
});