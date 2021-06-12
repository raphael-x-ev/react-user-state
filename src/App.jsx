import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/Header";
import Body from "./components/Body";

const App = () => {
  return (
    <Container fluid>
      <Row>
        <Col lg={true}>
          <div className="App">
            <Header title="User Status" />
            <Body />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default App;
