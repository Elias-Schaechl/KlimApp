import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public routes:Route[] = []
  public statistics:Statistics = new Statistics()


  constructor(private http: HttpClient) { }


  // Fetch list of JSON objects from web API
  getDistance(from:string, to:string) {
    const body = {from: from, to: to};
    return this.http.post('http://localhost:8000/', body);
  }

  // Send JSON object to web API
  sendData(data:Route) {
    console.log("Sending data")
    console.log(data)
    return this.http.put('http://localhost:8000/', data, httpOptions);
  }

  // Fetch list of JSON objects from web API
  getData() {
    this.resetStats();
    let sub = this.http.get('http://localhost:8000/');
    sub.subscribe(data  =>
      (data as Route[]).forEach(route => {
        console.log(route);
        this.routes.push(route);
        this.updateStats(route);
      })
    )
    return sub;
  }



  resetStats() {
    this.routes = []
    this.statistics = new Statistics()
  }

  updateStats(route:Route) {
    let saving =  Math.floor(route.co2Savings / this.routes.length);
    this.statistics.totalCO2 += saving;
    let points =  Math.floor(saving * 0.5);
    this.statistics.points += points;
    this.statistics.goalProgress += points;
  }

  prepRoute(route:Route):Route {
    let cO2 = 150 * route.distance;  // Based on car 
    let cO2Saving = 0;
    switch (route.vehicle) {
      case "Train":
        cO2Saving = cO2 - 50 * route.distance;
        break;
      case "Car":
        break;
      case "Bike":
        cO2Saving = cO2 - 5 * route.distance;
        break;
      case "Plane":
        cO2Saving = cO2 - 400 * route.distance;
        break;
      case "Ufo":
        cO2Saving = cO2;
        break;
      case "Carriage":
        cO2Saving = cO2 - 400 * route.distance;
        break;
    }
    route.co2Savings = Math.floor(cO2Saving);
    return route;
  }





}

export class Route {
  start: string = "";
  end: string = "";
  vehicle: string = "";
  date: string = "";
  distance: number = 0; // In kolometern
  co2Savings: number = 0; // In gramm
}

export class Statistics {
  totalCO2: number = 0;
  points: number = 0;
  nextPersonalGoal: number = 10000;
  goalProgress: number = 0;
}
