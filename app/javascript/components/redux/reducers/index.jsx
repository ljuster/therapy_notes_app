import { combineReducers } from "redux";
import quiz from "./quiz";
import quizPaginator from "./quizPaginator";

export default combineReducers({ quiz, quizPaginator });
