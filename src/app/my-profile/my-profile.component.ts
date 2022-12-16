import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  carsDetails:any = null;
  constructor(private carService: CarService) { 
     this.getcarsDetails();}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
