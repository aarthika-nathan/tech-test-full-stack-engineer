const db = require("../../db/db");
const Jobs = require("../../models/jobs");

jest.mock("../../db/db", () => ({
  query: jest.fn()
}));

describe("Jobs Model test cases", function () {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("job should call method to update job status as accepted", function () {
    const jobs = Jobs.updateJobStatus(1, "accepted");
    expect(db.query).toBeCalledWith("UPDATE jobs SET status=\"accepted\" WHERE id = 1", expect.anything());
  });

  it("job should call method to find all jobs", function () {
    const jobs = Jobs.findAllWithCategoryAndSuburb();
    const query = "SELECT jobs.id, jobs.price, jobs.contact_name, jobs.contact_phone, jobs.contact_email," + 
    " jobs.description, jobs.created_at, jobs.updated_at, suburbs.name as suburbName, suburbs.postcode," + 
    " categories.name as categoryName FROM jobs INNER JOIN suburbs ON jobs.suburb_id = suburbs.id INNER JOIN" + 
    " categories ON jobs.category_id = categories.id";
    expect(db.query).toBeCalledWith(expect.stringContaining(query), expect.anything());
  });

  it("job should call method to find all jobs based on status", function () {
    const jobs = Jobs.findAllWithCategoryAndSuburbByStatus("status");
    
    const query = "SELECT jobs.id, jobs.price, jobs.contact_name, jobs.contact_phone, jobs.contact_email, jobs.description," + 
    " jobs.created_at, jobs.updated_at, suburbs.name as suburbName, suburbs.postcode, categories.name as categoryName" + 
    " FROM jobs INNER JOIN suburbs ON jobs.suburb_id = suburbs.id INNER JOIN categories ON jobs.category_id = categories.id" +
    "WHERE jobs.status = \"status\"";

    expect(db.query).toBeCalledWith(expect.stringContaining(query), expect.anything());
  });
});
