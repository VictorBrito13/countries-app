import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountyPComponent } from './county-p.component';

describe('CountyPComponent', () => {
  let component: CountyPComponent;
  let fixture: ComponentFixture<CountyPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountyPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountyPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
