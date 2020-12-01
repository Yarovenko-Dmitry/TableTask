const {getJob, deleteJob} = require('../services/job.service');
const {Router} = require('express');
const router = Router();

router.get('/', async (req, res) => {
  try {
    const jobs = await getJob()
    return await res.status(201).json({jobList: jobs})
  } catch (err) {
    console.log(err)
    res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'});
  }

})

// router.post('/job/', async (req, res) => {
//   await addJob(req, res)
// })

router.delete('/job/:id', async (req, res) => {
  await deleteJob(req, res)
})

module.exports = router