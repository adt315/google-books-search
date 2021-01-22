import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import SavedBooks from "../components/SavedBooks";

function Saved() {
  return (
    <div>
     
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <SavedBooks />

          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <p></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Saved;