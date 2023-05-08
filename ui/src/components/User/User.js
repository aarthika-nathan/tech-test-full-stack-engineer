import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import getDateTimeString from "../../commons/utils";
import "./User.css";

function User({ name, timestamp }) {
  return (
    <Row xs="auto">
      <Col>
        <div className="circle">
          <p className="text">{name.substring(0, 1)}</p>
        </div>
      </Col>
      <Col className="m-1">
        <Row className="user-name">{name}</Row>
        <Row className="date-string">{getDateTimeString(timestamp)}</Row>
      </Col>
    </Row>
  );
}

export default User;
