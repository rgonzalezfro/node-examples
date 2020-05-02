const JWT = require('./jwt');

function authenticate(req, res, next) {
    const autHeader = req.headers.authorization;
    if (autHeader) {
        const token = autHeader.split(' ')[1];
        JWT.deserialize(token, (error, payload) => {
            if (error) {
                res.status(401).json({ error: 'Invalid token' });
            } else {
                req.data = payload;
                next();
            }
        });
    } else {
        res.status(401).json({ error: 'No token recieved' });
    }
}

module.exports = { authenticate };