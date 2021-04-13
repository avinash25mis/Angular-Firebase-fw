import { Component, OnInit } from '@angular/core';
import { DayServiceService } from "../shared/day-service.service";

@Component({
  selector: 'app-day-list',
  templateUrl: './day-list.component.html',
  styleUrls: ['./day-list.component.css']
})
export class DayListComponent implements OnInit {

  constructor(private dayService : DayServiceService) { }

  ngOnInit(): void {
    this.getAllDayData();
  }

  dayData;

  getAllDayData(){
 
    this.dayService
      .getAllDayData()
      .subscribe(res =>(
        this.dayData = res
        ));
  }

  deleteDay(order){
  this.dayService.deleteDay(order);
  }

}
