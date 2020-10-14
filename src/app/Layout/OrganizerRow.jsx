import React from 'react'

export default function OrganizerRow({number, text,functionName}) {
    return (
        <div className='organizer-row'>
            <p className='number'>{number}</p>
            <p className='text'>{text}</p>
            <p className='function-name'>{functionName}</p>
        </div>
    )
}
