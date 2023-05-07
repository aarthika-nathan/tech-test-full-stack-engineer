import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import DetailCard from "../components/DetailCard/DetailCard";
import PendingDetailCard from "../components/PendingDetailCard/PendingDetailCard";
import { getAcceptedJobs, getInvitedJobs, declineJob, acceptJob } from "../service/data.service";
import './ListViewPage.css';

function ListViewPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [acceptedJobs, setAcceptedJobs] = useState([]);
  const [invitedJobs, setInvitedJobs] = useState([]);

  useEffect(
    () => {
      async function fetchJobs() {
        let fetchAcceptedJobs = await getAcceptedJobs();
        let fetchInvitedJobs = await getInvitedJobs();
        setAcceptedJobs(fetchAcceptedJobs);
        setInvitedJobs(fetchInvitedJobs);
        setIsLoading(false);
      }
      isLoading && fetchJobs();
    },
    [isLoading]
  );

  function onAcceptHandler(id) {
    acceptJob(id);
    setIsLoading(true);
  }

  function onDeclineHandler(id) {
    declineJob(id);
    setIsLoading(true);
  }

  return (
    <>
      <Tabs defaultActiveKey="invited" className="mb-3" fill>
        <Tab eventKey="invited" title="Invited">
          {!isLoading &&
            invitedJobs.map((job) => <PendingDetailCard job={job} key={job.id} onAcceptHandler={onAcceptHandler} onDeclineHandler={onDeclineHandler} />)}
        </Tab>
        <Tab eventKey="accepted" title="Accepted">
          {!isLoading &&
            acceptedJobs.map((job) => <DetailCard job={job} key={job.id} />)}
        </Tab>
      </Tabs>
    </>
  );
}

export default ListViewPage;
