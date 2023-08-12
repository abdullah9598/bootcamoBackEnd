const express = require("express");
const dotenv = require("dotenv");
const bootcamps = require("./routes/bootcamp");
const morgan = require("morgan");
const connectDB = require("./config/db");
const colors = require("colors");
// const logger = require("./middleware/logger");

//Load config file env variables
dotenv.config({ path: "./config/config.env" });
connectDB();

const app = express();

//dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/", bootcamps);

//bootcamps routes
app.use("/api/v1/bootcamps", bootcamps);
const PORT = process.env.PORT || 5000;

//starting the server
const server = app.listen(PORT, () =>
  console.log(`Listening at ${PORT} in ${process.env.NODE_ENV} mode`.green.bold)
);

//handling database connection
process.on("unhandledRejection", (err, promise) => {
  console.log(`exception : ${err}`);
  server.close(() => process.exit(1));
});

process.on("uncaughtException", (err, promise) => {
  console.log(err);
  server.close(() => process.exit(2));
});
