process.env.NODE_ENV = 'test';
process.env["NODE_CONFIG_DIR"] = __dirname + "/config";

const expect = require('chai').expect;
const request = require('supertest');
const server = require('./server').app
const mongoose = require('mongoose')
const config = require('config');
const db = config.get('mongoURL')

const app = request.agent(server)

before(function (done) {
  mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, function () {
    mongoose.connection.db.dropDatabase(function () {
        done()
    })
  })
})
describe('All Test', function () {
  describe('Add one process', function () {
    it('Success should return true', function () {
      let info = {
        name: 'test1',
        startTime: 2,
        jobsCount: 2
      }
      app
        .post('/processes/process')
        .send({info})
        .end((err, res) => {
          expect(res.body.success).to.equal(true)
        })
    })
  })
})