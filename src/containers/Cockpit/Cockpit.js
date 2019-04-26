import React, { Component, Fragment } from "react";

import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

import ListTodo from "../ListTodo/ListTodo";
import AddTodo from "../AddTodo/AddTodo";
import Header from "../../components/Header/Header";

class Cockpit extends Component {
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
        // if (localStorage.getItem("lsState") === null) {
        //     this.setState({ tasks: [] });
        // } else {
        //     const currState = JSON.parse(localStorage.getItem("lsState"));
        //     this.setState({ tasks: currState.tasks });
        // }
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
        // const tasks = this.state.tasks.filter(task => {
        //     return task.id !== id;
        // });
        const index = this.state.tasks
            .map(item => {
                return item.id;
            })
            .indexOf(id);
        this.state.tasks.splice(index, 1);
        this.setState({ tasks: this.state.tasks });
        this.updateRemainingTasksCount();
    };

    addTaskHandler = task => {
        // let Updatedtasks = [...this.state.tasks];
        // Updatedtasks.push(task);
        this.state.tasks.push(task);
        this.setState({ tasks: this.state.tasks });
        console.log(this.state);
        this.updateRemainingTasksCount();
        this.props.history.replace("/");
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
                    <ToastContainer />
                    <Switch>
                        <Route
                            path="/"
                            render={props => (
                                <ListTodo
                                    {...props}
                                    tasks={this.state.tasks}
                                    deleteTask={this.deleteTaskHandler}
                                    statusChange={this.changeStatusHandler}
                                    remainingTasksCount={
                                        this.state.remainingTasksCount
                                    }
                                    totalTaskCount={this.state.totalTaskCount}
                                />
                            )}
                            exact
                        />
                        <Route
                            path="/addtodo"
                            render={props => (
                                <AddTodo
                                    {...props}
                                    addTodo={this.addTaskHandler}
                                />
                            )}
                        />
                    </Switch>
                </Container>
            </Fragment>
        );
    }
}

export default withRouter(Cockpit);
