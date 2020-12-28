import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {User} from "../model/user";
import {catchError, switchMap, tap} from "rxjs/operators";
import {BehaviorSubject, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompteServiceService {

  public token: BehaviorSubject<{ isAuthenticated: boolean, value: String }> = new BehaviorSubject({isAuthenticated: false, value:null});

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('jwt');
    if(token){
      this.token.next({isAuthenticated: true, value: token});
    }
  }


  public register(user: User): void{
    this.http.post('/api/users',user).subscribe(next=>{
    });
  }

  public login(credential: {email:String, password: String}): Observable<string>{
    return this.http.post('/api/login', credential, {observe: 'response'}).pipe(
      tap((resp)=> {
        this.token.next({isAuthenticated: true, value: resp.headers.get('authorization')})
        localStorage.setItem('jwt', resp.headers.get('authorization'));
    }),switchMap((resp) => {
      return of('succes');
      }), catchError((err) =>{
        console.log(err);
      return of(err.toString());
    }));
  }


}
