import axios from 'axios';

const headers = {
  "Access-Control-Allow-Origin": "*",
}

class TrailService {
  constructor() {
    let service = axios.create({
      baseURL: process.env.REACT_APP_BASEURL,
      withCredentials: true,
      headers: headers
    });
    this.service = service;
  }

  createTrail = (trail) => {
    return this.service.post('/createTrail', trail)
    .then(response => response.data)
  }

  fetchTrails = (lat, lng, slider, results) => {
    return this.service.post('/getTrails', {lat, lng, slider, results})
    .then(response => response.data)
  }

  addToFavorite = (trail) => {
    return this.service.post('/addToFavorite', {trail})
    .then(response => {
      console.log(response)
      return response.data
    })
  }
  
}

export default TrailService;
