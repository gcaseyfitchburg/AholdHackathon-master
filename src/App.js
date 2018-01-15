import React, { Component } from 'react';
import Header from "./Header"
import './App.css';
import { hashHistory } from 'react-router';

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
            message: ""
        }
        
        this._onUsernameChange = this._onUsernameChange.bind(this);
        this._onPasswordChange = this._onPasswordChange.bind(this);
        this._login = this._login.bind(this);
        //this.home = this.home.bind(this);
        // this.nextPage = this.nextPage.bind(this);
    }
    
    _onUsernameChange(e){
        this.setState({username:e.target.value})
    }
    
    _onPasswordChange(e){
        this.setState({password:e.target.value})
    }
    
    _login(){
        this.setState({message:this.state.username + ", " + this.state.password})
        hashHistory.push("/timecard");
    }

    
  render() {
    return (
      <div className="login"> 
        <Header/>
        <div>
            <input className="login-input" type="text" placeholder="username" onChange={this._onUsernameChange}/>
        </div>
        <div>
            <input className="login-input" type="password" placeholder="password" onChange={this._onPasswordChange}/>
        </div>
        <button className="login-button" onClick={this._login} >Login, yo</button>
        <p>{this.state.message}</p>
      </div>
    );
  }

  
}

export default Login;
