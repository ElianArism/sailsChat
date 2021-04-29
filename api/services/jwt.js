// Un servicio son funciones que pueden ejecutarse en cualquier ambito (modelos, controladores etc); 

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