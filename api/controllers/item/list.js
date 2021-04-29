let globalItems = [
  {
      id: 1, 
      text: 'lapiz', 
      length: 5
  },
  {
      id: 1, 
      text: 'Borrador', 
      length: 8
  },
  {
      id: 1, 
      text: 'Lapicera', 
      length: 8
  },
]; 

module.exports = {

  friendlyName: 'List',


  description: 'List item.',

  // Entradas de la accion
  inputs: {},


  // Salidas de la accion 
  exits: {
    success: {} // En caso de exito.
  },

  // Logica 
  fn: async function (inputs, exits) {
   
    // Obtener elementos 
    const items = globalItems; 
    
    // retornar valores 
    return exits.success(items);
  
  }


};
