import React from 'react'
import hiker from './hiker-icon.png'
import './googlemaps.css'

export default function Marker(props) {


    return (
        <div id="rondje">
            <p>{props.number}</p>
            {/* <img id="hiker-icon" src={hiker} alt=""/> */}
        </div>
    )
}
