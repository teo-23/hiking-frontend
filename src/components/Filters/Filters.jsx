import React, { Component } from 'react';
import './Filters.css'

class Filters extends Component {
    
    state = {
        difficulty: 'difficulty',
        slider: 50,
        results: 20,
    }

    handleInput = (e) => {
        let {name, value} = e.target;
        this.setState({[name]: value})
        this.props.slider(this.state.slider,this.state.results)
    }

    render() {
        return (
            <>
            
            <div className="filter-wrapper">
              

                    {/* <div class="slidecontainer">
                    <h6>difficulty</h6>    
                    <select name="difficulty" value={this.state.difficulty} onChange={(e)=> this.handleInput(e)}>
                        <option value="green">green</option>
                        <option value="blue">blue</option>
                        <option value="black">black</option>
                    </select>
                    </div> */}
                    
                    

                    <div className="filter-container">
                    <h6>Radius in miles</h6>
                    <input name="slider" type="range" min="10" max="200" value={this.state.slider} className="slider" id="myRange" onChange={(e)=> this.handleInput(e)}/>
                    {this.state.slider}
                    </div>

                    <div className="filter-container">
                    <h6>Maximum results</h6>
                    <input name="results" type="range" min="10" max="30" value={this.state.results} className="slider" id="myRange" onChange={(e)=> this.handleInput(e)}/>
                    {this.state.results}
                    </div>

            
            </div>
            </>
        );
    }
}



export default Filters;