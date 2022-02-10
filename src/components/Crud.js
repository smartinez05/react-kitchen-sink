import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Crud = () => {
  return (
    <Container>
      <h1>CRUD App with Hooks</h1>
      <Row>
        <Col lg={4} md={6} sm={12}>
          <h2>Add user</h2>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <h2>View users</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Crud;
