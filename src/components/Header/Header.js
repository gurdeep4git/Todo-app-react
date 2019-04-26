import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="p-3 bg-secondary text-white">
            <Container fluid>
                <Row>
                    <Col xs={6}>
                        <span>All Tasks</span>
                    </Col>
                    <Col xs={6} className="text-right">
                        <NavLink
                            to="/addtodo"
                            exact
                            className="text-white mr-3"
                        >
                            Add task
                        </NavLink>
                        <NavLink to="/" exact className="text-white">
                            All Tasks
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;
