import React, { Component } from 'react';
import './AddTrailForm.css'
import TrailService from '../../service/trail-service'
import UserRating from '../../components/StarRating/UserRating'
// import { FaTextHeight } from 'react-icons/fa';

class AddTrailForm extends Component {

    state = { 
            name: '',
            summary: '',
            rating: '',
            difficulty: 'green',
            selectedFile: null,
            service: new TrailService()
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData()
        data.append('trailimage', this.state.selectedFile)
        data.append('latitude', this.props.lat)
        data.append('longitude', this.props.lng)
        data.append('name', this.state.name)
        data.append('summary', this.state.summary)
        data.append('difficulty', this.state.difficulty)
        data.append('rating', this.state.rating) 

        this.state.service.createTrail(data)
        .then(response => {
            console.log(response)
            this.props.hideForm()
        })
    }

    hideForm = () => {
        this.props.hideForm()
    }

    handleFileInput = (e) => {
       this.setState({selectedFile: e.target.files[0]})
      }

    handleInput = (e) => {
        let {name, value} = e.target;
        this.setState({[name]: value})
    }

    setRating (rating) {
        this.setState({rating})
    }

    render() {
        return (
            <>
        <div className="form-title">
            {this.state.response ? <h2>{this.state.response}</h2> : <h2>Submit your own trail and join the community!</h2>}
        </div>
        <div className="form-wrapper">
            <form id="formy" onSubmit={(e) => this.handleSubmit(e)}>

                <div id="one">
                <div id="user-rating">
                    <h4>title</h4>
                    <UserRating 
                       setRating={(rating) => this.setRating(rating)} 
                       currentRating={this.state.rating}
                    />
                </div>
                <input type="text" name="name" value={this.state.name} onChange={(e)=> this.handleInput(e)} />

                <h4>description</h4>
                <textarea name="summary" value={this.state.summary} onChange={(e)=> this.handleInput(e)}></textarea>
                
                
                <div id="difficult">
                <h4>difficulty</h4>
                <select name="difficulty" value={this.state.difficulty} onChange={(e)=> this.handleInput(e)}>
                    <option value="green">green</option>
                    <option value="blue">blue</option>
                    <option value="black">black</option>
                </select>
                </div>
                </div>
                

                <div id="two">
                <div id="file-upload">
                <input id="photo" type="file" name="trailimage" onChange={this.handleFileInput}/>
                </div>

                <button type="submit">Submit trail</button>
                </div>
                <div id="three">
                    <button onClick={this.hideForm}>x</button>
                </div>
            </form>
        </div>
            </>
        )
}
}

export default AddTrailForm;