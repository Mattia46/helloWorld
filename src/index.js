import React from 'react';
import ReactDOM from 'react-dom';
import { App, Clock, Toggle, Mailbox } from './App';
import { LoginControl, Page } from './Login';
import { CommentBox } from './Comment';
import { Blog } from './listAndKeys';
import { NameForm } from './form';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const messages = [1,2,3];
const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

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
  //<CommentBox />,
  //document.getElementById('commentbox')
//)

ReactDOM.render (
  <LoginControl />,
  document.getElementById('logincontrol')
)

ReactDOM.render(
  <Mailbox messages={messages} name='Mattia'/>,
  document.getElementById('mailbox')
)

ReactDOM.render(
  <Page />,
  document.getElementById('page')
)

ReactDOM.render(
<Mailbox unreadMessages={messages} />,
document.getElementById('mailbox')
)

ReactDOM.render(
  <NameForm />,
  document.getElementById('form')
);
