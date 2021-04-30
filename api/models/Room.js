
module.exports = {

  attributes: {
    name: {
      type: 'string', 
      required: true, 
      allowNull: false, 
      unique: true
    },

    // Relacion 1 a 1 
    information: {
      collection: 'information', 
      via: 'owner'
    },

    // Relacion 1 a muchos (muchos msg corresponden a una Room)
    messages: {
      collection: 'message', 
      via: 'owner'
    }, 

    // Relacion muchos a muchos
    stickers: {
      collection: 'sticker', 
      via: 'rooms' 
    }

  },

};

