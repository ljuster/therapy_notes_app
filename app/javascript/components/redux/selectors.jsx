import { NOTE_TYPES } from "../../packs/constants";

export const getNotesState = store => {
    return store.notes;
}

export const getNotes = store => {
    return getNotesState(store) ? getNotesState(store) : [];
}

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */
export const getNotes = store => {
    return getNotes(store)
};

export const getNotesByType = (store, noteType) => {
    const notes = getNotes(store);
    switch (noteType) {
        case QUESTION_TYPES.MULTISELECT_THREE:
            return notes.filter(note => !note.multi_three);
        case QUESTION_TYPES.MULTISELECT_ALL:
        default:
            return notes;
    }
};
