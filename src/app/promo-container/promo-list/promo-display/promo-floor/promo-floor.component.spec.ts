import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoFloorComponent } from './promo-floor.component';

describe('PromoFloorComponent', () => {
  let component: PromoFloorComponent;
  let fixture: ComponentFixture<PromoFloorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoFloorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
