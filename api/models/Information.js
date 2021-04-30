module.exports = {

  attributes: {
    description: {
      type: 'string', 
      required: true, 
      allowNull: false 
    },
    image: {
      type: 'string', 
      defaultsTo: 'https://picsum.photos/300/300' 
    }, 
    topic: {
      type: 'string', 
      defaultsTo: 'random', 
      isIn: ['random', 'magic', 'games', 'code'] //solo pueden usarse estos valores como valor 
    },

    // relacion 
    owner: {
      model: 'room', 
      unique: true 
    } 
  },

};

