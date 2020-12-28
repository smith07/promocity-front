import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Promo} from "../model/promo";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PromoServiceService {

  public allPromo: Promo[];
  public promoBehaviour: BehaviorSubject<Promo[]> = new BehaviorSubject([]);
  constructor(private http: HttpClient) { }


  initData(): void {
    this.http.get<Promo[]>('/api/promos').subscribe(
      values => {
        this.allPromo=values;
        this.promoBehaviour.next(values);
        console.log(values);
        }
    );
  }

  addPromo(promo: Promo): void{
    this.http.post('/api/promos', promo).subscribe(next =>{
    });
  }

  updatePromo(promo: Promo): void{
    this.http.put('/api/promos', promo).subscribe(next =>{
    });
  }

  getPromo(promoName: string): Promo {
    return this.allPromo.find(promo => {
      return promo.product.toLowerCase() == promoName.toLowerCase();
    });
  }


}
