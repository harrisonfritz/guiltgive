const purchasesService = require('./purchases.service');

module.exports{
    getPurchases
};


function getPurchases(req, res, next){
    purchasesService.getPurchases()
    .then( (purchases) => res.json(purchases))
    .catch(err => next(err));
}