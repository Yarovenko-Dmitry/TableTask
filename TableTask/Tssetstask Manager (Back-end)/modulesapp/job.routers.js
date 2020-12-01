const {getJob, deleteJob} = require('./providers/job');
const {Router} = require('express');
const router = Router();

router.get('/', async (req, res) => {
  await getJob(req, res)
})

// router.post('/job/', async (req, res) => {
//   await addJob(req, res)
// })

router.delete('/job/:id', async (req, res) => {
  await deleteJob(req, res)
})

module.exports = router