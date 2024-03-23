import React from 'react'
import { TodosContainer, GENERALPAGECONTAINER } from '../PHOTOS/styles'
import { useSelector } from 'react-redux'
import '../POSTS/index.css'

export default function Todos() {
    const TODOS = useSelector((state) => state.todos)
    console.log("This is todos", TODOS.todos)

    return (
        <GENERALPAGECONTAINER>
            {TODOS.isLoading==false
            ?<ol>{TODOS.todoslist.map(state => <li key={state.id} className='li_container'>
                <li>{state.id}</li>
                <li>{state.title}</li>
            </li>)}
            </ol>:"Loading"}
        </GENERALPAGECONTAINER>
    )
}