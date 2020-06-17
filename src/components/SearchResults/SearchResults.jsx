import React, { Component } from 'react';
import trailService from '../../service/trail-service'
import StarRating from '../../components/StarRating/StarRating'
import './searchResults.css'

class SearchResults extends Component {
    
    state = {
        img: this.props.img,
        name: this.props.name,
        difficulty: this.props.difficulty,
        service: new trailService()
    }

    addToFavorite = () => {
        const trail = {
            img: this.state.img,
            name: this.state.name,
            difficulty: this.state.difficulty,
        }
        this.state.service.addToFavorite(trail)
    }

    render() {
        return (
            <div className="wrapper">
            <div className="card-container">
                <div className="card-image">
                    <img src={this.props.img} onError={(e)=>{e.target.onerror = null; e.target.src="http://placekitten.com/g/200/200"}} alt="nature"/>
                </div>
                {/* <div className="card-headers">
                    <h5>trail:</h5>
                    <h5>difficulty:</h5>
                    <h5>summary:</h5>
                </div> */}
                <div className="card-info">
                    <h6><strong>#{this.props.number}</strong> {this.props.name}</h6>

                    <div className="card-info-wrapper">
                        <div id="difficulty">
                            <h6>{this.props.difficulty}</h6>
                        </div>
                        <div id="star-rating">
                            <StarRating 
                            stars={this.props.stars}
                            />
                        </div> 
                    </div>
                    
                    <div id="summary">
                        <h6>{this.props.summary}</h6>
                    </div>
                    
                </div>
                <div className="like">
                    <button onClick={this.addToFavorite}>favorite</button>
                </div>
            </div>
        </div>
        );
    }
}

export default SearchResults;