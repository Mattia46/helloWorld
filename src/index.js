import React from 'react';
import ReactDOM from 'react-dom';
import { App, Clock, Toggle } from './App';
import { LoginControl } from './Login';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


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
);

//ReactDOM.render (
  //<LoginControl />,
  //document.getElementById('logincontrol')
//)

