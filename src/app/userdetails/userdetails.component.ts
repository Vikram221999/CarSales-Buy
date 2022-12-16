import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../entity/user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  users!: user[];

  usersDetails:any = null;
  constructor(private usersService: UsersService, private router: Router) {
    // this.getusersDetails();
   }

  ngOnInit(): void {
    this.getuserdetails();
  }
  
  getuserdetails() {
    this.usersService.getUsers().subscribe(data =>{
      this.users = data;
      console.log(this.users)
    })
  }

  //  getusersDetails(){
  //   this.usersService.getUsers().subscribe(
  //     (resp)=>{
  //       console.log(resp);
  //      this.usersDetails=resp;
        
  //     },
  //     (err)=>{
  //       console.log(err);
  //     }
  //   );
  // }
}



