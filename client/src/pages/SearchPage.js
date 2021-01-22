import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Search from "../components/Search";
import SearchButton from "../components/SearchButton";
import Results from "../components/Results";


function SearchPage() {
  return (
    <div>
      <Search />
      <SearchButton />
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <Results />
            
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