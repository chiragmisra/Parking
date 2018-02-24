import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingspacesformComponent } from './parkingspacesform.component';

describe('ParkingspacesformComponent', () => {
  let component: ParkingspacesformComponent;
  let fixture: ComponentFixture<ParkingspacesformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingspacesformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingspacesformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
