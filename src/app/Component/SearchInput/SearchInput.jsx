import React from 'react'
import './StyleSearch.css'

export default function SearchInput({...otherProps}) {
    return <input 
    type='text' 
    className="search"
  
    {...otherProps}
    /> 
}
