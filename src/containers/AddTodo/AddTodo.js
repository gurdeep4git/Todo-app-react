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

    handleChange = e => {
        const item = new ItemModel();
        item.id = generateId();
        item.Status = 0;
        item.Title = e.target.value;

        this.setState({
            id: item.id,
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
                    <Form className="border p-3">
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="title"
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
