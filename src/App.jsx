import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import { Navbar, Jumbotron, Button } from 'react-bootstrap';

export class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      </div>
    );
  }
}

export class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render(){
    return (
      <div>
      <h3> New Time: { this.state.date.toLocaleTimeString() } </h3>
      </div>
    );
  }
}

export class Toggle extends React.Component {
  constructor(props){
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render(){
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON':'OFF'}
      </button>
    );
  }
}



