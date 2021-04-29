/**
 * TestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    // en Sails los controladores tienen metodos llamados actions (acciones)

    test: (req, res) => {
        return res.json({ok: 'Respuesta desde controller'});
    },

    testWithParams: (req, res) => {
        const {id} = req.params.id;
        return res.json({ok: `Id de usuario: ${id}` })
    }
};

