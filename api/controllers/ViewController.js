
module.exports = {
    
    // renderizar vista desde controlador
    home: (req, res) => {
        res.view('pages/home'); 
    }, 
    login: (req, res) => {
        res.view('pages/login'); 
    }, 
    signup: (req, res) => {
        res.view('pages/signup'); 
    }, 

};

