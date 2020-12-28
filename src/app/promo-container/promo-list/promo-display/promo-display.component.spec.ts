import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoDisplayComponent } from './promo-display.component';

describe('PromoDisplayComponent', () => {
  let component: PromoDisplayComponent;
  let fixture: ComponentFixture<PromoDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
