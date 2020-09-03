import React, { useState } from "react";
import "./SignIn.css";
import axios from 'axios';
import { Spring } from "react-spring/renderprops";
import UserProfile from '../Profile/UserProfile';
import {Redirect} from 'react-router-dom';



export class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.validateForm = this.validateForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    if (localStorage.getItem("isloggedin")){
      return <Redirect to="/userprofile"/>
    }
    return (
      <Spring from={{opacity:0,marginTop:-500}} to={{opacity:1,marginTop:0}} config={{delay:200,duration:500}}>
        {(props) => (
          <body className="login">
          <div style={props}>
            <div className="auth-wrapper">
              <div className="auth-inner">
                <form onSubmit={this.handleSubmit}>
                  <h3>Sign In</h3>

                  <div className="form-group">
                    <span>Email address: </span>
                    <input
                      name="username"
                      className="login"
                      placeholder="Enter email"
                      value={this.state.username}
                      onChange={this.handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>

                  <button
      
                    id = "login"
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={!this.validateForm}
                  >
                    Submit
                  </button>
                  <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
          </body>
        )}
      </Spring>
    );
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }
  handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      username: this.state.username,
      password: this.state.password,
    };
    this.setState(() => ({
      username: newItem.username,
      password: newItem.password,
      
    }));
    console.log(newItem);
    if (localStorage.getItem("username") === this.state.username && localStorage.getItem("password") === this.state.password){
      console.log("ENTREEE");
      localStorage.setItem("isloggedin",true);
      this.setState(this.state);
    }
    
    axios.post(`https://ieti-deep-backend.herokuapp.com/login`, newItem)
      .then(res => {
          console.log("LOL");

        console.log(res);
        console.log(res.data);
      })
    console.log(this.state)
  }

  handleChange(e) {
    // Multiple events(2 inputs) in one function
    const value = e.target.value;
    this.setState({ [e.target.name]: value });
  }
}

export default SignIn;
