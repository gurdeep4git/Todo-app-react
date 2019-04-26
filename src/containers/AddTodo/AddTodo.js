import React, { Component } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import generateId from "../../Utilities/generateId";
import { ItemModel } from "../../models/ItemModel/ItemModel";

class AddTodo extends Component {

    validationMsg = "Plese add a task"

    state = {
        id: null,
        title: "",
        status: null,
        //showValidation : false
    };

    formSubmitHandler = e => {
        e.preventDefault();
    };

    handleChange = e => {
        const item = new ItemModel();
        item.id = generateId();
        item.status = 0;
        item.title = e.target.value;

        this.setState({
            id: item.id,
            title: item.title,
            status: item.status
        });
    };

    handleButtonClick = () => {
        if(this.validateState(this.state)){
            this.props.addTodo(this.state);
            this.setState({
                id: null,
                title: "",
                status: null,
                //showValidation:false
            });
        }
        else{
            //this.setState({showValidation:true})
            toast.error(this.validationMsg, { autoClose: 3000 });
        }
    };

    validateState = (state) => {
        let validateStatus = true;
        if(state.title === "" || state.title === undefined){
            validateStatus = false;
        }
        return validateStatus;
    }

    render() {
        return (
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    
                    {/* <Alert show={this.state.showValidation} variant="danger">
                        This cant be empty
                    </Alert> */}
                    
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
                            Add Task
                        </Button>
                    </Form>
                </Col>
            </Row>
        );
    }
}

export default AddTodo;
