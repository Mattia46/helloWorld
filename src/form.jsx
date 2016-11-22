import React from 'react';

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
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.change} />
        </label>
        <input type="submit" value="Submit" />
        <select>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option selected value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </form>
    );
  }
}


