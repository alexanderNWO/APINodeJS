const jwt = require('jsonwebtoken');

const AuthMiddleware = (req, res, next) => {
    let token = req.get('Authorization');
    jwt.verify(token, 'seed', (err, decoded) => {
        if(err) return res.status(401).json({error: err});
        req.user = decoded.user;
        next();
    });
}

module.exports = AuthMiddleware;