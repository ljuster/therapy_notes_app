import { NEXT_QUESTION, PREVIOUS_QUESTION } from "../actionTypes";

const initialState = { questionNumber: 1};

const visibilityFilter = (state = initialState, action) => {
    switch (action.type) {
        case NEXT_QUESTION: {
            return action.payload.questionNumber++;
        }
        case PREVIOUS_QUESTION: {
            return action.payload.questionNumber--;
        }
        default: {
            return state;
        }
    }
};

export default visibilityFilter;