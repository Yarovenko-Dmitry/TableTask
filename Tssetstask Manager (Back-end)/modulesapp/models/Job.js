const {Schema, model} = require('mongoose');

const jobSchema = new Schema({
  name:{type: String},
  processId:{type: String},
  status:{type: String},
})

module.exports = model('Job', jobSchema)