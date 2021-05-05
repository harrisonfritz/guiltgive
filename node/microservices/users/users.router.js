
const Koa = require('koa');
const KoaRouter = require("Koa-router");
const router = new KoaRouter();
const usersController = require('./users.controller');

router.post('/users', usersController.addUser)
router.post('/users/authenticate', usersController.authenticate)
router.get('/users', usersController.getUsers)
router.delete('/users', usersController.deleteUser)


module.exports = {
    usersRoutes () { return router.routes()   },
    usersAllowedMethods () { return router.allowedMethods()}
}