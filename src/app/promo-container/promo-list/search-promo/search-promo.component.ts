import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-promo',
  templateUrl: './search-promo.component.html',
  styleUrls: ['./search-promo.component.scss']
})
export class SearchPromoComponent implements OnInit {

  constructor() { }
  @Output('searchPromo') searchPromoEmmiter = new EventEmitter();
  private searchPromo : String;
  ngOnInit() {
  }

  emmitSearchPromo(): void{
    this.searchPromoEmmiter.emit(this.searchPromo);
  }

}
