import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

const toDos = createSlice({
    name: "toDosReducer",
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.unshift({ text: action.payload.text, id: action.payload.id }); // redux toolkit을 사용하면 state를 mutate해도 됨
        },
        remove: (state, action) => {
            return state.filter(toDo => toDo.id !== action.payload.id);
        }
    }
})

export const { add, remove } = toDos.actions;
export const toDoReducer = toDos.reducer;