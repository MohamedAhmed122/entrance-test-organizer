import React from 'react'
import CityRow from './cityRow'
import Calender from '../../app/Calender/Calender'
import OrganizerRow from './OrganizerRow'
import SearchInput from '../Component/SearchInput/SearchInput'
import './StyleOrginzer.css'
export default function Organizer() {
    return (
        <div>
            <div className='organizer-top'>
                <div style={{marginBottom:'10px'}}>
                    <CityRow >Tomsk</CityRow>
                    <CityRow >Kazan</CityRow>
                    <CityRow >Moscow</CityRow>
                </div>
                <Calender />
            </div>
            <div className='organizer-middle'>
                <OrganizerRow number={1}  text={'do something here'} functionName='delete' />
                <OrganizerRow number={2}  text={'do something Slick here'} functionName='delete' />
                <OrganizerRow number={3}  text={'do something awesome here'} functionName='delete' />
                <div className='organizer-bottom'>
                    <div className='search-add'>
                        <SearchInput placeholder= 'type Something here' />
                        <button className='btn add'>Add</button>
                    </div>
                    <div className='btn-group'>
                        <button className='btn reset'>Reset</button>
                        <button className='btn save'>Save</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
