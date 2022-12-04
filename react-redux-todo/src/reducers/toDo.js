const ADD = "ADD";
const DELETE = "DELETE";

const toDoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [{ text: action.text, id: action.id }, ...state];
        case DELETE:
            return state.filter(toDo => toDo.id !== action.id);
        default:
            return state;
    }
}

export default toDoReducer;