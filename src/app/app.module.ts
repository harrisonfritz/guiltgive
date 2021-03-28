import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { ScoreComponent } from './score/score.component';
import { CharitiesComponent } from './charities/charities.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PurchaseComponent } from './shared/purchase/purchase.component';
import { CharityComponent } from './shared/charity/charity.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PurchasesComponent,
    ScoreComponent,
    CharitiesComponent,
    PurchaseComponent,
    CharityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    NgbModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 