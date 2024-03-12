import React from 'react'
import { HeaderContainer, LOGO, NAVBAR } from './styles'
import LIST_ROUTING from './Listing'

export default function Header() {
    
  return (
    <HeaderContainer>
        <LOGO>Muzaffar Blog</LOGO>
        <NAVBAR>
            <LIST_ROUTING text="home" type="text"/>
            <LIST_ROUTING text="posts" type="text"/>
            <LIST_ROUTING text="post" type="text"/>
            <LIST_ROUTING text="users" type="text"/>
            <LIST_ROUTING text="user" type="text"/>
            <LIST_ROUTING text="photos" type="text"/>
            <LIST_ROUTING text="photo" type="text"/>
            <LIST_ROUTING text="0" type="button"/>

        </NAVBAR>
    </HeaderContainer>
  )
}
