import React from 'react'
import { PostsContainer, GENERALPAGECONTAINER } from '../PHOTOS/styles'
import { useSelector } from 'react-redux'
import './index.css'

export default function Posts() {
    const POSTS = useSelector((state) => state.posts)
    console.log("This is posts", POSTS.posts)

    return (
        <GENERALPAGECONTAINER>
            {POSTS.isLoading==false
            ?<ol>{POSTS.postslist.map(state => <li key={state.id} className='li_container'>
                <li>{state.title}</li>
                <li>{state.body}</li>
            </li>)}
            </ol>:"Loading"}
        </GENERALPAGECONTAINER>
    )
}