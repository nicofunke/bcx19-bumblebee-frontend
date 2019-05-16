import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneCountdownComponent } from './drone-countdown.component';

describe('DroneCountdownComponent', () => {
  let component: DroneCountdownComponent;
  let fixture: ComponentFixture<DroneCountdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroneCountdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DroneCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
