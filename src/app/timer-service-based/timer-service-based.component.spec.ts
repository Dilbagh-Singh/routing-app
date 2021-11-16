import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerServiceBasedComponent } from './timer-service-based.component';

describe('TimerServiceBasedComponent', () => {
  let component: TimerServiceBasedComponent;
  let fixture: ComponentFixture<TimerServiceBasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerServiceBasedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerServiceBasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
