import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { ParkingSpaceModel } from '../parkingspacesform/parkingSpaceModel'

@Component({
  selector: 'app-parkinglistdisplay',
  templateUrl: './parkinglistdisplay.component.html',
  styleUrls: ['./parkinglistdisplay.component.scss']
})
export class ParkinglistdisplayComponent implements OnInit {

  constructor(private _http: HttpClient) { }

  public fromDate: string;
  public toDate: string;
  public monday: string[];
  public tuesday: string[];
  public wednesday: string[];
  public thursday: string[];
  public friday: string[];

  ngOnInit() {
   this._http.get("http://10.241.17.112:8080/api/display").subscribe(data=> {
      let parkingSpaces = data as ParkingSpaceModel
      let date = new Date(parkingSpaces.fromDate);
      this.fromDate = date.getDate().toString()+'/'+ date.getMonth().toString() +'/'+ date.getFullYear().toString();
      this.toDate = parkingSpaces.toDate;
      this.monday = parkingSpaces.monday.split(',');
      this.tuesday = parkingSpaces.tuesday.split(',');
      this.wednesday = parkingSpaces.wednesday.split(',');
      this.thursday = parkingSpaces.thursday.split(',');
      this.friday = parkingSpaces.friday.split(',');
    });
  }

}
