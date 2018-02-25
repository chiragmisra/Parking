import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ParkingspacesformComponent } from './parkingspacesform/parkingspacesform.component';
import { ParkinglistdisplayComponent } from './parkinglistdisplay/parkinglistdisplay.component';

const appRoutes: Routes = [
  { path: 'addparkingspaces', component: ParkingspacesformComponent },
  { path: '**', component: ParkinglistdisplayComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ParkingspacesformComponent,
    ParkinglistdisplayComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
