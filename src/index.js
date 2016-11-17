import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
	<App />,
	document.getElementById('root')
);

function Tick(){
	ReactDOM.render (
			<Clock />,
			document.getElementById('helloformat')
			)
}

setInterval(Tick, 1000);

//CLOCK IN ES6
class Clock extends React.Component {
	constructor(props){
		super(props);
		this.state = {date: new Date()}
	}
	render(){
		return (
			<div>
			<h3> New Time: { this.state.date.toLocaleTimeString() } </h3>
			</div>
	       );
	}
}

