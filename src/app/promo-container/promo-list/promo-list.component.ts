import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {Promo} from "../../model/promo";
import {BehaviorSubject} from "rxjs";
import {PromoServiceService} from "../../services/promo-service.service";

@Component({
  selector: 'app-promo-list',
  templateUrl: './promo-list.component.html',
  styleUrls: ['./promo-list.component.scss']
})


export class PromoListComponent implements OnInit {


  //public  allPromos: BehaviorSubject<promo[]>  = new BehaviorSubject([]);
  public promos: Promo[] = [];
  private allPromos : Promo[] = [];
  constructor(private promoService: PromoServiceService) { }

  ngOnInit() {
    this.promoService.initData();
    this.promoService.promoBehaviour.subscribe( allPromos =>{
      //this.allPromos.next(allPromos);
      this.allPromos = allPromos;
      this.promos = [...allPromos];
    })
  }

  filterPromo(filterSearch: string): void {
    this.promos = this.allPromos.filter(promo => {
      return promo.product.toLowerCase().includes(filterSearch.toLowerCase());
    });
  }
}
