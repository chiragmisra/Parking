import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-parkinglistdisplay',
  templateUrl: './parkinglistdisplay.component.html',
  styleUrls: ['./parkinglistdisplay.component.scss']
})
export class ParkinglistdisplayComponent implements OnInit {

  constructor(private _http: HttpClient) { }

  private responseJSON: object;

  ngOnInit() {
   this._http.get("http://localhost:8080/api/display").subscribe(data=> {
    console.log(data);
    this.responseJSON = data});
  }

}
