const jobs = require("../models/jobs");

const JobStatus = {
  NEW: "new",
  ACCEPTED: "accepted",
  DECLINED: "declined",
};

const getJobs = (type) => {
  switch (type) {
    case JobStatus.NEW:
      return getJobsByStatus(JobStatus.NEW);
    case JobStatus.ACCEPTED:
      return getJobsByStatus(JobStatus.ACCEPTED);
    case JobStatus.DECLINED:
      return getJobsByStatus(JobStatus.DECLINED);
    default:
      return getAllJobs();
  }
};

const getAllJobs = async () => {
  console.log(`fetching all jobs`);
  const jobList = await jobs.findAllWithCategoryAndSuburb();
  return jobList;
};

const getJobsByStatus = async (status) => {
  console.log(`fetching jobs based on status ${status}`);
  let jobList = await jobs.findAllWithCategoryAndSuburbByStatus(status);
  return jobList;
};

const updateJobAccepted = async (id) => {
  console.log(`updating job ${id} as accepted`);
  const acceptedJob = await jobs.updateJobStatus(id, JobStatus.ACCEPTED);
  return acceptedJob;
};

const updateJobDeclined = async (id) => {
  console.log(`updating job ${id} as declined`);
  const jobList =  await jobs.updateJobStatus(id, JobStatus.DECLINED);
  return jobList;
};

module.exports = {
  updateJobAccepted,
  updateJobDeclined,
  getJobs,
};
