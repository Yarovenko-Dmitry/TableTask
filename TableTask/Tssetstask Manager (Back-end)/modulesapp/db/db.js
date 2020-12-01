const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL || "mongodb+srv://test1:test123test@cluster0.erpqz.mongodb.net/TasksManagerDB?retryWrites=true&w=majority"

module.exports = connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
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