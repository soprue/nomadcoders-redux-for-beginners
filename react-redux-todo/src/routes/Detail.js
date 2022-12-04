import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'

function Detail() {
    const id = useParams().id;
    const toDos = useSelector((state) => state);
    const toDo = toDos.find((toDo) => toDo.id === parseInt(id));
    const others = toDos.filter((toDo) => toDo.id !== parseInt(id));

    const navigate = useNavigate();
    const onClickBackBtn = () => navigate(-1);
    const onClickHomeBtn = () => navigate("/");
    return (
        <>
            <h1>Detail of {toDo?.text}</h1>
            <h5>Created at: {toDo?.id}</h5>
            <h2>Others</h2>
            <ul>
                {others?.map((todo) => (
                <Link key={todo.id} to={`/${todo.id}`}>
                    <li>{todo.text}</li>
                </Link>
                ))}
            </ul>
            <button onClick={onClickBackBtn}> Go Back</button>
            <button onClick={onClickHomeBtn}> Go Home</button>
        </>
    )
}

export default Detail