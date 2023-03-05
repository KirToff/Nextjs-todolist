import React from "react";
import { useState } from "react";

export default function AddTodo({todo,setTodo}) {
    const [value, setValue] = useState('')
    function saveTodo(){
        setTodo(
            [...todo, {
                id: Math.random(),
                title: value,
                status: true
            }]
        )
    }
    return <>
    <div>
        <input placeholder="Enter your task…" value ={value} onChange={e => setValue(e.target.value)}/>
        <button onCick={saveTodo}>SAVE</button>
    </div>
    </>
}