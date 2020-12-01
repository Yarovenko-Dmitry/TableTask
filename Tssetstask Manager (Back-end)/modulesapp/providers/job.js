// const {create} = require('../models/Job');
const Job = require('../models/Job')

const jobStatus = ['running', 'successed', 'failed'];

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

const getJob = async (req, res) => {
  try {
    Job.find({}, async function (err, jobList) {
      if (err) return console.log(err)
      if (!jobList.length) return await res.status(201).json({
        jobList: []
      })
      await res.status(201).json({jobList, success: true})
    })

  } catch (e) {
    res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
  }
}

// const addJobs = async (obj) => {
//   try {
//     // debugger
//     const {id, jobsCount} = obj;
//     // debugger
//     for (let i = 0; i < jobsCount; i++) {
//       await Job.create({name: newJob.name, processId: id, status: jobStatus[randomNumber(0, 2)]});
//       job.save().then((obj) => {
//         debugger
//         console.log('add obj ', obj)
//       }, (err) => {
//         console.log('err', err)
//       })
//     }
//
//   } catch (e) {
//   }
// }

// const createOneJob = (id) => {
//   return {
//     name: randomString(),
//     processId: id,
//     status: jobStatus[randomNumber(0, 2)]
//   }
// }

const __addJobAnyNumber = async (id, jobsCount = 1) => {
  // let addingJobsArray = [];    // debugger
  // for (let i = 0; i < jobsCount; i++) {
  //   addingJobsArray.concat(createOneJob())
  // }
  // console.log('addingJobsArray ', addingJobsArray)
// }
  for (let i = 0; i < jobsCount; i++) {
    try {

      // debugger
      // await Job.create(addJobAnyNumber);
      const job = await Job.create({name: randomString(), processId: id, status: jobStatus[randomNumber(0, 2)]});
      job.save().then((obj) => {
        // debugger
        console.log('add obj ', obj)
      }, (err) => {
        console.log('err', err)
      })

    } catch (e) {
    }
  }


}

const addJobAnyNumber = async (id, jobsCount = 1) => {

  const jobs = []
  for (let i = 0; i < jobsCount; i++) {
    jobs.push(new Job({name: randomString(), processId: id, status: jobStatus[randomNumber(0, 2)]}));
  }
  try {
    return Job.insertMany(jobs)

  } catch (err) {
    throw new Error(err)
  }


}
// // псевдо код
// const addJobAnyNumber
// (id, jobsCount = 1)
// {
//   let addingJobsArray = [];
//   for 0 to
//   jobsCount
//   {
//     addingJobsArray = addingJobsArray + createOneJob(id);
//   }
//   sendToServer(addingJobsArray)
// }

const deleteJob = async (processId) => {
  try {
    // let jobId = req.params.id
    await Job.deleteMany({processId});

    // Job.findByIdAndDelete(processId, async function (err) {
    // Job.findByIdAndDelete(processId, async function (err) {
    //   if (err) return console.log(err)
    //   await Job.find({}, async function (err, jobList) {
    //     if (err) return console.log(err)
    //     await res.status(201).json({jobList, success: true})
    //   })
    // })
  } catch (e) {
    throw new Error(e)
  }
}
//
// module.exports = {getJob, addJobs, deleteJob, addJobAnyNumber}
module.exports = {getJob, deleteJob, addJobAnyNumber}
