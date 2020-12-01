const {Schema, model} = require('mongoose');

const processSchema = new Schema({
  name:{type: String},
  startTime:{type: Number},
  jobsCount:{type: Number},
})

module.exports = model('Process', processSchema)