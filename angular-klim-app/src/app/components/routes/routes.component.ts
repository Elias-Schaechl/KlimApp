import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService, Route } from 'src/app/services/data.service';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent {
  displayedColumns: string[] = ['start', 'end', 'vehicle', 'date', 'distance', 'co2Savings'];
  routes: Route[] = []
  dataSource = new MatTableDataSource(this.routes);
  
  constructor(private dataService: DataService) {
    this.routes = dataService.routes;
  }

  ngOnInit () {
    this.dataService.getData().subscribe(data => {
      this.routes = this.dataService.routes
    });
  }
  

}
