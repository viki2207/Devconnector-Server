const mongoose = require('mongoose');
const config = require('config');
//const db = 'mongodb://localhost:27017';

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://root:root@cluster0.f8bifn6.mongodb.net/DevConnector'
      // {
      //   useNewUrlParser: true,
      //   useCreateIndex: true,
      //   useFindAndModify: false,
      //   useUnifiedTopology: true
      // }
    );

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
//mongodb://localhost:27017
