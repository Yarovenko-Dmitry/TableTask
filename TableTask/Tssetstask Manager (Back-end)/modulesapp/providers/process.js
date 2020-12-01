const Process = require('../models/Process');
const {randomNumber} = require('../middleware');
const {randomString} = require('../middleware');
const {addJobAnyNumber} = require('./job');
const {deleteJob} = require('./job');



const getProcess = async (req, res) => {
  try {
    Process.find({}, async function (err, processList) {
      if (err) return console.log(err)
      if (!processList.length) return await res.status(201).json({
        processList: []
      })
      await res.status(201).json({processList, success: true})
    })
  } catch (e) {
    res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
  }
}

const addProcess = async (s) => {
  try {
    const newProcess = {
      name: randomString(),
      startTime: randomNumber(20, 94),
      jobsCount: randomNumber(1, 10)
    }

    const process = await new Process({
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
    await Process.findByIdAndDelete(processId)
    return await deleteJob(processId)
  } catch (e) {
    throw new Error(e)
  }
}
//

module.exports = {getProcess, addProcess, deleteProcess}
