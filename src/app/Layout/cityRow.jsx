import React from 'react'
import './StyleOrginzer.css'

export default function CityRow({children}) {
    return (
        <div className='small-row'>
            <p>{children}</p>
        </div>
    )
}
