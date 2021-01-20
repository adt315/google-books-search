import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Search from "../components/Search";

function SearchPage() {
  return (
    <div>
      <Search />
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SearchPage;