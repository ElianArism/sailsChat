/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const bcrypt = require('bcrypt');

module.exports = {
  login: async (req, res) => {
    
    const user = await User.findOne({where: {email: req.body.email}}); 
    if(user) {
        bcrypt.compare(req.body.password, user.password,function(err, result) {
            if(result) return res.json(
                {
                    user, 
                    token: jwt.sign(user) // se usa el servicio que se creo para firmar un nuevo token si el usuario es logueado correctamente 
                }
            )
            if(err) return console.log(err);
        })
    } else {
        return res.status(401).json({err: 'Invalid Pass'});
    }
  },

  check: async (req, res) => {
    return req.user;
  },

  signup: async (req, res) => {
    const {nickname, email, password} = req.body;

    const newUser = {nickname, email, password}; 

    await User.create(newUser); 

    return res.status(201).json({message: 'User registrado'})
}

};

