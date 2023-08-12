const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {});

  console.log(
    `Connected to MongoDB at host : `.yellow + conn.connection.host.blue
  );
};

module.exports = connectDB;
