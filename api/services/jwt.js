const jsonWebToken = require('jsonwebtoken'); 

module.exports = {
    
    // crear token
    'sign': (payload) => {
        return jsonWebToken.sign({ data: payload }, sails.config.secret, {expiresIn: 30}); //firmar token 
    },
    // verificar autenticidad
    'verify': (token, callback) => {
        jsonWebToken.verify(token, sails.config.secret, callback); 
    }
};