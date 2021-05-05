import { Injectable } from '@angular/core';
import { PurchasesService } from './purchases.service'

@Injectable({
  providedIn: 'root'
})
export class MetricsService {

  constructor(private purchasesService: PurchasesService) { }
  // purchases: any = [];
// async getPurchaseData(){
//    await this.purchasesService.getPurchases().subscribe(data => {
//      this.purchases = data
//      console.log(data)
//     })
//   }




// getSpendByNecessity(){

//   let necessityMap = {low: 0 , medium: 0, high: 0}
//  this.purchasesService.getPurchases().subscribe(data => {
//    let purchases = data
//     for (let item in purchases){
//       if (Number(purchases[item].necessity ) < 3){
//         necessityMap.low += (purchases[item].dollarCost)
//       }
//       else if (Number(purchases[item].necessity) > 3 && Number(purchases[item].necessity) < 7){
//         necessityMap.medium += (purchases[item].dollarCost)
//       }
//       else if (Number(purchases[item].necessity) > 7){
//         necessityMap.high += (purchases[item].dollarCost)
//       }
//     }
//   })
//   console.log(necessityMap)
//     return necessityMap

// }
async getSpendByNecessity(){

  let necessityMap = {low: 0, medium: 0, high: 0}
  await this.purchasesService.getPurchases().subscribe(data => {
   let purchases = data
    for (let item in purchases){
      if (Number(purchases[item].necessity ) < 3){
        necessityMap.low +=  Number(purchases[item].dollarCost)
      }
      else if (Number(purchases[item].necessity) > 3 && Number(purchases[item].necessity) < 7){
        necessityMap.medium += Number(purchases[item].dollarCost)
      }
      else if (Number(purchases[item].necessity) > 7){
        necessityMap.high += Number(purchases[item].dollarCost)
      }
    }
  })
  console.log(necessityMap)
    return necessityMap

}
// async getSpendByNecessity(){
//   let necessityMap = {low: [], medium: [], high: []}
//   await this.purchasesService.getPurchases().subscribe(data => {
//     let purchases = data
//     for (let item in purchases){
//       if (Number(purchases[item].necessity ) < 3){
//         necessityMap.low.push(purchases[item].dollarCost)
//       }
//       else if (Number(purchases[item].necessity) > 3 && Number(purchases[item].necessity) < 7){
//         necessityMap.medium.push(purchases[item].dollarCost)
//       }
//       else if (Number(purchases[item].necessity) > 7){
//         necessityMap.high.push(purchases[item].dollarCost)
//       }
//     }
//   })
//     return necessityMap

// }
// getspendbynecessity(spenddata){
//   let data = []
//   let highdata = []
//   for (let i = 0; i < this.purchases.length; i++){
//     if (this.purchases[i].necessity = 1){ 

//       if (this.purchases[i].month == "january") {
//         data[0] += this.purchases[i].dollarcost
//       }
//       if (this.purchases[i].month == "february") {
//         data[1] += this.purchases[i].dollarcost
//       }
//       if (this.purchases[i].month == "march") {
//         data[2] += this.purchases[i].dollarcost
//       }
//       if (this.purchases[i].month == "april") {
//         data[3] += this.purchases[i].dollarcost
//       }
//       if (this.purchases[i].month == "may") {
//         data[4] += this.purchases[i].dollarcost
//       }
//       if (this.purchases[i].month == "june") {
//         data[5] += this.purchases[i].dollarcost
//       }
//       if (this.purchases[i].month == "July") {
//         data[6] += this.purchases[i].dollarCost
//       }
//       if (this.purchases[i].month == "August") {
//         data[7] += this.purchases[i].dollarCost
//       }
//       if (this.purchases[i].month == "September") {
//         data[8] += this.purchases[i].dollarCost
//       }
//       if (this.purchases[i].month == "October") {
//         data[9] += this.purchases[i].dollarCost
//       }
//       if (this.purchases[i].month == "November") {
//         data[10] += this.purchases[i].dollarCost
//       }
//       if (this.purchases[i].month == "December") {
//         data[11] += this.purchases[i].dollarCost
//       }
//     } 

//     if (this.purchases[i].necessity = 2)  {

//       if (this.purchases[i].month == "January") {
//         highdata[0] += this.purchases[i].dollarCost
//       }
//       if (this.purchases[i].month == "February") {
//         highdata[1] += this.purchases[i].dollarCost
//       }
//       if (this.purchases[i].month == "March") {
//         highdata[2] += this.purchases[i].dollarCost
//       }
//       if (this.purchases[i].month == "April") {
//         highdata[3] += this.purchases[i].dollarCost
//       }
//       if (this.purchases[i].month == "May") {
//         highdata[4] += this.purchases[i].dollarCost
//       }
//       if (this.purchases[i].month == "June") {
//         highdata[5] += this.purchases[i].dollarCost
//       }
//       if (this.purchases[i].month == "July") {
//         highdata[6] += this.purchases[i].dollarCost
//       }
//       if (this.purchases[i].month == "August") {
//         highdata[7] += this.purchases[i].dollarCost
//       }
//       if (this.purchases[i].month == "September") {
//         highdata[8] += this.purchases[i].dollarCost
//       }
//       if (this.purchases[i].month == "October") {
//        highdata[9] += this.purchases[i].dollarCost
//       }
//       if (this.purchases[i].month == "November") {
//         highdata[10] += this.purchases[i].dollarCost
//       }
//       if (this.purchases[i].month == "December") {
//         highdata[11] += this.purchases[i].dollarCost
//       }
//     } 
//     return [data, highdata]
//     console.log(this.purchases[i].dollarCost)
//   }
// }



}