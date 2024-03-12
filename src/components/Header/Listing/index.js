import React from 'react'
import { BUTTON, LIST } from '../styles'

export default function LIST_ROUTING({text,type}) {
    const Button=<BUTTON>{text}</BUTTON>
    const list=<LIST>{text}</LIST>
    
  return (
    type==="button"? Button:list
    
  )
}
