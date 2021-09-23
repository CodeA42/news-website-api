const router = require("express").Router();
const passport = require('passport');

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.status(409).json(info?.message); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }     
      return res.status(200).json(user);
    });
  })(req, res, next);
});

module.exports = router;
