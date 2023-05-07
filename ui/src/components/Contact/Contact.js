import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsTelephone, BsEnvelope } from "react-icons/bs";
import './Contact.css';

function Contact({telephone, email}) {
  return (
    <Row>
      <Col xs="auto">
        <BsTelephone /> <span className="contact-detail"> {telephone}</span>
      </Col>
      <Col>
        <BsEnvelope /><span className="contact-detail"> {email}</span>
      </Col>
    </Row>
  );
}

export default Contact;
