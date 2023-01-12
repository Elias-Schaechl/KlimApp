import { Component } from '@angular/core';
import { DataService, Route, Statistics } from 'src/app/services/data.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  routes:Route[]
  statistics:Statistics

  constructor(private dataService: DataService) {
    // dataService.getDistance('linz', 'wien').subscribe(data => {
    //   console.log(data)
    // });

    // dataService.getData().subscribe(data => {
    //   console.log("Fetched data:")
    //   console.log(data);
    // });

    // dataService.sendData(new Route()).subscribe(data => {
    //   console.log(data);
    // });

    this.routes = this.dataService.routes
    this.statistics = this.dataService.statistics
    
  }

  ngOnInit () {
    this.dataService.getData().subscribe(data => {
      this.routes = this.dataService.routes
      this.statistics = this.dataService.statistics
    });
  }

}
