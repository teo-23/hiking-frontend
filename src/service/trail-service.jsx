import axios from 'axios';


class TrailService {
  constructor() {
    let service = axios.create({
      baseURL: "https://hi-king.herokuapp.com/api",
      withCredentials: true
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
