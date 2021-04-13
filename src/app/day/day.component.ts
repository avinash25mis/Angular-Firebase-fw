import { Component, OnInit } from '@angular/core';
import { DayServiceService } from "../shared/day-service.service";


@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  constructor(public dayService:DayServiceService) { }

  ngOnInit(): void {
    
  }


  onSubmit(){
    let data = this.dayService.form.value;
      
     this.dayService.addDayData(data)
         .then(res => {
             alert("Data got saved")
         });
  }

}
