/**
 * Sticker.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string', 
      required: true
    },
    image: {
      type: 'string', 
      defaultsTo: 'https://picsum.photos/300/300', // default 
    },

    // relacion 
    // muchos a muchos 
    rooms: {
      collection: 'room', 
      via: 'stickers'
    }
  },

};

