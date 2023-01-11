import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  // Fetch list of JSON objects from web API
  getDistance(from:string, to:string) {
    const body = {from: from, to: to};
    return this.http.post('http://localhost:8000/', body);
  }

  // Send JSON object to web API
  sendData(data:Route) {
    return this.http.put('http://localhost:8000/', data, httpOptions);
  }

  // Fetch list of JSON objects from web API
  getData() {
    return this.http.get('http://localhost:8000/');
  }
}

export class Route {
  start: string = "";
  end: string = "";
  vehicle: string = "";
  date: string = "";
  distance: number = 0;
  co2Savings: number = 0;

}
