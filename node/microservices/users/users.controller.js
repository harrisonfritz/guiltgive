
const usersService = require('./users.service');
const KoaBody = require('koa-body')

module.exports = {
    getUsers,
    addUser,
    deleteUser,
    authenticate
}
function authenticate(ctx, next) {
    console.log("Authenticate():", ctx.request.body);
       usersService.authenticate(ctx.request.body)
        // .then(user => user ? ctx.body=user : ctx.status=400 json({ message: 'Username or password is incorrect' }))
        // .catch(err => next(err));
}

async function getUsers(ctx, next){
  ctx.body = await usersService.getUsers()

}

async function addUser(ctx, next){
    console.log('shnoodle')
    ctx.body = await usersService.addUser(ctx.request.body)
}

async function deleteUser(ctx, next){
    ctx.body = await usersService.deleteUser();
}