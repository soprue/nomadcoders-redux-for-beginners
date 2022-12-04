import { combineReducers } from "redux";

import toDoReducer from "./toDo";

const rootReducer = combineReducers({
    toDoReducer,
});

export default rootReducer;