import { NEXT_NOTE, PREVIOUS_NOTE } from "../actionTypes";

const initialState = { pageNumber: 1};

const visibilityFilter = (state = initialState, action) => {
    switch (action.type) {
        case NEXT_NOTE: {
            return action.payload.pageNumber++;
        }
        case PREVIOUS_NOTE: {
            return action.payload.pageNumber--;
        }
        default: {
            return state;
        }
    }
};

export default visibilityFilter;