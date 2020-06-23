import React from 'react'
import './HorizontalPhoto.css';
import { Carousel } from 'react-bootstrap';

export default function HorizontalPhoto() {
    
    return (
        
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100 container-photo-central"
            src="/Chile_Paine_Small.jpg"
            alt="First slide"
            />
            <Carousel.Caption className="caption">
            <h3>...walk towards your dreams...</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 container-photo-central"
            src="/Chile_Paine_Small.jpg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Second photo</h3>
            <p>something here</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 container-photo-central"
            src="Chile_Paine_Small.jpg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third photo</h3>
            <p>somethign here as well</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>

    )
}
