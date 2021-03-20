import { RANK_CHOICE, SELECT_CHOICE } from "../actionTypes";

const initialState = {
    questions: [],
    byIds: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case RANK_CHOICE: {
            const { id, content } = action.payload;
            return {
                ...state,
                questions: [...state.questions, id],
                byIds: {
                    ...state.byIds,
                    [id]: {
                        content,
                        completed: false
                    }
                }
            };
        }
        case SELECT_CHOICE: {
            const { id } = action.payload;
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [id]: {
                        ...state.byIds[id],
                        completed: !state.byIds[id].completed
                    }
                }
            };
        }
        default:
            return state;
    }
}
