module.exports = {

  attributes: {
    name: {
      type: 'string', 
      required: true
    },
    image: {
      type: 'string', 
      defaultsTo: 'https://picsum.photos/300/300',
    },

    // Relacion muchos a muchos 
    rooms: {
      collection: 'room', 
      via: 'stickers'
    }
  },

};

