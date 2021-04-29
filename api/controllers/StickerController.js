/**
 * StickerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const _perPage = 10; 

module.exports = {
    list: async (req, res) => {
        const page = Math.abs(req.query.page - 1) || 0; 
        const perPage = req.query.perPage || _perPage; 
        
        const stickers = await Sticker
            .find({ limit: perPage, skip: page }) // buscar stickers 
            .populate('rooms') // populate de relacion  
        
        return res.json(stickers);
    },

    store: async (req, res) => {
        const data = {
            name: req.body.name,
            image: req.body.image
        }; 

        const newSticker = await Sticker.create(data).fetch(); // crear un elemento en la bd y usar fetch para regresarlo cuando se cree
        
        return res.status(201).json(newSticker); 
    },

    // vincular dos entidades
    attach: async (req, res) => {
        const {roomId, stickerId} = req.params; 
        
        // vincular dos entidades (se puede con room o sticker)
        // Se lee vincula el registro correspondiente a stickerId, en el campo stickers del registro correspondiente al roomId 
        await Room.addToCollection(roomId, 'stickers', stickerId); // relaciona mutuamente las dos entidades 

        return res.json({ msg: 'elemento vinculado'}); 
    } 
};

