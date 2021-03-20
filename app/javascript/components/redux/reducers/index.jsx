import { combineReducers } from "redux";
import notes from "./notes";
import notesPaginator from "./notesPaginator";

export default combineReducers({ notes, notesPaginator });
