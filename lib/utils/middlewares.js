const jwt = require('jsonwebtoken');

/**
 * Reads headers and checks if there is token
 * If token does not exist sends 401
 * If its invalid 403
 * And next if its valid
 */
function authenticateToken(req, res, next) {
    console.log(req.headers);
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if(err) return res.sendStatus(403)
        req.user = decoded
        next()
    })
}


module.exports = {
    authenticateToken,
}