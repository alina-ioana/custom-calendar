import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekHeaderComponent } from './week-header.component';

describe('WeekHeaderComponent', () => {
  let component: WeekHeaderComponent;
  let fixture: ComponentFixture<WeekHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
