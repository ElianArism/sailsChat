
module.exports = {

    test: (req, res) => {
        return res.json({ok: 'Respuesta desde controller'});
    },

    testWithParams: (req, res) => {
        const {id} = req.params.id;
        return res.json({ok: `Id de usuario: ${id}` })
    }
};

