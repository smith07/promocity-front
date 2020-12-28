import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {ROUTE_COMPTE} from "./compte-routing-module";


@NgModule({
  declarations: [RegisterComponent,
  LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ROUTE_COMPTE
  ]
})
export class CompteModule { }
