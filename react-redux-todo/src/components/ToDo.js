import React from 'react'
import { useDispatch } from 'react-redux';

import { deleteToDo } from "../store";

function ToDo({ text, id }) {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch({ type: "DELETE", id });
    };

    return (
        <li>
            {text} <button onClick={onClick}>DEL</button>
        </li>
    )
}

export default ToDo