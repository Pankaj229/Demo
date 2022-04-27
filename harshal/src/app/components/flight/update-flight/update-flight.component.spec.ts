import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFlightComponent } from './update-flight.component';

describe('UpdateComponentComponent', () => {
  let component: UpdateFlightComponent;
  let fixture: ComponentFixture<UpdateFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
