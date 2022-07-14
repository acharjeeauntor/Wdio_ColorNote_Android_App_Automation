export class TrashCanScreen {
    async getDeletedNoteLocator(titelOfNote) {
        return $(`//*[@text="${titelOfNote}"]`)
    }


}