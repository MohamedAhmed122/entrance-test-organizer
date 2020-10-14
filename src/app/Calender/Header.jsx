import React from 'react'

import {prevMonth , currentMonth, currentYear, nextMonth} from './utils'

import './StyleCalender.css'

export default function Header({value , setValue}) {
    return (
        <div>
            <div className='header'>
                <div className='previous' 
                    onClick={() => setValue(prevMonth(value))}
                >  &#10094;</div>
                <div className='current'>{currentMonth(value)}  {currentYear(value)}</div>
                <div className='next'
                onClick={() => setValue(nextMonth(value))}
                > &#10095;</div>
            </div>
        </div>
    )
}
