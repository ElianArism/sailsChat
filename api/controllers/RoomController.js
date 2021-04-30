// Paginacion . 
const _perPage = 10; 

module.exports = {

    list: async (req, res) => {
        const page = Math.abs(req.query.page - 1) || 0; 
        const perPage = req.query.perPage || _perPage; 
        
        const rooms = await 
        Room
        .find({ limit: perPage, skip: page }) 
        .populate('information')
        .populate('messages') 
        .populate('stickers');
        
        return res.json(rooms);
    },

    show: async (req, res) => {
       const {id} = req.params; 

       const room = await Room.findOne({ where: {id} });

       return res.json(room); 
    },

    store: async (req, res) => {
        const data = {
            name: req.body.name
        }; 

        const newRoom = await Room.create(data).fetch(); 
        
        return res.status(201).json(newRoom); 
    },

    update: async (req, res) => {
        const {id} = req.params; 

        const data = {
            name: req.body.name
        }; 

        const room = await Room.updateOne({ id }).set(data);

        return res.json(room); 
    },

    destroy: async (req, res) => {
        const {id} = req.params; 

        const room = await Room.destroyOne({id}); 

        return res.json(room); 
    }

};

