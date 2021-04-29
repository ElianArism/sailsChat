/**
 * Information.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    // campos here

    description: {
      type: 'string', 
      required: true, 
      allowNull: false 
    },
    image: {
      type: 'string', 
      defaultsTo: 'https://picsum.photos/300/300' // default 
    }, 
    topic: {
      type: 'string', 
      defaultsTo: 'random', 
      isIn: ['random', 'magic', 'games', 'code'] //solo pueden usarse estos valores como valor 
    },

    // relacion 
    owner: {
      // corresponde a la creacion de una foreign key para poder relacionar
      model: 'room', // relacionado con un registro room
      unique: true // el registro debe ser unico 
    } 
  },

};

