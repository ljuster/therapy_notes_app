import { SELECT_NOTE } from "../actionTypes";

const initialState = {
    notes: [],
    byIds: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SELECT_NOTE: {
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
