const jobsDb = require("../db/db");

const jobs = function (job) {
  this.id = job.id;
  this.status = job.status;
  this.suburb_id = job.suburb_id;
  this.category_id = job.category_id;
  this.contact_name = job.contact_name;
  this.contact_phone = job.contact_phone;
  this.contact_email = job.contact_email;
  this.price = job.price;
  this.description = job.description;
  this.created_at = job.created_at;
  this.updated_at = job.updated_at;
};

jobs.updateJobStatus = async (id: number, status: string) => {
  return new Promise((resolve, reject) => {
    jobsDb.query(
      `UPDATE jobs SET status=\"${status}\" WHERE id = ${id}`,
      (err: any, res: string | any[]) => {
        if (err) {
          console.log("error: ", err);
          return reject(err);
        }

        if (res) {
          return resolve(res);
        }
        return reject(new Error("not found"));
      }
    );
  });
};

jobs.findAllWithCategoryAndSuburb = async (status: string) => {
  return new Promise((resolve, reject) => {
    jobsDb.query(
      `SELECT jobs.id, jobs.price, jobs.contact_name, jobs.contact_phone, jobs.contact_email, jobs.description, 
      jobs.created_at, jobs.updated_at, suburbs.name as suburbName, suburbs.postcode, categories.name as categoryName
      FROM jobs INNER JOIN suburbs ON jobs.suburb_id = suburbs.id 
      INNER JOIN categories ON jobs.category_id = categories.id 
      WHERE jobs.status = \"${status}\"`,
      (err: any, res: string | any[]) => {
        if (err) {
          console.log("error: ", err);
          return reject(err);
        }

        if (res.length) {
          return resolve(res);
        }
        return resolve([]);
      }
    );
  });
};

module.exports = jobs;
