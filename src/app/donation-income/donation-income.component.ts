import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donation-income',
  templateUrl: './donation-income.component.html',
  styleUrls: ['./donation-income.component.css']
})
export class DonationIncomeComponent implements OnInit {

  constructor() { }
  income: number;  
  donation: number;
  ngOnInit(): void {
    console.log(this.income);
  }

  updateIncome(income){
    this.income= income;
    console.log(this.income);
  }
  updateDonation(donation){
    this.donation= donation;
    console.log(this.donation);
  }
}
