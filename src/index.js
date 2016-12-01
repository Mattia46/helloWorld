import React from 'react';
import ReactDOM from 'react-dom';
import { App, Clock, Toggle, Mailbox } from './App';
import { LoginControl, Page } from './Login';
import { FilteredProduct } from './Search'
//import { TodoApp } from './Experiment'
import { TodoApp } from './Todo';
//import { CommentBox } from './Comment';
//import { Blog } from './listAndKeys';
import { NameForm } from './Form';
import { Calculator } from './Temperature';
import { WelcomeDialog, Dialog } from './Composition';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const messages = [1,2,3];

var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];


//const posts = [
  //{id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  //{id: 2, title: 'Installation', content: 'You can install React from npm.'}
//];

ReactDOM.render(
  <App />,
  //<Greeting isLoggedIn={true} />,
  document.getElementById('root')
);

/*ReactDOM.render (*/
  //<Clock />,
  //document.getElementById('helloformat')
//);

//ReactDOM.render (
  //<Toggle />,
  //document.getElementById('test')
//);

//ReactDOM.render (
  //<CommentBox />,
  //document.getElementById('commentbox')
//)

/*ReactDOM.render (*/
  //<LoginControl />,
  //document.getElementById('logincontrol')
//)

//ReactDOM.render(
  //<Mailbox messages={messages} name='Mattia'/>,
  //document.getElementById('mailbox')
//)

//ReactDOM.render(
  //<Page />,
  //document.getElementById('page')
//)

//ReactDOM.render(
//<Mailbox unreadMessages={messages} />,
//document.getElementById('mailbox')
//)

ReactDOM.render(
  <NameForm />,
  document.getElementById('form')
);

//ReactDOM.render(
  //<Calculator />,
  //document.getElementById('root')
//)

//ReactDOM.render(
  //<WelcomeDialog color='blue' message='How are you?' name='Mattia'/>,
  //document.getElementById('welcomedialog')
//)

//ReactDOM.render(
  //<FilteredProduct products={PRODUCTS} />,
  //document.getElementById('search')
//);

ReactDOM.render(
  <TodoApp />,
  document.getElementById('experiment')
);
