import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import todosData from "./todosData"
import TodoItem from "./TodoItem"

class AppToDos extends Component {

  constructor() {
    super()

    this.state = {
      //todos: todosData,
      todos: [
        {
          id: "1",
          text: "Watering flowers",
          completed: 1
        },
        {
          id: "2",
          text: "Cleaning floor",
          completed: 0
        },
        {
          id: "3",
          text: "Car wash",
          completed: 1  }
      ]
    }

    // what happens if we don't do this?
    // it won't work without it...... 
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id)
  {
    console.log("clicked change", id);
  
    this.setState(prevState => {

      // ISEO: not sure if we really need to use prevState for this.
      const updatedTodos = this.state.todos.map(todo => {
        if (todo.id == id) {
          todo.completed = !todo.completed;
        }
        return todo
      })

      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    const toDoList = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)

    return (
      <div>
        {toDoList}
      </div>
    ); 
  }
}

export default AppToDos;
