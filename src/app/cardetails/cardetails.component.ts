import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.css']
})
export class CardetailsComponent implements OnInit {

  
  carsDetails:any = null;
  constructor(private carService: CarService) { 
    this.getcarsDetails();
  }

  ngOnInit(): void {
    // this.getcarsDetails();
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
