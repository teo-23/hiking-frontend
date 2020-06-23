import React from 'react'
import './HorizontalPhoto.css';
import { Carousel } from 'react-bootstrap';

export default function HorizontalPhoto() {
    
    return (
        
        <Carousel className="carousel-positioning">
        <Carousel.Item>
            <img
            className="d-block w-100 container-photo-central"
            src="/Chile_Paine_Small.jpg"
            alt="Chilean Patagonia"
            />
            <Carousel.Caption className="caption">
            <h3>...walk towards your dreams...</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 container-photo-central"
            src="/homepage3.jpg"
            alt="Walking in the mountains"
            />

            <Carousel.Caption className="caption">
            <h3>Second photo</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 container-photo-central"
            src="/homepage.jpg"
            alt="Looking at the valley"
            />

            <Carousel.Caption className="caption">
            <h3>Third photo</h3>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>

    )
}
