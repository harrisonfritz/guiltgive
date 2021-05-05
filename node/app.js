const Koa = require('koa');
const app = new Koa();
const KoaRouter=require( 'koa-router');
const { metricRoutes, metricAllowedMethods } = require('./microservices/metrics/metrics.routes');
const router = new KoaRouter();
const purchasesController = require('./microservices/purchases/purchases.controller');
const usersController = require('./microservices/users/users.controller')
const { purchasesRoutes, purchasesAllowedMethods } = require('./microservices/purchases/purchases.router');
const { usersRoutes, usersAllowedMethods} = require('./microservices/users/users.router')
const KoaBody = require('koa-body')
const bodyparser = require('koa-bodyparser')
// const cors = require('koa-cors');
const cors = require('@koa/cors');
app.use(cors());
// app.use(KoaBody)
app.use(bodyparser())
const jwt = require('./_helpers/jwt')
const errorHandler = require('./_helpers/error-handler');

app.use(jwt());

app.use(purchasesRoutes())
app.use(usersRoutes())
app.use(metricRoutes())

app.use(purchasesAllowedMethods())
app.use(usersAllowedMethods())
app.use(metricAllowedMethods())


app.use(errorHandler);

// router.get('/test', ctx => {
//   ctx.body = "This is a test";
// })
// app.use(router.routes()).use(router.allowedMethods());
// app.use('/purchases', require('./microservices/purchases/purchases.router'));
// router.get('/test', testfunction);

// function testfunction(){
//   this.body= "Test Successful";

// }
app.listen(3030);