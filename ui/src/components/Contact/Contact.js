import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsTelephone, BsEnvelope } from "react-icons/bs";
import './Contact.css';

function Contact({telephone, email}) {
  const emailLink = `mailto:${email}`;
  const teleLink = `tel::${telephone}`;
  return (
    <Row>
      <Col xs="auto">
        <BsTelephone /><a href={teleLink} className="contact-detail"> {telephone}</a>
      </Col>
      <Col>
        <BsEnvelope /><a href={emailLink} className="contact-detail"> {email}</a>
      </Col>
    </Row>
  );
}

export default Contact;
