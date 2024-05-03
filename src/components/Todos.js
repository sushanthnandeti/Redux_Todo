import React from "react";
import { useSelector } from "react-redux";
import { useDispatch} from "react-redux";
import {removeTodo} from "../features/todo/todoSlice";
 
function todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();
    console.log(todos);
    return(
        <>
        <div> Todos</div>
        {todos.map((todo) => (
            <ul>
            <li key = {todo.id}> <div> {todo.text} </div> 
            <button onClick={() => dispatch(removeTodo(todo.id))}> Remove </button> </li> 
            </ul>
        ))}
          
        </>
    )}

export default todos;