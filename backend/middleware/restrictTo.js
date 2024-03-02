const restrictTo = (...roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
       res.send("You don't have permission to do that action ", 403)
        return 
      }
      next();
    };
  };


  module.exports = restrictTo