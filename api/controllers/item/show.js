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


  friendlyName: 'Show',


  description: 'Show item.',

  // Inputs de la accion
  inputs: {
    id: {
      type: 'number', 
      required: true
    }
  },


  // Outputs de la accion
  exits: {
    success: {}, // por def success da una salida con formato json 
    error: {
      responseType: 'notFound' // tipo de error
    }
  },

  // Logica de la accion
  fn: async function (inputs, exits) {
    const {id} = inputs; // en caso de que llegue por url un parametro invalido al declarado en inputs (ej: un string 'asd' ) lanzara una excepcion controlada

    // Obtener elemento
    const item = globalItems.filter(item => item.id === Number(id)); 

    if(item.length > 0) {
      // Retornar 
      return exits.success(item); 
    } else {
      // not found 
      return exits.error();  // retorna string Not Found
    }
  }


};
