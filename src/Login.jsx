import React, { Component } from 'react';


  function UserGreeting(props) {
    return <h1> Welcome </h1>;
  }

  function GuestGreeting(props) {
    return <h1> Not Welcome </h1>;
  }

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}



function LoginButton(props) {
  return (
  <button onClick={props.onClick}>
    Login
  </button>
  );
}

function LogoutButton(props) {
  return (
  <button onClick={props.onClick}>
    Logout
  </button>
  );
}

export class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button = null;
    //if(isLoggedIn) {
      //button = <LogoutButton onClick={this.handleLogoutClick} />;
    //} else {
      //button = <LoginButton onClick={this.handleLoginClick} />;
    //}

    return (
      <div>
        <div>
          The User is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in!
        </div>
        <Greeting isLoggedIn={isLoggedIn} />
        <div>
         {isLoggedIn ?
          <LogoutButton onClick={this.handleLogoutClick} /> :
          <LoginButton onClick={this.handleLoginClick} />
        }
      </div>
    </div>
    );
  }
}


function WarningBanner(props) {
  if(!props.warn) {
      return null;
  }

  return (
    <div className='warning'>
      Warning!
    </div>
  )
}

export class Page extends React.Component  {
    constructor() {
      super()
      this.state = { showWarning : true }
      this.handleToggleClick = this.handleToggleClick.bind(this)
    }

    handleToggleClick(){
      this.setState(prevState => ({
        showWarning : !prevState.showWarning
      }));
    }

    render (){
      return (
        <div>
          <WarningBanner warn={this.state.showWarning} />
          <button onClick={this.handleToggleClick}>
            {this.state.showWarning ? 'Hide' : 'Show'}
          </button>
        </div>
      );
    }
}

