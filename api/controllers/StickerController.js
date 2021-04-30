
const _perPage = 10; 

module.exports = {
    list: async (req, res) => {
        const page = Math.abs(req.query.page - 1) || 0; 
        const perPage = req.query.perPage || _perPage; 
        
        const stickers = await Sticker
            .find({ limit: perPage, skip: page }) 
            .populate('rooms') 
        
        return res.json(stickers);
    },

    store: async (req, res) => {
        const data = {
            name: req.body.name,
            image: req.body.image
        }; 

        const newSticker = await Sticker.create(data).fetch(); 
        
        return res.status(201).json(newSticker); 
    },

    // vincular dos entidades
    attach: async (req, res) => {
        const {roomId, stickerId} = req.params; 
        
        await Room.addToCollection(roomId, 'stickers', stickerId); // relaciona mutuamente las dos entidades 

        return res.json({ msg: 'elemento vinculado'}); 
    } 
};

