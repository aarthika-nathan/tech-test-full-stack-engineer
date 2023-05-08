import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./JobAction.css";

function JobAction({ price, onAccept, onDecline }) {
  return (
    <Row xs="auto" className="m-1">
      <Col>
        <Button
          size="md"
          onClick={onAccept}
          className="custom-primary-button shadow"
        >
          Accept
        </Button>
      </Col>
      <Col>
        <Button
          size="md"
          onClick={onDecline}
          className="custom-secondary-button shadow"
        >
          Decline
        </Button>
      </Col>
      <Col className="p-2">
        <span style={{ fontWeight: "bold" }}>${price.toFixed(2)}</span> Lead
        Invitation
      </Col>
    </Row>
  );
}

export default JobAction;
