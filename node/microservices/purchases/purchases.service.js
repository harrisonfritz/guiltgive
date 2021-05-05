const db = require('../database/database');  
const config = require('../../config.json');
const { updateShorthandPropertyAssignment } = require('typescript');
const Purchase = db.Purchase;
module.exports={
    getPurchases,
    addPurchase,
    clearPurchases
}
let purchases = []
async function getPurchases(){
  
  console.log('shnoodie-di')
  let result =  await Purchase.find()
  console.log(result)
  return result
  // console.log('node get purchases')
  //   return  purchases;
}

async function addPurchase(newpurchase, username){

  let purchase = newpurchase
  newpurchase.createdBy = updateShorthandPropertyAssignment
  dbrecord = new Purchase(purchase)
  await dbrecord.save()
  // let purchase = {
  //   item: newpurchase.item,
  //   dollarCost: newpurchase.dollarCost,
  //   necessity: newpurchase.necessity,
  //   month: newpurchase.month
  // }
  // await purchases.push(purchase)
  // console.log(purchases)
  // await this.getPurchases();
}

async function clearPurchases(){
  purchases = []
}