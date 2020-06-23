import React, { Component } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   useParams,
// } from "react-router-dom";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { Navbar, Nav, Button } from 'react-bootstrap';
import AuthService from '../../service/auth-service';

// import { LinkContainer } from 'react-router-bootstrap'
// import { IndexLinkContainer } from 'react-router-bootstrap';


var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    } else {
    document.getElementById("navbar").style.top = "-90px";
    }
    prevScrollpos = currentScrollPos;
    }

class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }
 
  UNSAFE_componentWillMount() {
    this.service.loggedin()
    .then(res => {
      console.log('test',res)
      this.setState({loggedInUser: res})
      console.log(this.state)
    })
  }
  

  logoutUser = () =>{
    this.service.logout()
    .then((res) => {
      console.log(res, 'testlogout')
      this.setState({ loggedInUser: null });
      this.props.getUser(null);  
    })
  }
 
  render(){
    if(this.state.loggedInUser){
      return(

        <>
        {console.log('myState', this.state.loggedInUser)}
        <div>
            <Navbar collapseOnSelect expand="lg" id="navbar" className="smart-scroll navbar-expand-lg fixed-top navbar-light bg-white border-0 mb-5">
            <Navbar.Brand id="navbar-title" className="font-weight-bold" src="/logo-hiking.png" href="/"> <span
                        className="navbar-text font-italic text-left navbar-element"> Welcome to Hiking, {this.state.loggedInUser.username}</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />            
            <Navbar.Collapse className="test" id="responsive-navbar-nav">
                <Nav className="ml-auto nav-item">
                <Nav.Link className="nav-link navbar-element" href="/profile">My profile</Nav.Link>
                <Nav.Link className="nav-link navbar-element" href="/">explore</Nav.Link>
                {/* <Nav.Link className="nav-link" href="/"><button onClick={() => this.logoutUser()}>Logout</button></Nav.Link> */}
                <Button variant="success" onClick={() => this.logoutUser()} size="lg" href="/">Log out</Button>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
        </> 
      )
    } else {
      return ( 

        <>
        <div>
            <Navbar collapseOnSelect expand="lg" id="navbar" className="smart-scroll navbar-expand-lg fixed-top navbar-light bg-white border-0 mb-5">
            
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto nav-item">
                  <Nav.Link as={Link} className="nav-link navbar-element" to="/explore">Explore</Nav.Link>
                  <Nav.Link as={Link} className="nav-link navbar-element" to="/profile">Profile</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            
            <Navbar.Brand id="navbar-title" className="navbar-brand font-weight-bold" href="/"><img className="logo" src="/hiking-logo.png" alt="logo-hiking"/> 
            {/* <span className="navbar-text font-italic text-left navbar-element"> walk in freedom</span> */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />            
            
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto nav-item">
                  <Nav.Link as={Link} className="nav-link navbar-element" to="/login">Login</Nav.Link>
                  <Nav.Link as={Link} className="nav-link navbar-element" to="/signup">Signup</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            
            </Navbar>
        </div>
        </> 
      )
    }
  }
}
 
export default Navigation;