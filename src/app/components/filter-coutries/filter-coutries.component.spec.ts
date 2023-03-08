import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCoutriesComponent } from './filter-coutries.component';

describe('FilterCoutriesComponent', () => {
  let component: FilterCoutriesComponent;
  let fixture: ComponentFixture<FilterCoutriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterCoutriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterCoutriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
