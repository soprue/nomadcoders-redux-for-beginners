import { createAction, createReducer } from "@reduxjs/toolkit";

const addToDo = createAction("TODO/ADD");
const deleteToDo = createAction("TODO/DELETE");

/*
const toDoReducer = (state = [], action) => {
    switch (action.type) {
        case addToDo.type:
            return [{ text: action.payload.text, id: action.payload.id }, ...state];
        case deleteToDo.type:
            return state.filter(toDo => toDo.id !== action.payload.id);
        default:
            return state;
    }
}
*/

const toDoReducer = createReducer([], (builder) => {
    builder
        .addCase(addToDo, (state, action) => {
            state.unshift({ text: action.payload.text, id: action.payload.id }); // redux toolkit을 사용하면 state를 mutate해도 됨
        })
        .addCase(deleteToDo, (state, action) => {
            return state.filter(toDo => toDo.id !== action.payload.id);
        })
});

export default toDoReducer;