import axios from 'axios';


class TrailService {
  constructor() {
    let service = axios.create({
      baseURL: process.env.REACT_APP_BASEURL,
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
    .then(response => response.data)
  }

  fetchUserTrails = () => {
    return this.service.get('/fetchUserTrails')
    .then(response => response.data)
  }

  fetchFavoriteUserTrails = () => {
    return this.service.get('/fetchFavoriteUserTrails')
    .then(response => response.data)
  }

  deleteTrail = (id, type) => {
    return this.service.post('/deleteTrail', {id,type})
    .then(response => response.data)
  }


  
}

export default TrailService;
