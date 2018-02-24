import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkinglistdisplayComponent } from './parkinglistdisplay.component';

describe('ParkinglistdisplayComponent', () => {
  let component: ParkinglistdisplayComponent;
  let fixture: ComponentFixture<ParkinglistdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkinglistdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkinglistdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
