import React from 'react';
import Marquee from 'react-double-marquee';
import './SlidingUsers.css';

export default function SlidingUsers() {
    return (
        
      <div
        style={{
          width: '100%',
          whiteSpace: 'nowrap',
          
        }}
      >
        <div className="sliding">
        <Marquee>
           Michiel &nbsp; &nbsp; &nbsp; teo23 &nbsp; &nbsp; &nbsp; BigFoot88 &nbsp; &nbsp; &nbsp; Hikerman &nbsp; &nbsp; &nbsp; Slideman &nbsp; &nbsp; &nbsp; PeakGirl &nbsp; &nbsp; &nbsp; Gym91 &nbsp; &nbsp; &nbsp; 4StepsInTheWild &nbsp; &nbsp; &nbsp; WildFlower &nbsp; &nbsp; &nbsp; GreenSprint &nbsp; &nbsp; &nbsp; PineView
        </Marquee>
        </div>

      </div>
    );
  }