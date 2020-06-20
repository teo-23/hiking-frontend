import React, { Component } from 'react';
import './googlemaps.css'
import GoogleMapReact from 'google-map-react';
import Marker from './Marker.jsx'
import AddTrail from './AddTrail.jsx'
import TrailService from '../../service/trail-service'
//const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Googlemaps extends Component {
  static defaultProps = {
    center: {
      lat: 52.3727598,
      lng: 4.8936041
    },
    zoom: 4,
  };

  state = {
    lat: '',
    lng: '',
    trails: [],
    succes: null,
    service: new TrailService()
  }

  _onClick = ({lat, lng}) => {
    //console.log(lat, lng)
    this.state.service.fetchTrails(lat, lng, this.props.slider, this.props.results)
    .then(response => {
      console.log(response)
      this.props.setTrails(response)
      this.setState({trails: response, lat, lng})
    })
    
  }

  showForm = () => {
    this.props.showForm(this.state.lat, this.state.lng)
  }

 
  render() {
    return (
      <div id="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onClick={this._onClick}
        >
          
          <AddTrail
          lat={this.state.lat}
          lng={this.state.lng}
          showForm={this.showForm}
          />
        
        {this.state.trails.length > 0 && this.state.trails.map((trail, index) => (
          <Marker
          key={index}
          number={index}
          lat={trail.latitude}
          lng={trail.longitude}
          text={trail.location}
          />  
        ))}

        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Googlemaps;