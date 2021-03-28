import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PurchasesComponent } from './purchases/purchases.component'
import { ScoreComponent } from './score/score.component'
import { CharitiesComponent } from './charities/charities.component'
const routes: Routes = [{path:'home', component:HomeComponent},{path:'home', component:HomeComponent},{path:'purchases', component:PurchasesComponent},{path:'score', component:ScoreComponent},{path:'charities', component:CharitiesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
