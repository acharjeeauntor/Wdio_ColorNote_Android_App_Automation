export class ArchiveScreen {
    Note_Title_Selector =`//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]`

    async selectArchivedNote(titleOfNote) {
        await (await $(`//*[@text="${titleOfNote}"]`)).touchAction('longPress')
    }
}