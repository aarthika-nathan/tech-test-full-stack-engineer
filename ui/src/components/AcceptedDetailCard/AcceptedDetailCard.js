import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import Contact from "../Contact/Contact";
import JobDetail from "../JobDetail/JobDetail";
import Description from "../Description/Description";
import User from "../User/User";

function AcceptedDetailCard({ job }) {
  return (
    <>
      <Card className="m-3">
        <ListGroup style={{ textAlign: "left" }}>
          <ListGroup.Item>
            <User name={job.contact_name} timestamp={job.created_at} />
          </ListGroup.Item>
          <ListGroup.Item>
            <JobDetail
              id={job.id}
              price={job.price}
              location={job.suburbName}
              postcode={job.postcode}
              jobType={job.categoryName}
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <Contact telephone={job.contact_phone} email={job.contact_email} />
            <Description text={job.description} />
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
}

export default AcceptedDetailCard;
