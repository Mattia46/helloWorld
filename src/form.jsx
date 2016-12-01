import React from 'react';
import Draggable from 'react-draggable';
import { DraggableCore } from 'react-draggable';

export class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }

  change(event) {
    this.setState({value: event.target.value});
  }

  submit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <div>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.change} />
          </label>
        </div>
        <div>
          <label>
            Pick your favorite La Croix flavor:
          </label>
          <select value={this.state.value} onChange={this.change}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </div>
        <Draggable>
          <input type="submit" value="Submit" />
        </Draggable>
      </form>
    );
  }
}


