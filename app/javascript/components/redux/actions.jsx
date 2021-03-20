import { SELECT_CHOICE, NEXT_NOTE, PREVIOUS_NOTE } from "./actionTypes";


export const selectNote = content => ({
    type: SELECT_NOTE,
    payload: {
        content
    }
});

export const nextNote = noteNumber => ({ type: NEXT_NOTE, payload: { noteNumber } });
export const previousNot = noteNumber => ({ type: PREVIOUS_NOTE, payload: { noteNumber } });
