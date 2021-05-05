import { Component, OnInit } from '@angular/core';
import { Purchase } from '../models/purchase.model'
import { Charity} from '../models/charity.model'
import { FormComponent} from '../form/form.component'
import { PurchasesService } from '../services/purchases.service';
import { range } from 'rxjs';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {
  testVar;
  purchases: any = [];
  charityUnit="Human Lives";
  charity1: Charity = new Charity;
  totalLivesSaved: number;
  constructor(private purchasesService: PurchasesService ) { }
  ngOnInit(): void {
    this.getPurchases();
    this.getTotalLivesSaved();
    this.charity1.lifeSaved=2500;
  }

  async addPurchase( cost: number, item: string, necessity: number, month: string){
    let purchase = new Purchase
    purchase.item = item
    purchase.dollarCost = cost
    purchase.necessity = necessity
    purchase.month = month
    await this.purchasesService.addPurchase(purchase).subscribe(x => {
      console.log(x) 
    })
    this.getPurchases();
    console.log(purchase)
  }
 //make this communicate with backend 
  clearPurchases(){
    this.purchasesService.clearPurchases().subscribe( purchases => {
      console.log('purchases cleared')
    })
    this.getPurchases()
  }

  getTotalLivesSaved(){
    let totalSpend: number = 0;
    console.log(this.purchases)
    for (let i = 0; i < this.purchases.length; i++){
      totalSpend += Number(this.purchases[i].dollarCost)  
      console.log(totalSpend)
    }
      this.totalLivesSaved = totalSpend / 2500
      console.log(this.totalLivesSaved)
      console.log(totalSpend)
  }

  async getPurchases(){
   console.log(this.purchasesService.getPurchases());
   this.purchasesService.getPurchases().subscribe(purchases => {
     this.purchases = purchases
     console.log(this.purchases)
   })
   this.getTotalLivesSaved();
  }

}
