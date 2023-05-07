import React, { Component } from "react";
import "./App.css";
import Col from "react-bootstrap/Col";
import ListViewPage from "./pages/ListViewPage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container fluid className="m-3">
          <Row>
            <Col>
              <ListViewPage />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;