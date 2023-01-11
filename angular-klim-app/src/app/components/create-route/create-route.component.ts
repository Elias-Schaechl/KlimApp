import { Component } from '@angular/core';
import { DataService, Route } from 'src/app/services/data.service';

@Component({
  selector: 'app-create-route',
  templateUrl: './create-route.component.html',
  styleUrls: ['./create-route.component.css']
})
export class CreateRouteComponent {

  start:string="";
  end:string="";
  vehicle:string="";
  date:string="";
  traveledDistance:number=0;
  cO2Savings:number=0;


  constructor(private dataService:DataService){

  }

  createRoute() {
    console.log("Creating new route")
    let route = new Route()
    route.start = this.start
    route.end = this.end
    route.vehicle = this.vehicle
    route.date = this.date

    console.log(route)
    this.dataService.sendData(route).subscribe(res => {
      console.log(res);
    });
  }

  updateDist(){
    if (this.start != "" && this.end != "") {
      console.log("Updating dist")
      this.dataService.getDistance(this.start, this.end).subscribe(dist => {
        this.traveledDistance = dist as number;
      })
    }
    

  }

  updateSaving() {
    if (true) {
      let cO2 = 150 * this.traveledDistance;  // Based on car 
    let cO2Saving = 0;
    switch (this.vehicle) {
      case "Train":
        cO2Saving = cO2 - 50 * this.traveledDistance;
        break;
      case "Car":
        break;
      case "Bike":
        cO2Saving = cO2 - 5 * this.traveledDistance;
        break;
      case "Plane":
        cO2Saving = cO2 - 400 * this.traveledDistance;
        break;
      case "Ufo":
        cO2Saving = cO2;
        break;
      case "Carriage":
        cO2Saving = cO2 - 20 * this.traveledDistance;
        break;
    }
    this.cO2Savings = Math.floor(cO2Saving);
    }
  }

}
