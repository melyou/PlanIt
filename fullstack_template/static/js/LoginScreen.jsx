import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import React, { Component } from 'react';

import Login from './Login';
import Register from './Register';

require('../css/App.css');
class LoginScreen extends React.Component {
	constructor(props){
    	super(props);
    	this.state={
      		username:'',
      		password:'',
     		loginscreen:[],
      		loginmessage:'',
      		buttonLabel:'Register',
      		isLogin:true
        }
  	}

  	componentWillMount(){
    	var loginscreen=[];
    	loginscreen.push(<Login parentContext={this} appContext={this.props.parentContext}/>);
    	var loginmessage = "Not registered yet? Register Now";
    	this.setState({
                  loginscreen:loginscreen,
                  loginmessage:loginmessage
        })
  	}

  	render() {
  	    console.log(this.state.buttonLabel);
    	return (
      		<div className="loginscreen centeredForm">
        		{this.state.loginscreen}
        		<div>
              <p>
          			{this.state.loginmessage}
              </p>
            		<MuiThemeProvider>
                    <RaisedButton label={this.state.buttonLabel} primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
                </MuiThemeProvider>
        		</div>
      		</div>
    	);
  	}	

  	handleClick(event) {
  		// console.log("event",event);
    	var loginmessage;
    	if(this.state.isLogin){
      		var loginscreen=[];
      		loginscreen.push(<Register parentContext={this}/>);
      		loginmessage = "Already registered? Go to Login";
      		this.setState({
                     loginscreen:loginscreen,
                     loginmessage:loginmessage,
                     buttonLabel:"Login",
                     isLogin:false
            })
    	}
    	else{
      	var loginscreen=[];
      	loginscreen.push(<Login parentContext={this}/>);
      	loginmessage = "Not Registered yet? Go to registration";
      	this.setState({
                     loginscreen:loginscreen,
                     loginmessage:loginmessage,
                     buttonLabel:"Register",
                     isLogin:true
        })
    	}
  	}
}

const style = {
  margin: 15,
};

export default LoginScreen;