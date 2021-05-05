const purchasesService = require('./purchases.service');
const KoaBody = require('koa-body')

module.exports = {
    getPurchases,
    addPurchase, 
    clearPurchases
};


async function getPurchases(ctx, next){
    console.log('purchase controller')
    ctx.body= await purchasesService.getPurchases()
}

async function addPurchase(ctx, next){
    console.log('this is working!')
    console.log(ctx.request.body)
    console.log(typeof ctx.request.body.dollarCost)
    ctx.body= await purchasesService.addPurchase(ctx.request.body) 
}

async function clearPurchases(ctx, next){
    console.log('clearing purchaes')
    ctx.body = await purchasesService.clearPurchases()
}