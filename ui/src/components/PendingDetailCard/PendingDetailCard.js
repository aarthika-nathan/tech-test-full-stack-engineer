import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import "./PendingDetailCard.css";
import JobDetail from "../JobDetail/JobDetail";
import JobAction from "../JobAction/JobAction";

function PendingDetailCard({ job, onAcceptHandler, onDeclineHandler }) {
  return (
    <>
      <Card className="m-3">
        <ListGroup style={{ textAlign: "left" }}>
          <ListGroup.Item>
            <Row xs="auto" className="m-1">
              <Col>
                <div className="circle">
                  <p className="text">{job.contact_name.substring(0, 1)}</p>
                </div>
              </Col>
              <Col className="m-1">
                <Row>{job.contact_name}</Row>
                <Row>{job.created_at}</Row>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <JobDetail id={job.id} location={job.suburbName} postcode={job.postcode} jobType={job.categoryName}/>
          </ListGroup.Item>
          <ListGroup.Item>{job.description}</ListGroup.Item>
          <ListGroup.Item>
            <JobAction price={job.price} onAccept={() => onAcceptHandler(job.id)} onDecline={() => onDeclineHandler(job.id)} />
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
}

export default PendingDetailCard;
