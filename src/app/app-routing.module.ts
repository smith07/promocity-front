import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PromoContainerComponent} from "./promo-container/promo-container.component";
import {PromoListComponent} from "./promo-container/promo-list/promo-list.component";
import {PromoAddComponent} from "./promo-container/promo-add/promo-add.component";
import {DirectAccesDetailPromo} from "./services/direct-acces-detail-promo.service";
import {DirectAccesUrlService} from "./services/direct-acces-url.service";


const routes: Routes = [
  {path: 'promos', component: PromoContainerComponent, canActivate: [DirectAccesUrlService],
  children:[
    {path: 'new', component: PromoAddComponent, canActivate: [DirectAccesUrlService]},
    {path: 'editer/:product', component: PromoAddComponent, canActivate: [DirectAccesDetailPromo, DirectAccesUrlService]},
    {path: '', component: PromoListComponent, canActivate: [DirectAccesUrlService]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
