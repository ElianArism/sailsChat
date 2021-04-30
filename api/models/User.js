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

  // before create se ejecuta antes de crear una entidad
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

