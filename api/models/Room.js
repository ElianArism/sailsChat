/**
 * Room.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    // Este seria un campo / atributo de una tabla / esquema 
    name: {
      type: 'string', 
      required: true, 
      allowNull: false, 
      unique: true
    },

    // Relacion 1 a 1 
    information: {
      collection: 'information', // information esta relacionado con un registro de la colection information
      via: 'owner' // via el campo owner
    },

    // Relacion 1 a muchos (muchos msg corresponden a una Room)
    // debe ir en plural 
    messages: {
      collection: 'message', 
      via: 'owner'
    }, 

    // Relacion muchos a muchos
    stickers: {
      // attr 
      collection: 'sticker', 
      via: 'rooms' 
    }

  },

};

