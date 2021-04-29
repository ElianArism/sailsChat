/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const bcrypt = require('bcrypt');

module.exports = {

  attributes: {
    nickname: {
      type: 'string',
      required: true, 
      allowNull: false, 
      unique: true
    },
    email: {
      type: 'string',
      required: true, 
      allowNull: false, 
      unique: true
    },
    password: {
      type: 'string',
      required: true, 
      allowNull: false, 
    },

  },

  // ocultar info del modelo 
  customToJSON: function() {
    return _.omit(this, ['password']); 
  },

  // before create se ejecuta antes de crear una entidad, es lo que llaman hooks en sails
  beforeCreate: function(user, cb) {
    // para encriptar el valor al momento de recibirlo 
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(user.password, salt, function(err, hash) {
        if(err) {
          console.log(err);
          cb(err);
        } else {
          user.password = hash; 
          cb();
        }
      
      });
    });
  }
};

