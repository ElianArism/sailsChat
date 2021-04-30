
module.exports = {

    // add info
    store: async (req, res) => {
        const {roomId} = req.params; 

        const data = {
            description: req.body.description,
            image: req.body.image || 'https://picsum.photos/300/300',
            topic: req.body.topic, 

            // Foreign Key 
            owner: roomId
        };

        const information = await Information.create(data).fetch(); 

        return res.status(201).json(information);
    }

};

