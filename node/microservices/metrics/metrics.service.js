module.exports = {
    getMetrics,
}

metrics = {
    "generosity":89,
   "averageNecessityByMonth":[1,2,3,4,5,6,7,8,9,10,11,12],
    "percentageIncomeDonated":25
}

function getMetrics(){
    return metrics; 
}

function incomePercentage(){
  return "$$" 
}

function averageNecessity(){
  return "%%"
}

function generosityRank(){
    return "$$"
}

//if you cut out your unnecessary purchases and instead donated that to charity
// you could have saved X lives.
// consider allowing users to choose what percentage of purchases at each level of 
// necessity could be cut out -- if you cut out all unnecessary purchases and 50% of
// somewhat necessary purchases here is the number of lives you could save.
function totalLives(){

}