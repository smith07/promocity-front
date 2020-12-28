import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPromoComponent } from './search-promo.component';

describe('SearchPromoComponent', () => {
  let component: SearchPromoComponent;
  let fixture: ComponentFixture<SearchPromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
