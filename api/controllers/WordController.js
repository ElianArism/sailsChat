/**
 * WordController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let globalWords = [
    {
        id: 1, 
        text: 'hola', 
        length: 4
    },
    {
        id: 2, 
        text: 'pez', 
        length: 3
    },
    {
        id: 3, 
        text: 'bueno', 
        length: 5
    },
    {
        id: 4, 
        text: 'malo', 
        length: 4
    }
]; 

module.exports = {
  list: (req, res) => {
    //   Obtener elementos, 
    const words = globalWords; // orm 

    //  Retornar elementos 
    return res.status(200).json({words});
  }, 

  show: (req, res) => {
    const {id} = req.params;

    // Obtener elemento
    const word = globalWords.filter(word => word.id === Number(id)); 

    if(word.length > 0) {
        // Retornar 
        res.json({ok: true, word}); 
    } else {
        // not found 
        res.status(404).json({ok: false, msg: 'Not Found! :('});
    }
  },

  store: (req, res) => {
    const { text } = req.body; 
   
    if(!text) return res.status(400).json({ ok: false, msg: 'Bad Request '}); 

    const word  = {
        id: Math.random() * 1000, 
        text, 
        length: text.length
    }

    // Insertar 
    globalWords = [...globalWords, word]; 

    // Retornar obj
    return res.status(201).json({
        ok: true, 
        word
    });
}
};

