const JWT = require('jsonwebtoken');
const CONFIG = require('../configuration/config.json')

/**
 * Creates a token with an encoded payload
 * @param {object} payload 
 */
function create(payload) {
    return JWT.sign(payload, CONFIG.SECRET);
}

/**
 * Gets the payload encoded in the token
 * @param {string} token 
 */
function deserialize(token, callback) {
    return JWT.verify(token, CONFIG.SECRET, callback)
}

module.exports = { create, deserialize }