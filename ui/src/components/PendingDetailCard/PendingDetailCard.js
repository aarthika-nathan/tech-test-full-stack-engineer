import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import JobDetail from "../JobDetail/JobDetail";
import JobAction from "../JobAction/JobAction";
import Description from "../Description/Description";
import User from "../User/User";

function PendingDetailCard({ job, onAcceptHandler, onDeclineHandler }) {
  return (
    <>
      <Card className="m-3">
        <ListGroup style={{ textAlign: "left" }}>
          <ListGroup.Item>
            <User name={job.contact_name} timestamp={job.created_at}/>
          </ListGroup.Item>
          <ListGroup.Item>
            <JobDetail
              id={job.id}
              location={job.suburbName}
              postcode={job.postcode}
              jobType={job.categoryName}
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <Description text={job.description} />
          </ListGroup.Item>
          <ListGroup.Item>
            <JobAction
              price={job.price}
              onAccept={() => onAcceptHandler(job.id)}
              onDecline={() => onDeclineHandler(job.id)}
            />
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
}

export default PendingDetailCard;
