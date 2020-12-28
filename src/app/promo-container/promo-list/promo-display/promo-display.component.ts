import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Promo} from "../../../model/promo";


const colFloor: number =3;

@Component({
  selector: 'app-promo-display',
  templateUrl: './promo-display.component.html',
  styleUrls: ['./promo-display.component.scss']
})
export class PromoDisplayComponent implements OnInit, OnChanges {

  //private allPromos : promo[];
  constructor() { }

  //@Input() allPromosBeh: BehaviorSubject<promo[]>;
  @Input() promos: Promo[] = [];
  public floors : any;

  ngOnInit() {
    //this.allPromosBeh.subscribe(allPromos =>{
    //  this.allPromos=allPromos;
    //});
  }

  ngOnChanges(changes: SimpleChanges): void {
    let promoNbFloor = Math.ceil(this.promos.length/colFloor);
    this.floors = new Array(promoNbFloor);
  }

  getPromoFloor(index: number): Promo[]{
    return this.promos.slice(index*colFloor, index + colFloor);
  }

}
