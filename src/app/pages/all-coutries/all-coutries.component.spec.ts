import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCoutriesComponent } from './all-coutries.component';

describe('AllCoutriesComponent', () => {
  let component: AllCoutriesComponent;
  let fixture: ComponentFixture<AllCoutriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCoutriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCoutriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
