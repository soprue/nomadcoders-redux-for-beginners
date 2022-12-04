import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [{ text: action.text, id: action.id }, ...state];
        case DELETE:
            return state.filter(toDo => toDo.id !== action.id);
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;