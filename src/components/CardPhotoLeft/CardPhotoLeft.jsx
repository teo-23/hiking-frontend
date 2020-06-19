import React from 'react';
import './CardPhotoLeft.css';
import { Button } from 'react-bootstrap';

export default function CardPhotoLeft() {
    return (
        <>
        <div className="row row-with-columns align-items-center">
            <div className="col-6"><img className="photo-left" src="/alberta.jpg" alt="landscape" /></div>
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
        </div>
        </>       
    )
}
