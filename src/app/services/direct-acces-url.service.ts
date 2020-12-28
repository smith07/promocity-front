import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable, of} from "rxjs";
import {CompteServiceService} from "./compte-service.service";
import {switchMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DirectAccesUrlService implements CanActivate{

  constructor(private compteService: CompteServiceService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = this.compteService.token;
    return token.pipe(switchMap((next)=>{
      if(next.isAuthenticated){
        return of(true);
      } else {
        return of(false);
      }
    }));
  }
}
