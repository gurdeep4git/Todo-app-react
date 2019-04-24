import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Header = () => {
    return (
        <header className="p-3 bg-primary text-white">
            <Container fluid>
                <Row>
                    <Col className="justify-content-center" xs={12}>
                        <span className="text-center">All Tasks</span>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;
