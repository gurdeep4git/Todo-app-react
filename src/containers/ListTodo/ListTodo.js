import React, { Component } from "react";
import Task from "../../components/Task/Task";

class ListTodo extends Component {
    render() {
        return (
            <Task
                tasks={this.props.tasks}
                deleteTask={this.props.deleteTask}
                statusChange={this.props.statusChange}
            />
        );
    }
}

export default ListTodo;
