const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const connectDB = require("./db");
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000
const ENV = process.env.NODE_ENV || 'Development';

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
})
cors({origin: 'http://localhost:3000'})
app.use('/processes', require('./process.routers'));
app.use('/jobs', require('./job.routers'));

// http://localhost:4000/process/

const start = async () => {
  try {
    await connectDB()
    app.listen(PORT, () => console.log(`server is listing on ${PORT} - ${ENV} environment`))
  } catch (e) {
    console.log('Server Error', e.message);
    process.exit(1)
  }
}


start()
module.exports.app= app

// http://localhost:4000/processes/process