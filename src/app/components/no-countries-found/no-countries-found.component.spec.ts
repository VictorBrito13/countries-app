import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoCountriesFoundComponent } from './no-countries-found.component';

describe('NoCountriesFoundComponent', () => {
  let component: NoCountriesFoundComponent;
  let fixture: ComponentFixture<NoCountriesFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoCountriesFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoCountriesFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
