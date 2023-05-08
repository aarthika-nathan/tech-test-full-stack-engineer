const jobsDb = require("../db/db");

const updateJobStatus = async (id, status) => {
  return new Promise((resolve, reject) => {
    jobsDb.query(
      `UPDATE jobs SET status=\"${status}\" WHERE id = ${id}`,
      (err, res) => {
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

const findAllWithCategoryAndSuburbByStatus = async (status) => {
  const query =
    "SELECT jobs.id, jobs.price, jobs.contact_name, jobs.contact_phone, jobs.contact_email, jobs.description," + 
    " jobs.created_at, jobs.updated_at, suburbs.name as suburbName, suburbs.postcode, categories.name as categoryName" + 
    " FROM jobs INNER JOIN suburbs ON jobs.suburb_id = suburbs.id INNER JOIN categories ON jobs.category_id = categories.id" +
    " WHERE jobs.status = ";
  return new Promise((resolve, reject) => {
    jobsDb.query(query + `\"${status}\"`,
      (err, res) => {
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

const findAllWithCategoryAndSuburb = async () => {
  const query =
    "SELECT jobs.id, jobs.price, jobs.contact_name, jobs.contact_phone, jobs.contact_email, jobs.description," + 
    " jobs.created_at, jobs.updated_at, suburbs.name as suburbName, suburbs.postcode, categories.name as categoryName" + 
    " FROM jobs INNER JOIN suburbs ON jobs.suburb_id = suburbs.id INNER JOIN categories ON jobs.category_id = categories.id";
  return new Promise((resolve, reject) => {
    jobsDb.query(query,
      (err, res) => {
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

module.exports = {
  updateJobStatus,
  findAllWithCategoryAndSuburb,
  findAllWithCategoryAndSuburbByStatus,
};
