let globalItems = [
  {
      id: 1, 
      text: 'lapiz', 
      length: 5
  },
  {
      id: 2, 
      text: 'Borrador', 
      length: 8
  },
  {
      id: 3, 
      text: 'Lapicera', 
      length: 8
  },
]; 

module.exports = {


  friendlyName: 'Store',


  description: 'Store item.',


  inputs: {
    text: {
      type: 'string', 
      require: true, 
    }
  },


  exits: {
    success: {}, 
    error: {
      requestType: 'notFound'
    }
  },


  fn: async function (inputs, exits) {
    const { text } = inputs; 
   
    if(!text) return exits.error(); 

    const newItem  = {
        id: Math.random() * 1000, 
        text, 
        length: text.length
    }

    // Insertar 
    globalItems = [...globalItems, newItem]; 

    // Retornar obj
    return exits.success({
        ok: true, 
        globalItems
    });

  }


};
