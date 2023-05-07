import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { GrLocation } from "react-icons/gr";
import { BiBriefcase } from "react-icons/bi";

function JobDetail ({id, location, postcode, jobType, price}) {
    return (
        <Row xs="auto">
            <Col><GrLocation /> {location} {postcode}</Col>
            <Col><BiBriefcase /> {jobType}</Col>
            <Col>Job ID: {id}</Col>
            {price && <Col>${price.toFixed(2)} Lead Invitation</Col>}
        </Row>
    )
}

export default JobDetail;
