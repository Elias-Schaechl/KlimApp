import { Component } from '@angular/core';
import { DataService, Route } from 'src/app/services/data.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {



  constructor(dataService: DataService) {
    
    dataService.getDistance('linz', 'wien').subscribe(data => {
      console.log(data)
    });

    dataService.getData().subscribe(data => {
      console.log("Fetched data:")
      console.log(data);
    });

    dataService.sendData(new Route()).subscribe(data => {
      console.log(data);
    });
  }
}
