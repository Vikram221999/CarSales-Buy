import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  [x: string]: any;
   private baseURL:string = 'http://localhost:9091/Advertisement/';

  constructor(private httpClient: HttpClient) { }

  public getcar(){
    return this.httpClient.get(`${this.baseURL}readAllCar`);
  }
  addcar(carObj:any){
    return this.httpClient.post<any>(`${this.baseURL}create/Advertisement`,carObj)
  }


}
