import React, { Component } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

import generateId from "../../Utilities/generateId";
import { ItemModel } from "../../models/ItemModel/ItemModel";

class AddTodo extends Component {
    state = {
        id: null,
        title: "",
        status: null
    };

    formSubmitHandler = e => {
        e.preventDefault();
    };

    handleChange = e => {
        const item = new ItemModel();
        item.Id = generateId();
        item.Status = 0;
        item.Title = e.target.value;

        this.setState({
            id: item.Id,
            title: item.Title,
            status: item.Status
        });
    };

    handleButtonClick = () => {
        this.props.addTodo(this.state);
        this.setState({
            id: null,
            title: "",
            status: null
        });
    };

    render() {
        return (
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <Form
                        onSubmit={this.formSubmitHandler}
                        className="border p-3"
                    >
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Add New Task</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="task"
                                onChange={this.handleChange}
                                value={this.state.title}
                            />
                        </Form.Group>
                        <Button
                            variant="primary"
                            type="button"
                            onClick={this.handleButtonClick}
                        >
                            Add Todo
                        </Button>
                    </Form>
                </Col>
            </Row>
        );
    }
}

export default AddTodo;
