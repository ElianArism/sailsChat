module.exports.routes = {
  // Rooms
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
  'GET /signup': 'ViewController.signup',
  'GET /login': 'ViewController.login',
  'GET /home': 'ViewController.home'

};
