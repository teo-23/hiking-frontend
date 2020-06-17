import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import TrailsList from './components/trails/TrailsList';
import Navbar from './components/navbar/Navbar';
import TrailDetails from './components/trails/TrailDetails';

import Signup from './components/auth/Signup';
import AuthService from './service/auth-service';
import Filters from './components/Filters/Filters'
import Login from './components/auth/Login';
import GoogleMaps from './components/Googlemaps/Googlemaps';
import SearchResults from './components/SearchResults/SearchResults'
import AddTrailForm from './components/AddTrailForm/AddTrailForm'

import Footer from './components/Footer/Footer';
import CardPhotoLeft from './components/CardPhotoLeft/CardPhotoLeft';
import Quote from './components/Quote/Quote';
import HorizontalLine from './components/HorizontalLine/HorizontalLine';
import HorizontalPhoto from './components/HorizontalPhoto/HorizontalPhoto';
import FreeText from './components/FreeText/FreeText'

class App extends Component {
  constructor(props){
    super(props)
    this.state = { 
      loggedInUser: null,
      trails: [],
      showForm: false,
      response: "",
      lat: '',
      lng: '',
      slider: 50,
      results: 20,
     };
    this.service = new AuthService();
  }
 
  fetchUser(){
    if( this.state.loggedInUser === null ){
      this.service.loggedin()
      .then(response =>{
        this.setState({
          loggedInUser:  response
        }) 
      })
      .catch( err =>{
        this.setState({
          loggedInUser:  false
        }) 
      })
    }
  }
 
  getTheUser= (userObj) => {
    window.location.reload(false);
    this.setState({
      loggedInUser: userObj
    })
  }

  setTrails = (trails) => {
    this.setState({trails: trails})
  }

  showForm = (lat, lng) => {
    console.log(this.state.trails)
    this.state.showForm ? 
    this.setState({showForm: false}) :
    this.setState({showForm: true, lat: lat, lng: lng})
  }

  setSlider = (slider, results) => {
    this.setState({slider: slider, results: results})
  }

  render() {
    this.fetchUser()
    if(this.state.loggedInUser){
      return (
        <div className="App">
          <Navbar userInSession={this.state.loggedInUser} />
          
            {/* <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser}/>}/>
            <Route exact path='/login' render={() => <Login getUser={this.getTheUser}/>}/> */}
            <Route exact path="/trails" component={TrailsList}/>
            <Route exact path="/trails/:id" component={TrailDetails} />
            {/* <Route exact path="/PROFILE/:id" component={PROFILE} />       */}
          
          <Filters 
          slider={this.setSlider}
          />


          <GoogleMaps 
          trails={this.state.trails}
          setTrails={this.setTrails}
          showForm={this.showForm}
          slider={this.state.slider}
          results={this.state.results}
          />
          
          { this.state.showForm && <AddTrailForm 
          lat={this.state.lat}
          lng={this.state.lng}
          hideForm={() => this.setState({showForm: false})}
          />}
   
          { this.state.trails.map((trail, index) => (
            <SearchResults 
            key = {index}
            number= {index}
            stars={trail.stars}
            img = {trail.imgSmall}
            name = {trail.name}
            difficulty = {trail.difficulty}
            summary = {trail.summary}
            />
          ))
          }
          
          <Footer />
        </div>
      );
    } else {
      return (
        <>
        <div className="App">
          <Navbar userInSession={this.state.loggedInUser} />
          
          <Switch>
            <Route exact path='/login' render={() => <Login getUser={this.getTheUser}/>}/>
            <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser}/>}/>
            <Route exact path="/trails" component={TrailsList}/>
            <Route exact path="/trails/:id" component={TrailDetails} />

            <div className="homepage">
              
              <HorizontalPhoto />
              <HorizontalLine />
              <Quote />
              <HorizontalLine />
              <CardPhotoLeft />
              <HorizontalLine />
              <FreeText />
            </div>   
          </Switch>  
          <Footer />
        </div>
        </>
      );
    }
  }
}
export default App;