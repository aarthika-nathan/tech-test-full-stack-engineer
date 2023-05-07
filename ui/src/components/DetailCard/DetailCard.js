import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import './DetailCard.css';
import Contact from "../Contact/Contact";
import JobDetail from "../JobDetail/JobDetail";

function DetailCard({job}) {
  return (
    <>
      <Card className="m-3">
        <ListGroup style={{ textAlign: "left" }}>
          <ListGroup.Item>
            <Row xs="auto">
            <Col>
              <div className="circle">
                <p className="text">{job.contact_name.substring(0,1)}</p>
              </div>
            </Col>
            <Col>
              <Row>{job.contact_name}</Row>
              <Row>{job.created_at}</Row>
            </Col>
            </Row>
            
          </ListGroup.Item>
          <ListGroup.Item>
            <JobDetail id={job.id} price={job.price} location={job.suburbName} postcode={job.postcode} jobType={job.categoryName}/>
          </ListGroup.Item>
          <ListGroup.Item>
            <Contact telephone={job.contact_phone} email={job.contact_email}/>
            <Row>
              {job.description}
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
}

export default DetailCard;
