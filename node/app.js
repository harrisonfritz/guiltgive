const Koa = require('koa');
const app = new Koa();
const KoaRouter=require( 'koa-router');
const router = new KoaRouter();
app.use(async ctx => {
  ctx.body = 'Hello World';
});
// app.use(router.routes()).use(router.allowedMethods());
// app.use('/purchases', require('./microservices/purchases/purchases.router'));
router.get('/test', testfunction);

function testfunction(){
  this.body= "Test Successful";

}
app.listen(3000);