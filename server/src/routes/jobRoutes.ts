const router = require("express").Router();
const jobsService = require("../services/jobService");

router.get("/", async (req, res) => {
  try {
    if (req.query.status) {
      const jobs = await jobsService.getJobs(req.query.status);
      res.send(JSON.stringify(jobs, null, 2));
    } else {
      const job = await jobsService.getJob(1);
      res.send(JSON.stringify(JSON.parse(job), null, 2));
    }
  } catch (e) {
    console.log(e);
    res.status(500).send({ error: "error occurred while fetching jobs" });
  }
});

router.post("/:id/accept", async (req, res) => {
  try {
    const job = await jobsService.updateJobAccepted(req.params.id);
    res.send(JSON.stringify(job, null, 2));
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .send({ error: "error occurred while updating accepted status for job" });
  }
});

router.post("/:id/decline", async (req, res) => {
  try {
    const job = await jobsService.updateJobDeclined(req.params.id);
    res.send(JSON.stringify(job, null, 2));
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .send({ error: "error occurred while updating declined status for job" });
  }
});

module.exports = router;
