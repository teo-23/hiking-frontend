import React from 'react'
import './StarRating.css'
import { FaStar } from 'react-icons/fa'

function check (stars) {
 if (stars >= 0 && stars <= 5) {
     return Math.ceil(stars)
 } else {
     return 1
 }
}

const StarRating = (props) => {

    return (
        <div className="star">
             {[...Array(check(props.stars))].map(index => <FaStar key={index} /> )}
        </div>
    )
    
}

export default StarRating
