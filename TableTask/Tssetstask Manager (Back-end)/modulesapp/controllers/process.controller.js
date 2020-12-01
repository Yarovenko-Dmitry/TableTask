const {getProcess, addProcess, deleteProcess} = require('../services/process.service');
const {Router} = require('express');
const router = Router();

router.get('/', async (req, res) => {
  try {
    const process = await getProcess();
    res.status(201).json({processList: process});
  } catch (err) {
    console.log(err)
    res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'});
  }

})


router.post('/process/', async (req, res) => {
  try {
    const result = await addProcess();
    res.status(201).json({result, success: true});
  } catch (err) {
    console.log(err)
    res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'});
  }

})

router.delete('/process/:id', async (req, res) => {
  try {
    let processId = req.params.id
    await deleteProcess(processId);
    res.status(201).json({success: true});
  } catch (err) {
    console.log(err)
    res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'});
  }
})


module.exports = router