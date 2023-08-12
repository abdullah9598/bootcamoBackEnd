const logger = (req, res, next) => {
  req.hello = "Hello from the other side";
  console.log("logger has been logged");
  next();
};

module.exports = logger;
