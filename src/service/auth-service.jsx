import axios from 'axios';

const headers = {
  "Access-Control-Allow-Origin": "*",
}

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: process.env.REACT_APP_BASEURL,
      withCredentials: true,
      headers: headers
    });
    this.service = service;
  }

  signup = (username, password) => {
    return this.service.post('/signup', {username, password})
    .then(response => response.data)
  }

  loggedin = () => {
    return this.service.get('/loggedin')
    .then(response => response.data)
  }

  login = (username, password) => {
    return this.service.post('/login', {username, password})
    .then(response => response.data)
  }
   
  logout = () => {
    return this.service.post('/logout', {})
    .then(response => response.data)
  }
  
}

export default AuthService;
