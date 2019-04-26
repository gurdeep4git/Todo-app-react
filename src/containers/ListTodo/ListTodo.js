import React, { Component, Fragment } from "react";
import Task from "../../components/Task/Task";

class ListTodo extends Component {
    render() {
        return (
            <Fragment>
                {this.props.tasks.length ? (
                    <div>
                        Tasks
                        <strong className="mx-1">
                            {this.props.remainingTasksCount}
                        </strong>
                        left from
                        <strong className="ml-1">
                            {this.props.totalTaskCount}
                        </strong>
                    </div>
                ) : null}
                <Task
                    tasks={this.props.tasks}
                    deleteTask={this.props.deleteTask}
                    statusChange={this.props.statusChange}
                />
            </Fragment>
        );
    }
}

export default ListTodo;
