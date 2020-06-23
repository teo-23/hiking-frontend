import React, { Component } from 'react';
import AuthService from '../../service/auth-service';
import { Link } from 'react-router-dom';
import './Signup.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from '../Footer';
class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '', error: false, errorMessage: '' };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
   
    this.service.signup(username, password)
    .then( response => {
        this.setState({
            username: "", 
            password: "",
            
        });
      
        this.props.getUser(response)
    })
  //   .catch( error => { error.json().then((body) => {
  //     //Here is already the payload from API
  //     this.setState({error: true, errorMessage: body}); return console.log(body)} );
  // });
      // this.setState({error: true, errorMessage: error.json }); return console.log(error, error.message)} )
  
      .catch(error => {
        console.log(error.response);
        this.setState({error: true, errorMessage: error.response.data.message }); return console.log(error, error.message)} )
  }
   
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
    this.setState({error: false})
  }

   
  render(){
    return(
      <>
      <section id="section">

        <div className="signup container signup-form">
            <h3 className="header">make your first step</h3>

            <div className="">
              <form onSubmit={this.handleFormSubmit}>
                <label className="username">Username: </label>
                <input type="text" name="username" placeholder="start hiking today" required value={this.state.username} onChange={ e => this.handleChange(e)}/>
                <br></br>
                <br></br>
                <label className="password">Password: </label>
                <input type="password" name="password" placeholder="choose your password" required value={this.state.password} onChange={ e => this.handleChange(e)} />
                {this.state.error && <div className="error-messsage">{this.state.errorMessage}</div>}
                <br/><br/>
                <input type="submit" value="Signup" className="button"/>

              </form>
              <br/>
              <p className="form-footer">Already have account? 
                  <Link to={"/login"} className="login-call"> Login</Link>
              </p>
            </div>
        </div>

      </section>
    </>
    )
  }
}

export default Signup;
