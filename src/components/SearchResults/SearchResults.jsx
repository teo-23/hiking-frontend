import React, { Component } from 'react';
import trailService from '../../service/trail-service'
import StarRating from '../../components/StarRating/StarRating'
import { FaHeart, FaTimes } from 'react-icons/fa'
import './searchResults.css'

class SearchResults extends Component {
    
    state = {
        //id: this.props.id,
        img: this.props.img,
        name: this.props.name,
        difficulty: this.props.difficulty,
        stars: this.props.stars,
        latitude: this.props.latitude,
        longitude: this.props.longitude,
        summary: this.props.summary,
        service: new trailService(),
        message: '',
    }

    addToFavorite = () => {
        const trail = {
            imgSmall: this.state.img,
            name: this.state.name,
            difficulty: this.state.difficulty,
            stars: this.state.stars,
            summary: this.state.summary,
            latitude: this.state.latitude,
            longitude: this.state.longitude
        }
        this.state.service.addToFavorite(trail)
        .then(response => {
            console.log(response)
            this.setState({message: response.message})
            setTimeout(function() {
                this.setState({message:''})
            }
            .bind(this)
            ,2000)
        })
    }

    deleteTrail = () => {
        this.state.service.deleteTrail(this.state.id, this.props.type)
        .then(response => {
            console.log(response)
            //this.setState({run: true})
        })
    }

    render() {
        return (
            <>
            <div className="wrapper">
                <div className="card-container">

                    <div className="card-image">
                        <img src={this.props.img} onError={(e)=>{e.target.onerror = null; e.target.src="https://images.pexels.com/photos/733162/pexels-photo-733162.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}} alt="nature"/>
                    </div>

                    <div className="card-info">
                        <div className="reponse-message">
                            {this.state.message ? <strong><p>{this.state.message}</p></strong>  : '' }
                        </div>

                        {!this.props.check ? 
                        <h6><strong>#{this.props.number}</strong> {this.props.name}</h6> :
                        <h6>{this.props.name}</h6>
                        }

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
                    { this.props.check ? 
                        <div className="like">
                            <FaTimes 
                            size={25}
                            className='fa-times'
                            onClick={() => this.props.deleteTrail(this.props.id, this.props.type)}
                            />
                        </div> :
                        
                        
                        <div className="like">
                            <FaHeart 
                            className='fa-heart'
                            onClick={this.addToFavorite}
                            />
                        </div>  
                    }
                    
                </div>
            </div>
                    
            
                
            </>

        );
    }
}

export default SearchResults;