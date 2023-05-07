
// const sinon = require('sinon');
// const Jobs = require('../../models/jobs');
// const {getJobs} = require('../../services/jobService');

// jest.mock('../../models/jobs', () => ({
//     findAllWithCategoryAndSuburb: jest.fn()
//   }));

// describe('jobService test cases', function () {
//     it('jobService should call method with New argument to fetch', function () {
//         const jobs = getJobs('new');
//         expect(Jobs.findAllWithCategoryAndSuburb).toBeCalledWith('new');
//     });

//     it('jobService should call method with accepted argument to fetch', function () {
//         const jobs = getJobs('accepted');
//         expect(Jobs.findAllWithCategoryAndSuburb).toBeCalledWith('accepted');
//     });

//     it('jobService should call method with declined argument to fetch', function () {
//         const jobs = getJobs('declined');
//         expect(Jobs.findAllWithCategoryAndSuburb).toBeCalledWith('declined');
//     });

//     it('jobService should call method with invalid argument to fetch', function () {
//         expect(() => getJobs('unknown')).toThrow(new Error("invlaid type"));
//     });
// });
