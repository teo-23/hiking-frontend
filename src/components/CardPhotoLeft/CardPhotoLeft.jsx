import React from 'react';
import './CardPhotoLeft.css';
import { Button, Card } from 'react-bootstrap';
import HorizontalLine from '../HorizontalLine/HorizontalLine';

export default function CardPhotoLeft() {
    return (
        <>
        {/* <div className="row row-with-columns align-items-center">
            <div className="col-6"><img className="photo-left" src="/theBeach.jpg" alt="landscape" /></div>
            <div className="col-6 content-left-photo">
            <p>Save, create, and share your favorite trails</p>
                <div className="mb-2">
                    <Button variant="success" size="lg" href="/signup" className="button button-home">
                    Signup
                    </Button>{' '}
                    <Button variant="success" size="lg" href="/login" className="button button-home">
                    Login
                    </Button>
                </div>
            </div>
        </div> */}

        <br></br>
        <Card className="bg-dark text-white card">
            <Card.Img src="/homepage.jpg" alt="italian Alps" />
                <Card.ImgOverlay>
                    <Card.Title className="align-elements">Save, create, and share your favorite trails</Card.Title>
                    {/* <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                    </Card.Text> */}
                    {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
                    <Button variant="success" size="lg" href="/signup" className="button button-home">
                    Signup
                    </Button>{' '}
                    <Button variant="success" size="lg" href="/login" className="button button-home">
                    Login
                    </Button>
                </Card.ImgOverlay>
        </Card>

        <br></br>
        <HorizontalLine />
        <h1 className="title-sliding">Chosen by more than a million hikers </h1>

        </>       
    )
}
