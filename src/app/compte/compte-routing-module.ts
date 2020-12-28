import {Route, RouterModule} from "@angular/router";
import {RegisterComponent} from "./register/register.component";
import { LoginComponent} from "./login/login.component";

const routes: Route[] = [
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  {path: '**', redirectTo: 'login'}
  ]

export const ROUTE_COMPTE = RouterModule.forChild(routes);
