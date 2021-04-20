import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationIncomeComponent } from './donation-income.component';

describe('DonationIncomeComponent', () => {
  let component: DonationIncomeComponent;
  let fixture: ComponentFixture<DonationIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationIncomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
