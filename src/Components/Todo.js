import React, { Component } from 'react'

// Use rcc to get this class component snippet
export default class Todo extends Component {

  // Use constructor to initialise state and get instance of this
  constructor() {
    super();
    this.state = {
        tasks: [],
        currTask: ''
    }
  }

  handleChange = (event) => {
    // Use setState to update the current state anytime
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
                    // Recommended to have a key(unique id) of each element while traversing through a loop.
                    <li key={taskObj.id}>
                        <p>{taskObj.task}</p>
                        {/* Always pass function definitions here. If need to pass parameters then pass them inside another function definition like shown below. */}
                        <button onClick={() => this.handleDelete(taskObj.id)}>Delete</button>
                    </li>
                ))
            }
        </ul>
      </div>
    )
  }
}
