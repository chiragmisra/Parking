import { Component, OnInit } from '@angular/core';
import { ParkingSpaceModel } from '../parkingspacesform/parkingSpaceModel';
import { FormGroup, FormsModule, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-parkingspacesform',
  templateUrl: './parkingspacesform.component.html',
  styleUrls: ['./parkingspacesform.component.scss']
})
export class ParkingspacesformComponent implements OnInit {

  private form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  parkingSpaces =  new ParkingSpaceModel([""],"","","","");

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.parkingSpaces); }

}
