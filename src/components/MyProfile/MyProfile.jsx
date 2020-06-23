import React, { Component } from 'react';
import './MyProfile.css'
import trailService from '../../service/trail-service'
import SearchResults from '../../components/SearchResults/SearchResults';

class MyProfile extends Component {

    state = {
        run: true,
        trails: [],
        favoriteTrails: [],
        service: new trailService()
    }

    fetchUserTrails = () => {
        this.state.service.fetchUserTrails()
        .then(response => {
            this.setState({trails: response})
        })
    }

    fetchFavoriteUserTrails = () => {
        this.state.service.fetchFavoriteUserTrails()
        .then(response => {
            this.setState({favoriteTrails: response, run: false})
        })
    }

    deleteTrail = (id,type) => {
        this.state.service.deleteTrail(id, type)
        .then(response => {
            console.log(response)
            this.setState({run: true})
        })
    }

    render() {
        if(this.state.run){
            this.fetchUserTrails()
            this.fetchFavoriteUserTrails()
        }
        return (
            <div className='my-profile-wrapper'>
                <h1 className="form-title" >My own created trails</h1>
                { this.state.trails.length !== 0 && this.state.trails.map((trail, index) => (
                    <SearchResults 
                    key         = {index}
                    number      = {index}
                    stars       = {trail.stars}
                    img         = {trail.imgSmall}
                    name        = {trail.name}
                    difficulty  = {trail.difficulty}
                    summary     = {trail.summary}
                    latitude    = {trail.latitude}
                    longitude   = {trail.longitude}
                    id          = {trail._id}
                    check       = {true}
                    deleteTrail = {this.deleteTrail}
                    type        = {'trails'}
                    />
                ))
                }
                <h1 className="form-title" >My favorite trails</h1>
                { this.state.favoriteTrails.length !== 0 && this.state.favoriteTrails.map((trail, index) => (
                    <SearchResults 
                    key         = {index}
                    number      = {index}
                    stars       = {trail.stars}
                    img         = {trail.imgSmall}
                    name        = {trail.name}
                    difficulty  = {trail.difficulty}
                    summary     = {trail.summary}
                    latitude    = {trail.latitude}
                    longitude   = {trail.longitude}
                    id          = {trail._id}
                    check       = {true}
                    deleteTrail = {this.deleteTrail}
                    type        = {'favoriteTrails'}
                    />
                ))
                }
            </div>
        );
    }
}

export default MyProfile;