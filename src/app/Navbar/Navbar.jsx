import React from 'react'
import './StyleNavbar.css'


export default function Navbar() {

    const handleScroll =(values)=>{
        window.scrollTo({top:values,behavior: 'smooth'})
      }
    return (
        <div className='navbar'>
            <div className='option' onClick ={()=>handleScroll(100)}>Organizer</div>
            <div className='option' onClick ={()=>handleScroll(1400)}>Weather</div>
        </div>
    )
}
