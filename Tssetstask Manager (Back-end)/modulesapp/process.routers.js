const {getProcess, addProcess, deleteProcess} = require('./providers/process');
const {Router} = require('express');
const router = Router();

router.get('/', async (req, res) => {
  await getProcess(req, res)
})

router.post('/process/', async (req, res) => {
  const result = await addProcess()
  res.status(201).json({result, success: true})
})

router.delete('/process/:id', async (req, res) => {
  try {
    let processId = req.params.id
    await deleteProcess(processId)
    res.status(201).json({success: true})
  } catch (err){
    res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
  }

})

module.exports = router