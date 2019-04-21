import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import Header from "./components/Header/Header";
import AddTodo from "./containers/AddTodo/AddTodo";
import ListTodo from "./containers/ListTodo/ListTodo";

class App extends Component {
    state = {
        tasks: [{ id: 1, title: "new", status: 1 }]
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
    };

    changeStatusHandler = id => {
        let Updatedtasks = [...this.state.tasks];
        this.state.tasks.forEach(task => {
            if (task.id === id) {
                task.status = 1;
            }
        });
        this.setState({ tasks: Updatedtasks });
    };

    render() {
        return (
            <Fragment>
                <Header />
                <Container>
                    <ListTodo
                        tasks={this.state.tasks}
                        deleteTask={this.deleteTaskHandler}
                        statusChange={this.changeStatusHandler}
                    />
                    <AddTodo addTodo={this.addTaskHandler} />
                </Container>
            </Fragment>
        );
    }
}

export default App;
