import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { add } from "../reducers/toDo";

import ToDo from '../components/ToDo';

function Home() {
    const [text, setText] = useState("");
    let toDos = useSelector((state) => state);
    toDos = toDos.toDoReducer;
    const dispatch = useDispatch();

    function onChange(e) {
        setText(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        dispatch(add({ text, id: Date.now() }));
        setText("");
    }

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>ADD</button>
            </form>
            <ul>
                {toDos.map((toDo) => (
                    <ToDo {...toDo} key={toDo.id} />
                ))}
            </ul>
        </>
    );
}

export default Home;