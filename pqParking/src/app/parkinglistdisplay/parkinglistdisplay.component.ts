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

  public monDate: string;
  public tueDate: string;
  public wedDate: string;
  public thuDate: string;
  public friDate: string;

  ngOnInit() {
   this._http.get("http://cambridgeparkingapp-878242580.us-east-1.elb.amazonaws.com:8080/api/display").subscribe(data=> {
      let parkingSpaces = data as ParkingSpaceModel
      let date = new Date(parkingSpaces.fromDate);
      this.fromDate = date.getDate().toString()+'/'+ (date.getMonth()+1) +'/'+ date.getFullYear().toString();
      this.toDate = parkingSpaces.toDate;     
      this.monday = parkingSpaces.monday.split(',').sort(this.sortAlphaNum);
      this.tuesday = parkingSpaces.tuesday.split(',').sort(this.sortAlphaNum);
      this.wednesday = parkingSpaces.wednesday.split(',').sort(this.sortAlphaNum);
      this.thursday = parkingSpaces.thursday.split(',').sort(this.sortAlphaNum);
      this.friday = parkingSpaces.friday.split(',').sort(this.sortAlphaNum);
      this.note = parkingSpaces.note;
      let mon = this.getMondayOfCurrentWeek(new Date());
      this.monDate =mon.getDate().toString() + '/'+ (mon.getMonth()+1);
      let tue = this.getTuesdayOfCurrentWeek(new Date());
      this.tueDate =tue.getDate().toString() + '/'+ (tue.getMonth()+1);
      let wed = this.getWednesdayOfCurrentWeek(new Date());
      this.wedDate =wed.getDate().toString() + '/'+ (wed.getMonth()+1);
      let thu = this.getThursdayOfCurrentWeek(new Date());
      this.thuDate =thu.getDate().toString() + '/'+ (thu.getMonth()+1);
      let fri = this.getFridayOfCurrentWeek(new Date());
      this.friDate =fri.getDate().toString() + '/'+ (fri.getMonth()+1);
    });
  }

  
  sortAlphaNum(a,b) {
    let reA = /[^a-zA-Z]/g;
    let reN = /[^0-9]/g;
    let aA = a.replace(reA, "");
    let bA = b.replace(reA, "");
    if(aA === bA) {
        let aN = parseInt(a.replace(reN, ""), 10);
        let bN = parseInt(b.replace(reN, ""), 10);
        return aN === bN ? 0 : aN > bN ? 1 : -1;
    } else {
        return aA > bA ? 1 : -1;
    }
  }

  getMondayOfCurrentWeek(d) {
      var day = d.getDay();
      return new Date(d.getFullYear(), d.getMonth(), d.getDate() + (day == 0?-6:1)-day );
  }

  getTuesdayOfCurrentWeek(d) {
    var day = d.getDay();
    return new Date(d.getFullYear(), d.getMonth(), d.getDate() + (day == 0?-6:2)-day );
  }

  getWednesdayOfCurrentWeek(d) {
    var day = d.getDay();
    return new Date(d.getFullYear(), d.getMonth(), d.getDate() + (day == 0?-6:3)-day );
  }
  
  getThursdayOfCurrentWeek(d) {
    var day = d.getDay();
    return new Date(d.getFullYear(), d.getMonth(), d.getDate() + (day == 0?-6:4)-day );
  }

  getFridayOfCurrentWeek(d) {
    var day = d.getDay();
    return new Date(d.getFullYear(), d.getMonth(), d.getDate() + (day == 0?-6:5)-day );
  }
}
