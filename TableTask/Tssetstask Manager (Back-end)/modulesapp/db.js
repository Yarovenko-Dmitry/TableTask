const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURL')


module.exports = connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: false
    })
    console.log('MongoDB connected..')
  } catch (err) {
    console.error(err.message + `error` );
    process.exit(1)
  }
}
// mongodb+srv://test1:test123test@cluster0.erpqz.mongodb.net/<dbname>?retryWrites=true&w=majority