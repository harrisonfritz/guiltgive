// import purchasesController from './purchases.controller';
// import purchasesController;
const Koa = require('koa');
const router = require(Koa.router);
const purchasesController = require('./purchases.controller');

router.get('/getpurchases', purchasesController.getPurchases);