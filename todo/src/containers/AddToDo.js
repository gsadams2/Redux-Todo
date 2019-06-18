import React, { Component } from "react";
import { connect } from "react-redux";

import { addToDo, toggleToDo } from "../actions";

export class AddToDo extends Component {
  state = {
    newToDo: ""
  };

  handleChanges = e => {
    this.setState({
      newToDo: e.target.value
    });
  };

  addToDo = e => {
    e.preventDefault();
    this.props.addToDo(this.state.newToDo);
    this.setState({ newToDo: "" });
  };

  toggleYo = (e, index) => {
    e.preventDefault();
    this.props.toggleToDo(index);
  };

  render() {
    return (
      <div>
        <header>The Greatest Todo List EVER</header>
        <div className="todo-list">
          {this.props.todos.map((todo, index) => (
            <h2
              style={todo.completed ? { textDecoration: "line-through" } : null}
              onClick={e => this.toggleYo(e, index)}
              key={index}
            >
              {todo.task}
            </h2>
          ))}
        </div>
        <input
          type="text"
          value={this.state.newToDo}
          onChange={this.handleChanges}
          placeholder="Add a task bro"
        />
        <button onClick={this.addToDo}>Add Task</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addToDo, toggleToDo }
)(AddToDo);
