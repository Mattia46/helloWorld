import React from 'react';
import { Draggable, Droppable } from 'react-drag-and-drop';
import './Todo.css';

class Todo extends React.Component {
  delete(){
    this.props.deleteItem(this.props.todo.id);
  }

  render(){
    return (
    <Draggable type='id' data={this.props.todo.id}>
      <div>
        <li className='Todo'>{this.props.todo.id}) {this.props.todo.username}, {this.props.todo.first_name}, {this.props.todo.last_name}</li>
      </div>
    </Draggable>
    )
  }
}

class TodoList extends React.Component {
  render(){
    var todoList = [];
    this.props.todoArray.forEach((t) => {
        todoList.push(<Todo todo={t} key={t.id}/>)
    })
    return (
      <div>
        {todoList}
      </div>
    )
  }
}

class Search extends React.Component {
  constructor(){
    super()
    this.createObj = this.createObj.bind(this)
  }

  createObj(event) {
    var obj = {
          username: this.username.value,
          first_name: this.firstname.value,
          last_name: this.lastname.value,
      }
      this.username.value = '';
      this.lastname.value = '';
      this.firstname.value = '';
      this.add(obj)
    event.preventDefault();
  }

  add(obj){
      this.props.adding(obj)
      this.username.focus()
      return
    }

  render(){
    return(
    <form >
      <h1>todo search</h1>
      <input placeholder='Insert a username...' ref={(input) => this.username = input} />
      <input placeholder='Insert a lastname...' ref={(input) => this.lastname = input} />
      <input placeholder='Insert a firstname...' ref={(input) => this.firstname = input} />
      <button onClick={this.createObj} value='add'>
        +
      </button>
    </form>
    )
  }
}

var id = 0;
export class TodoApp extends React.Component {
  constructor(){
    super()
    this.state = {
        todoData: []
    }
  }
    componentWillMount(){
          var url = `http://localhost:8000/api/users`
          //var url = `http://baconipsum.com/api/?type=all-meat&sentences=6`
        fetch(url)
            .
            then((response) => {
                return response.json()
            }).then((body) => {
                this.getTodo(body)
            })
          .catch(function(err){
            console.log('not connencte', err)
          })
      }

  deleteItem(data) {
      this.state.todoData.forEach((i) => {
          if(i.id == data.id){
            var index = this.state.todoData.indexOf(i)
            this.state.todoData.splice(index, 1)
          }
          this.setState({
              todoData: this.state.todoData
          })
      })
  }

  addTodo(newUser){
      var user = {
        username: newUser.username,
        last_name: newUser.last_name,
        first_name: newUser.first_name,
        id: this.state.todoData.length
      }
      this.state.todoData.push(user)
      this.setState({
          todoData: this.state.todoData
      })
  }

  getTodo(newTodo){
    newTodo.forEach((user) => {
      this.state.todoData.push(user)
      this.setState({
          todoData: this.state.todoData
      })
    })
  }

  render(){
    return(
    <div>
      <Search adding={this.addTodo.bind(this)}/>
      <TodoList todoArray={this.state.todoData} delete={this.deleteItem.bind(this)}/>
      <Droppable types='id' onDrop={this.deleteItem.bind(this)}><img  className='Trash' src="http://vignette1.wikia.nocookie.net/thetrashpack/images/b/bf/Toxic-trash-rim.png/revision/latest?cb=20120321000643"/></Droppable>
    </div>
    )
  }
}
