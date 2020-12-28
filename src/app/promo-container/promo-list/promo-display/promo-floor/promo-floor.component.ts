import {Component, Input, OnInit} from '@angular/core';
import {Promo} from "../../../../model/promo";

@Component({
  selector: 'app-promo-floor',
  templateUrl: './promo-floor.component.html',
  styleUrls: ['./promo-floor.component.scss']
})
export class PromoFloorComponent implements OnInit {
  @Input() promoFloor: Promo[];
  constructor() { }

  ngOnInit() {
  }

}
