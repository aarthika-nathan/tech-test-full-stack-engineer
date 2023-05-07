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
      return getJobsByStatus(JobStatus.ACCEPTED);;
    case JobStatus.DECLINED:
      return getJobsByStatus(JobStatus.DECLINED);;
    default:
      throw new Error("invlaid type");
  }
};


const getJobsByStatus = (status) => {
    console.log(`fetching jobs based on status ${status}`);
    const jobList = jobs.findAllWithCategoryAndSuburb(status);
    return jobList;
}

const updateJobAccepted = (id) => {
    const jobList = jobs.updateJobStatus(id, JobStatus.ACCEPTED);
    return jobList;
}

const updateJobDeclined = (id) => {
    const jobList = jobs.updateJobStatus(id, JobStatus.DECLINED);
    return jobList;
}

module.exports = {
  updateJobAccepted,
  updateJobDeclined,
  getJobs
}