import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import Header from "./components/Header/Header";
import AddTodo from "./containers/AddTodo/AddTodo";
import ListTodo from "./containers/ListTodo/ListTodo";

//import { MasterLocalStorage } from "./Storage/LocalStorage/LocalStorage";

class App extends Component {
    componentWillMount() {
        this.loadTasks();
    }

    state = {
        tasks: [
            { id: 1, title: "new", status: 1 },
            { id: 2, title: "new1", status: 0 },
            { id: 3, title: "new2", status: 0 }
        ],
        remainingTasksCount: 0,
        totalTaskCount: 0
    };

    loadTasks = () => {
        //     if (localStorage.getItem("lsState") === null) {
        //         this.setState({ tasks: [] });
        //     } else {
        //         const currState = JSON.parse(localStorage.getItem("lsState"));
        //         this.setState({ tasks: currState.tasks });
        //     }

        this.updateRemainingTasksCount();
    };

    updateRemainingTasksCount = () => {
        const remainingTasks = this.state.tasks.filter(task => {
            return task.status === 0;
        });
        const remainingTasksCount = remainingTasks.length;
        const totalTaskCount = this.state.tasks.length;
        this.setState({ remainingTasksCount, totalTaskCount });
    };

    deleteTaskHandler = id => {
        const tasks = this.state.tasks.filter(task => {
            return task.id !== id;
        });
        this.setState({ tasks: tasks });
    };

    addTaskHandler = task => {
        let Updatedtasks = [...this.state.tasks];
        Updatedtasks.push(task);
        this.setState({ tasks: Updatedtasks });
        this.updateRemainingTasksCount();
        //localStorage.setItem("lsState", JSON.stringify(this.state));
    };

    changeStatusHandler = (e, id) => {
        let Updatedtasks = [...this.state.tasks];
        this.state.tasks.forEach(task => {
            if (task.id === id) {
                if (e.target.checked) task.status = 1;
                else task.status = 0;
            }
        });
        this.setState({ tasks: Updatedtasks });
        this.updateRemainingTasksCount();
    };

    render() {
        return (
            <Fragment>
                <Header />
                <Container>
                    <AddTodo addTodo={this.addTaskHandler} />
                    <hr />
                    <div>
                        Tasks
                        <strong className="mx-1">
                            {this.state.remainingTasksCount}
                        </strong>
                        left from
                        <strong className="ml-1">
                            {this.state.totalTaskCount}
                        </strong>
                    </div>
                    {this.state.tasks.length ? (
                        <ListTodo
                            tasks={this.state.tasks}
                            deleteTask={this.deleteTaskHandler}
                            statusChange={this.changeStatusHandler}
                        />
                    ) : null}
                </Container>
            </Fragment>
        );
    }
}

export default App;
