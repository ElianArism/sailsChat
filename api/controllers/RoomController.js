/**
 * RoomController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// Paginacion de sails. 
const _perPage = 10; 

module.exports = {
    
    // metodos / actions  

    list: async (req, res) => {
        const page = Math.abs(req.query.page - 1) || 0; 
        const perPage = req.query.perPage || _perPage; 
        
        const rooms = await 
        Room
        .find({ limit: perPage, skip: page }) // buscar registros en room 
        .populate('information') //traer info vinculada al documento
        .populate('messages') //traer msg vinculada al documento
        .populate('stickers'); //traer sticker vinculada al documento
        
        return res.json(rooms);
    },

    show: async (req, res) => {
       const {id} = req.params; 

       const room = await Room.findOne({ where: {id} }); // Buscar un registro que coincida 

       return res.json(room); 
    },

    store: async (req, res) => {
        const data = {
            name: req.body.name
        }; 

        const newRoom = await Room.create(data).fetch(); // crear un elemento en la bd y usar fetch para regresarlo cuando se cree
        
        return res.status(201).json(newRoom); 
    },

    update: async (req, res) => {
        const {id} = req.params; 

        // data for update 
        const data = {
            name: req.body.name
        }; 

        // update 
        const room = await Room.updateOne({ id }).set(data);

        return res.json(room); 
    },

    // delete totalmente. Para un soft delete se usa archive()
    destroy: async (req, res) => {
        const {id} = req.params; 

        const room = await Room.destroyOne({id}); // destroyOne tiene la variante destroy() que elimina elementos basado en una condicion 

        return res.json(room); 
    }

};

