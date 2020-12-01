const ProcessService = require('../schemas/process.schema');
const {randomNumber} = require('../utils/utils');
const {randomString} = require('../utils/utils');
const {addJobAnyNumber} = require('./job.service');
const {deleteJob} = require('./job.service');



const getProcess = async () => {
  try {
    return await ProcessService.find({})
  } catch (e) {
   throw new Error(e)
  }
}

const addProcess = async () => {
  try {
    const newProcess = {
      name: randomString(),
      startTime: randomNumber(20, 94),
      jobsCount: randomNumber(1, 10)
    }

    const process = await new ProcessService({
      name: newProcess.name,
      startTime: newProcess.startTime,
      jobsCount: newProcess.jobsCount
    }).save();
    const jobs = await addJobAnyNumber(process._id, process.jobsCount);
    return {process, jobs}
  } catch (e) {
    throw new Error(e)
  }
}

const deleteProcess = async (processId) => {
  try {
    await ProcessService.findByIdAndDelete(processId)
    return await deleteJob(processId)
  } catch (e) {
    throw new Error(e)
  }
}
//

module.exports = {getProcess, addProcess, deleteProcess}
