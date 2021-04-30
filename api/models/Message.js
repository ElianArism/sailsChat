module.exports = {
  attributes: {
    text: {
      type: "string",
      allowNull: false,
      required: true,
    },
    user_id: {
      type: 'string',
      defaultsTo: '0'
    }, 
    
    // Relacion 1 a muchos
    owner: {
      model: "room", 
    },
  },
};
