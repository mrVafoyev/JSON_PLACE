import React from 'react'
import { UsersContainer, GENERALPAGECONTAINER } from '../PHOTOS/styles'
import { useSelector } from 'react-redux'
import '../POSTS/index.css'

export default function Users() {
    const USERS = useSelector((state) => state.users)
    console.log("This is users", USERS)

    return (
        <GENERALPAGECONTAINER>
            {USERS.isLoading==false
            ?<ol>{USERS.usersInfo.map(state => <li key={state.id} className='li_container'>
                <li>{state.name}</li>
                <li>{state.number}</li>
                <li>{state.username}</li>
            </li>)}
            </ol>:"Loading"}
        </GENERALPAGECONTAINER>
    )
}