import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private router: Router) { }

  donation: number;
  income: number;
  ngOnInit(): void {
  }

  calculateGenerosity(){
    return (this.donation / this.income);
  }

  addPurchase(){
   this.router.navigateByUrl('/form') ;
  }
  
  updateDonation(){
    this.router.navigateByUrl('/donation')
  }
}
