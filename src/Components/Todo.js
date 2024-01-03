import React, { Component } from 'react'

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
        tasks: [],
        currTask: ''
    }
  }

  handleChange = (event) => {
    this.setState({
        currTask: event.target.value
    });
  }

  handleSubmit = () => {
    this.setState({
        tasks: [...this.state.tasks, { task: this.state.currTask, id: this.state.tasks.length + 1 }],
        currTask: ''
    });
  }

  handleDelete = (taskId) => {
    const newTasks = this.state.tasks.filter((taskObj) => {
        return taskObj.id !== taskId;
    });
    this.setState({
        tasks: [...newTasks]
    });
  }

  
  render() {
    return (
      <div>
        <input type="text" value={this.state.currTask} onChange={this.handleChange}></input>
        <button onClick={this.handleSubmit}>Submit</button>
        <ul>
            {
                this.state.tasks.map((taskObj) => (
                    <li key={taskObj.id}>
                        <p>{taskObj.task}</p>
                        <button onClick={() => this.handleDelete(taskObj.id)}>Delete</button>
                    </li>
                ))
            }
        </ul>
      </div>
    )
  }
}
