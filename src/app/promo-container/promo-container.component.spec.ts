import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoContainerComponent } from './promo-container.component';

describe('PromoContainerComponent', () => {
  let component: PromoContainerComponent;
  let fixture: ComponentFixture<PromoContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
