import React, { useEffect } from 'react'

import './StyleCalender.css'

import moment from 'moment'
import { useState } from 'react'

import {createCalendar , styleDay } from './utils'
import Header from './Header'


export default function Calender() {
    const [value, setValue] = useState(moment())
    const [calender, setCalender] = useState([])
    

    useEffect(() => {
        setCalender(createCalendar(value))

    }, [value])

   
    // console.log(calender);
    return (
        <div className='calendar'>
            <Header value={value} setValue={setValue} />
            <div className='body'>
                <div className='day-names'>
                    {
                        ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sun', 'Sat'].map(day=>(
                            <div className='week'>{day}</div>
                        ))
                    }
                </div>
                {
                    calender.map((week)=>(
                        <div key={calender._d}>
                            {
                                week.map(day=>(
                                    <div key={day._d} className='day' onClick={()=> setValue(day)}>
                                        {/* {console.log(day._d)} */}
                                        <div className={styleDay(day, value)}>{day.format('D')}</div>
                                    </div>
                                ))
                            } 
                        </div> 
                    ))
                }
            </div>
        </div>
    )
}
