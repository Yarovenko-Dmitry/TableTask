const Job = require('../models/Job')
const {randomNumber, randomString} = require('../middleware');

const jobStatus = ['running', 'successed', 'failed'];

const getJob = async (req, res) => {
  try {
    Job.find({}, async function (err, jobList) {
      if (err) {
        return console.log(err)
      }
      if (!jobList.length) {
        return await res.status(201).json({jobList: []})
      }
      await res.status(201).json({jobList, success: true})
    })

  } catch (e) {
    res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
  }
}

const addJobAnyNumber = async (id, jobsCount = 1) => {
  const jobs = [];
  for (let i = 0; i < jobsCount; i++) {
    jobs.push(new Job({name: randomString(), processId: id, status: jobStatus[randomNumber(0, 2)]}));
  }
  try {
    return Job.insertMany(jobs);

  } catch (err) {
    throw new Error(err);
  }
}

const deleteJob = async (processId) => {
  try {
    await Job.deleteMany({processId});

  } catch (e) {
    throw new Error(e);
  }
}

module.exports = {getJob, deleteJob, addJobAnyNumber}
