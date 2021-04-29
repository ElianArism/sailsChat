/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/


  // Estructura de rutas: 
  // <GET/PUT/POST/DELETE/PATCH/ALL (ALL ONLY IN SAILS)> <url> /:  <param>
  
  // 'ALL /': { view: 'pages/homepage' },
  
  'GET /rooms': 'RoomController.list',
  'GET /rooms/:id': 'RoomController.show',
  'POST /rooms': 'RoomController.store',
  'PUT /rooms/:id': 'RoomController.update',
  'DELETE /rooms/:id': 'RoomController.destroy',
  
  // information
  'POST /rooms/:roomId/informations': 'InformationController.store',
  
  // Msg 
  'GET /rooms/:roomId/messages': 'MessageController.list',
  'POST /rooms/:roomId/messages': 'MessageController.store',

  // Stickers 
  'GET /stickers': 'StickerController.list',
  'POST /stickers': 'StickerController.store',
  'POST /rooms/:roomId/stickers/:stickerId': 'StickerController.attach',

  // API Auth 
  
  'POST /auth/signup': 'AuthController.signup',
  'POST /auth/login': 'AuthController.login',
  'GET /auth/check': 'AuthController.check',

  // VIEWS 
  // forma corta
  'GET /signup': 'ViewController.signup',
  'GET /login': 'ViewController.login',
  'GET /home': 'ViewController.home'

  // a traves de rutas
  // 'GET /': {
  //   view: 'pages/index'
  // }

  // a traves de controlador
  // forma larga
  // 'GET /': {
  //   controller: 'ViewController',
  //   action: 'home'
  // }











  // 'GET /ejemplo': {
  //   // view: '', 
  //   fn: function(req, res) {
  //     return  res.json({ok: `Hola mundo desde la ruta`}); // utiliza la estructura de express 
  //   }, 
  //   // controller: '', 
  //   // action: ''
  // },

  // // Se pueden abreviar las rutas mandando directamente lo que deseamos, ej: mandar solo la funcion
  // 'POST /ej-abreviado': function(req, res) {
  //   let {name, body} = req.body; 

  //   return res.send(`Hola ${name}, desde ${body}`); 
  // },

  // 'PUT /ej-actualizar': function(req, res) {
  //   const {title} = req.body; 

  //   res.json({Mensage: `Titulo ${title} actualizado!`});
  // },

  // 'DELETE /ej-delete': {
  //   view: '', 
  //   controller: '', 
  //   action: '', 
  //   fn: (req, res) => res.send('Deleted')  
  // },

  // // Con controladores 
  // 'GET /ej-controller': {
  //   controller: 'Test', // se especcifica el controlador en el cual se encuentra la accion 
  //   action: 'test', // se especifica la accion 
  // },

  // // Abreviado
  // 'GET /ej-controller-abv': 'TestController.test', // se especifica controlador y accion de forma abreviada

  // // Con parametros de url 
  // 'GET /ej-controller-w-params/:id': 'TestController.testWithParams',

  // // Words 
  // 'GET /ej-controller-words': 'WordController.list', 

  // 'GET /ej-controller-words/:id': {
  //   controller: 'WordController', 
  //   action: 'show'
  // },

  // 'POST /ej-controller-words': 'WordController.store',

  // // ITEMS 

  // 'GET /ej-items': 'item/list',
  // 'GET /ej-items/:id': 'item/show',
  // 'POST /ej-items': 'item/store',
};
