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
  public note: string;

  ngOnInit() {
   this._http.get("http://10.241.17.112:8080/api/display").subscribe(data=> {
      let parkingSpaces = data as ParkingSpaceModel
      let date = new Date(parkingSpaces.fromDate);
      this.fromDate = date.getDate().toString()+'/'+ (date.getMonth()+1) +'/'+ date.getFullYear().toString();
      this.toDate = parkingSpaces.toDate;     
      this.monday = parkingSpaces.monday.split(',').sort(this.sortNumber);
      this.tuesday = parkingSpaces.tuesday.split(',').sort(this.sortNumber);
      this.wednesday = parkingSpaces.wednesday.split(',').sort(this.sortNumber);
      this.thursday = parkingSpaces.thursday.split(',').sort(this.sortNumber);
      this.friday = parkingSpaces.friday.split(',').sort(this.sortNumber);
      this.note = parkingSpaces.note;
    });
  }

  sortNumber(a,b) {
    return a - b;
  }

}
