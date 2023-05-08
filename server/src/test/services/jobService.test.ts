const Jobs = require("../../models/jobs");
const { getJobs, updateJobAccepted, updateJobDeclined } = require("../../services/jobService");

jest.mock("../../models/jobs", () => ({
  findAllWithCategoryAndSuburb: jest.fn(),
  findAllWithCategoryAndSuburbByStatus: jest.fn(),
  updateJobStatus: jest.fn()
}));

describe("jobService - findAllWithCategoryAndSuburb test cases", function () {
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  it("jobService should call method with New argument to fetch", function () {
    const jobs = getJobs("new");
    expect(Jobs.findAllWithCategoryAndSuburbByStatus).toBeCalledWith("new");
  });

  it("jobService should call method with accepted argument to fetch", function () {
    const jobs = getJobs("accepted");
    expect(Jobs.findAllWithCategoryAndSuburbByStatus).toBeCalledWith("accepted");
  });

  it("jobService should call method with declined argument to fetch", function () {
    const jobs = getJobs("declined");
    expect(Jobs.findAllWithCategoryAndSuburbByStatus).toBeCalledWith("declined");
  });

  it("jobService should call method to fetch all jobs for any other input", function () {
    const jobs = getJobs();
    expect(Jobs.findAllWithCategoryAndSuburb).toBeCalled();
  });
});

describe("jobService - updateJobDeclined/updateJobAccepted test cases", function () {
  it("jobService should call the method with an ID and a value accepted", function () {
    const jobs = updateJobAccepted(1);
    expect(Jobs.updateJobStatus).toBeCalledWith(1, "accepted");
  });

  it("jobService should call the method with an ID and a value declined", function () {
    const jobs = updateJobDeclined(2);
    expect(Jobs.updateJobStatus).toBeCalledWith(2, "declined");
  });
});