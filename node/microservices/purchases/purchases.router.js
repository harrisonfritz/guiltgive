// import purchasesController from './purchases.controller';
// import purchasesController;
const Koa = require('koa');
const KoaRouter = require("Koa-router");
const router = new KoaRouter();
const purchasesController = require('./purchases.controller');
// const router = new KoaRouter();

// app.use(router.allowedMethods());
// app.use(router.routes());
router.post('/purchases', purchasesController.addPurchase)
router.get('/purchases', purchasesController.getPurchases)
router.delete('/purchases', purchasesController.clearPurchases)
console.log('purchases')



module.exports = {
    purchasesRoutes () { return router.routes()   },
    purchasesAllowedMethods () { return router.allowedMethods()}
}