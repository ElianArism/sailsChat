module.exports = {
    
    // list msg 
    list: async (req, res) => {
        const {roomId: id} = req.params; 

        // Obtener info 
        const room = await Room
            .findOne({id})
            .populate('messages'); 

        return res.json(room.messages);
    }, 

    // add msg
    store: async (req, res) => {
        const {roomId} = req.params; 
        
        const data = { 
            text: req.body.text,
            user_id: req.body.user_id,
            owner: roomId
        }

        const newMsg = await Message.create(data).fetch(); 
        
        // Broadcast a todos para avisar que algo cambio 
        sails.sockets.blast({ room: roomId}) 
        return res.status(201).json(newMsg); 
    }

};

