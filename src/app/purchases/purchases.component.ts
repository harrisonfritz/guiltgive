import { Component, OnInit } from '@angular/core';
import { Purchase } from '../models/purchase.model'
import { Charity} from '../models/charity.model'

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {
  charity1: Charity;
  purchase1: Purchase;
  purchase2: Purchase;
  purchases: Purchase[] = [];
  charityUnit="Bednets"
  constructor() { }
  // charityUnit="bednets";
  ngOnInit(): void {
    this.purchase1 = new Purchase;
    this.purchase1.dollarCost=350;
    this.purchase1.date= new Date();
    this.purchase1.item="Guess Watch";
    this.purchase1.necessity=4;
    
    this.charity1 = new Charity;
    console.log(this.charity1);
    this.charity1.purpose="Helping Children in Need";
    this.charity1.malariaVaccinations = 35;
    this.charity1.lifeSaved = 4000;

    this.purchase2 = new Purchase;
    this.purchase2.dollarCost=80;
    this.purchase2.date= new Date();
    this.purchase2.item="groceries";
    this.purchase2.necessity=9;
    console.log(this.purchase2);

    this.purchases.push(this.purchase1, this.purchase2);
  }

}
