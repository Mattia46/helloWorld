import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
    this.state = {
    date: new Date(),
     test: ''
    };
  }

  componentWillMount(){
    this.setState({
      test: 'ciao'
    })
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
      date: new Date(),
      test: 'Mattia'
    });
  }

  render(){
    return (
      <div>
        <h3> New Time: { this.state.date.toLocaleTimeString() } </h3>
        <h3> { this.state.test }</h3>
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

export class Mailbox extends Component {
  constructor(props){
    super()
    this.state = {
      unreadMessages: props.messages,
      name: props.name
    }
  }
  render(){
    return(
      <div>
        <h1>hello {this.state.name}</h1>
        <h2>you have { this.state.unreadMessages.length } messages</h2>
        <h2>
        </h2>
      </div>
    )
  }
  }







