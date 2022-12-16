import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  carsDetails:any = null;
  constructor(private carService: CarService) { 
     this.getcarsDetails();}

  ngOnInit(): void {
  }
  getcarsDetails(){
    this.carService.getcar().subscribe(
      (resp)=>{
        console.log(resp);
       this.carsDetails=resp;
        
      },
      (err)=>{
        console.log(err);
      }
    );
  }

}
