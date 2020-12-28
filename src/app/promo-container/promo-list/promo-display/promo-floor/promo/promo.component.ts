import {Component, Input, OnInit} from '@angular/core';
import {Promo} from "../../../../../model/promo";
import {ActivatedRoute, Router} from "@angular/router";
import {DirectAccesDetailPromo} from "../../../../../services/direct-acces-detail-promo.service";

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent implements OnInit {
  @Input() promo: Promo;

  constructor(private activatedRoute:ActivatedRoute ,private router: Router, private directAcces: DirectAccesDetailPromo) { }

  ngOnInit() {
  }

   redirectEdit(product: String): void{
    this.directAcces.canAcces=true;
    console.log(this.router.url);
    this.router.navigate([this.router.url+'/editer',product]);

  }

}
