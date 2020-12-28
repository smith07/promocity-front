import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromoListComponent } from './promo-container/promo-list/promo-list.component';
import { PromoContainerComponent } from './promo-container/promo-container.component';
import { PromoComponent } from './promo-container/promo-list/promo-display/promo-floor/promo/promo.component';
import { SearchPromoComponent } from './promo-container/promo-list/search-promo/search-promo.component';
import { PromoFloorComponent } from './promo-container/promo-list/promo-display/promo-floor/promo-floor.component';
import { PutForwardComponentDirective } from './directives/put-forward-component.directive';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { PromoAddComponent } from './promo-container/promo-add/promo-add.component';
import { PromoDisplayComponent } from './promo-container/promo-list/promo-display/promo-display.component';
import {DirectAccesDetailPromo} from "./services/direct-acces-detail-promo.service";
import {CompteModule} from "./compte/compte.module";
import {HttpInterceptorImpl} from "./interceptor/httpInterceptor";

@NgModule({
  declarations: [
    AppComponent,
    PromoListComponent,
    PromoContainerComponent,
    PromoComponent,
    SearchPromoComponent,
    PromoFloorComponent,
    PutForwardComponentDirective,
    DateFormatPipe,
    PromoAddComponent,
    PromoDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CompteModule
  ],
  providers: [
    DirectAccesDetailPromo,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorImpl,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
