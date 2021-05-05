import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PurchasesService {

  constructor(private http: HttpClient) { }

   getPurchases(){
    return this.http.get('http://localhost:3030/purchases')
  }

  addPurchase(purchase){
    return  this.http.post('http://localhost:3030/purchases', purchase)
  }

 clearPurchases(){
    return  this.http.delete('http://localhost:3030/purchases')
  }
}
