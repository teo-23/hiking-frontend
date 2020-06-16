import React, { Component } from 'react';
import './Filters.css'

class Filters extends Component {
    
    state = {
        difficulty: 'difficulty',
    }

    handleInput = (e) => {
        let {name, value} = e.target;
        this.setState({[name]: value})
    }

    render() {
        return (
            <div>
                <form>
                    <select name="difficulty" value={this.state.difficulty} onChange={(e)=> this.handleInput(e)}>
                        <option value="green">green</option>
                        <option value="blue">blue</option>
                        <option value="black">black</option>
                    </select>
                </form>
            </div>
        );
    }
}



export default Filters;