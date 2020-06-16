import React, { useState } from 'react'
import './UserRating.css'
import { FaStar } from 'react-icons/fa'


const UserRating = (props) => {
    //const [rating, setRating ] = useState(null);
    const [hover, setHover ] = useState(null);

    return (
        <div className="star">
             {[...Array(5)].map((star,index) => {
                 const ratingValue = index + 1;


                 return (
                    <label>
                        <input 
                            id="radio-input" 
                            type="radio" 
                            name="ratings" 
                            onClick={() => props.setRating(ratingValue)}
                            />
                        <FaStar 
                            className="star"
                            key={index} 
                            color={ratingValue <= (hover || props.currentRating) ? "#ffc107" : "#e4e5e9"}
                            size={30} 
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>  
                 )}
            )}
             
        </div>
    )
    
}

export default UserRating
