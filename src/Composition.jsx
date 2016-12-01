import React from 'react';
import './Composition.css';

function Context(props) {
  console.log('context props', props);
  return (
  <div>
    <h2>{props.message}</h2>
    <h2>{props.name}</h2>
    {props.children}
  </div>
  )
}
function FancyBorder(props) {
      console.log('pr', props);
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      <Context name={props.name} message={props.message}/>
      <Context name='test' message='fine thanks'>
        <h1> inner contex</h1>
      </Context>
      <Contact name='Ugo'/>
    </div>
  )
}
//props.children mi permette di passare tutto il contenuto tra <FancyBorder></FancyBorder>

function Contact(props){
  return (
  <div>{props.name}</div>
 )
}

export class WelcomeDialog extends React.Component {
  constructor(props){
  super(props)
  }

  render(){
    return(
      <FancyBorder color={this.props.color} message={this.props.message} name={this.props.name}>
        <h1 className="Dialog-title">
          Welcome
        </h1>
      </FancyBorder>
        )
}
}

//export class Dialog extends React.Component {
  //constructor(props){
    //super(props)
  //}

  //render(){
    //return (
    //<div>
        //<h1>ciao</h1>
        //<WelcomeDialog color={this.props.color} message={this.props.message} first={this.props.name} />
      //</div>
    //)
  //}
/*}*/
