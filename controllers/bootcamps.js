//@desc     get all the bootcamps
//@route    GET '/api/v1/bootcamps'
//@access   public

exports.getBootcamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "get all the bootcamps",
    hello: req.hello,
  });
};

//@desc     create the bootcamps
//@route    POST '/api/v1/bootcamps'
//@access   private

exports.createBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "Create new bootcamp",
  });
};

//@desc     get bootcamp by ID
//@route    GET '/api/v1/bootcamps/:id'
//@access   public

exports.getBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "Get bootcamp of id " + req.params.id,
  });
};

//@desc     delete the bootcamps
//@route    DELETE '/api/v1/bootcamps/:id'
//@access   private

exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "delete the bootcamp by " + req.params.id,
  });
};

//@desc     update the bootcamps
//@route    PUT '/api/v1/bootcamps/:id'
//@access   private

exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "Update the bootcamp by " + req.params.id,
  });
};
