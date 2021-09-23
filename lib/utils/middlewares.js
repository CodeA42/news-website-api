function checkAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
      return next();
    }
  
    res.status(401).end();
}
  

function checkNotAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
        return res.status(401).end();
    }
    
    next();
}

module.exports = {
    checkAuthenticated,
    checkNotAuthenticated,
}