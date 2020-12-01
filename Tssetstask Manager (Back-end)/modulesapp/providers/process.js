
const Process = require('../models/Process')
const {addJobAnyNumber} = require('./job');
const {deleteJob}=require('./job')
// const {addJobs} = require('./job');

const randomString = () => {
  let text = '';
  const possibleSymbol = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 8; i++)
    text += possibleSymbol.charAt(Math.floor(Math.random() * possibleSymbol.length));
  return text;
}

const randomNumber = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

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
    // debugger
    const newProcess = {
      // id: v1(),
      name: randomString(),
      startTime: randomNumber(20, 94),
      jobsCount: randomNumber(1, 10)
    }

    const process = await new Process({
      name: newProcess.name,
      startTime: newProcess.startTime,
      jobsCount: newProcess.jobsCount
    }).save();
    const jobs = await addJobAnyNumber(process._id, process.jobsCount)
    return {process, jobs}
    // process.save().then(async (obj) => {
    //   // addJobs(obj);
    //   console.log('obj', obj)
    //   await addJobAnyNumber(obj.id, obj.jobsCount)
    //   res.status(201).json({obj, success: true})
    // }, (err) => {
    //   console.log('err', err)
    // })

  } catch (e) {
    throw new Error(e)
    // res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
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

module.exports = {getProcess, addProcess, deleteProcess}
