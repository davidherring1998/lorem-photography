const mongoose = require("mongoose");

const databaseConn = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to MongoDB ${conn.connection.host}`.cyan.underline);
  } catch (err) {
    console.log(`Connection failed. ${err}`.underline);
    process.exit(1);
  }
};
module.exports = databaseConn;
