const JobService = require('../schemas/job.schema')
const {randomNumber, randomString} = require('../utils/utils');

const jobStatus = ['running', 'successed', 'failed'];

const getJob = async () => {
  try {
    return JobService.find({})
  } catch (err) {
    throw new Error(err);
  }
}

const addJobAnyNumber = async (id, jobsCount = 1) => {
  const jobs = [];
  for (let i = 0; i < jobsCount; i++) {
    jobs.push(new JobService({name: randomString(), processId: id, status: jobStatus[randomNumber(0, 2)]}));
  }
  try {
    return JobService.insertMany(jobs);
  } catch (err) {
    throw new Error(err);
  }
}

const deleteJob = async (processId) => {
  try {
    await JobService.deleteMany({processId});
  } catch (e) {
    throw new Error(e);
  }
}

module.exports = {getJob, deleteJob, addJobAnyNumber}
