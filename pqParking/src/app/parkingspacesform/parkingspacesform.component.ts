import { Component, OnInit } from '@angular/core';
import { ParkingSpaceModel } from '../parkingspacesform/parkingSpaceModel';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-parkingspacesform',
  templateUrl: './parkingspacesform.component.html',
  styleUrls: ['./parkingspacesform.component.scss']
})
export class ParkingspacesformComponent implements OnInit {

  constructor(private _http: HttpClient) { }

  parkingSpaces =  new ParkingSpaceModel("","","","","","","","");

  ngOnInit() {
    this._http.get("http://10.241.17.112:8080/api/display").subscribe(data=> {
      console.log(data);
      this.parkingSpaces = data as ParkingSpaceModel});
    
  }

  

  onSubmit() {    
      console.log('in submit'+ JSON.stringify(this.parkingSpaces));
      this._http.post("http://10.241.17.112:8080/api/store", 
        this.parkingSpaces).subscribe(
          res => {
            console.log(res);
          },
          err => {
            console.log("Error occured");
          }
        );
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.parkingSpaces); }

}
