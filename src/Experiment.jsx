import React from 'react';

class TodoForm extends React.Component{
  constructor(){
    super();
    this.add = this.add.bind(this);
  }

  add(){
    this.props.addTodo(
      this.todo.value
    );
    this.todo.value = '';
  }

  render() {
  let mattia;
  return(
  <div>
    <input placeholder='Insert your todo' ref={(input) => this.todo = input} />
    <button onClick={this.add}>
      Add
    </button>
  </div>
  )
}
}

class TodoList extends React.Component {
  render(){
    var todo = [];
    this.props.todos.forEach((t) => {
        todo.push(<Todo todo={t} key={t.id} />);
    })
    return (
    <div>
      {todo}
    </div>
    )
  }
}

class Todo extends React.Component {
  render(){
  console.log('tht', this.props)
    return (
    <ul>
      <li>{this.props.todo.text}</li>
    </ul>
    )
  }
}

let id = 0;
export class TodoApp extends React.Component {
  constructor(){
    super()
    this.state = {
      data: []
    }
    this.addTodo = this.addTodo.bind(this)
  }
 addTodo(todo) {
  var newTodo = {
      text: todo,
      id: id++
  }
  this.state.data.push(newTodo);
  this.setState({
      data: this.state.data
  })
 }

  render()  {
    return (
    <div>
      <TodoForm addTodo={this.addTodo}/>
      <TodoList todos={this.state.data} />
    </div>
    )
  }
}
