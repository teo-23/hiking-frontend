import React, { Component } from 'react';
import HorizontalPhoto from '../HorizontalPhoto/HorizontalPhoto';
import HorizontalLine from '../HorizontalLine/HorizontalLine';
import Quote from '../Quote/Quote';
import CardPhotoLeft from '../CardPhotoLeft/CardPhotoLeft';
import FreeText from '../FreeText/FreeText';
import SlidingUsers from '../SlidingUsers/SlidingUsers';
import './Home.css'
export default class Home extends Component {
    render() {
        return (
            <div className="overflow-scroll-gradient">
                <div className="overflow-scroll-gradient__scroller homepage">
                <HorizontalPhoto />
                <HorizontalLine />
                <Quote />
                <HorizontalLine />
                <FreeText />
                <HorizontalLine />
                <CardPhotoLeft />
                <SlidingUsers />
                </div>
            </div>
        )
    }
}
