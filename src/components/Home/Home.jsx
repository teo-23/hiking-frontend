import React, { Component } from 'react';
import HorizontalPhoto from '../HorizontalPhoto/HorizontalPhoto';
import HorizontalLine from '../HorizontalLine/HorizontalLine';
import Quote from '../Quote/Quote';
import CardPhotoLeft from '../CardPhotoLeft/CardPhotoLeft';
import FreeText from '../FreeText/FreeText';

export default class Home extends Component {
    render() {
        return (
            <div>
                <HorizontalPhoto />
                <HorizontalLine />
                <Quote />
                <HorizontalLine />
                <CardPhotoLeft />
                <HorizontalLine />
                <FreeText />
            </div>
        )
    }
}
