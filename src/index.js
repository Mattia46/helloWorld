import React from 'react';
import ReactDOM from 'react-dom';
import { App, LoginControl } from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


//setInterval(Tick, 1000);

//CLOCK IN ES6
class Toggle extends React.Component {
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

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    this.test();
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

ReactDOM.render(
  <App />,
  //<Greeting isLoggedIn={true} />,
  document.getElementById('root')
);

ReactDOM.render (
  <Clock />,
  document.getElementById('helloformat')
);

ReactDOM.render (
  <Toggle />,
  document.getElementById('test')
)

