import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CarService } from '../car.service';
import { user } from '../entity/user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

user!:user;
email:string=this.cookie.get('email');
  
  userDetail:any = null;
  constructor(private userService: UsersService,
    private cookie : CookieService) { 
    }
  ngOnInit(): void {
    var savebutton :any;
    var readonly :any;
    var inputs:any;
     savebutton = document.getElementById('savebutton');
 readonly = true;
 inputs = document.querySelectorAll('input[type="text"]');
savebutton.addEventListener('click',function(){
    
     for (var i=0; i<inputs.length; i++) {
     inputs[i].toggleAttribute('readonly');
     };

    if (savebutton.innerHTML == "edit") {
      savebutton.innerHTML = "save";
         } else {
      savebutton.innerHTML = "edit";
      } 
});
this.userdetail();
  }

  userdetail() {
    this.userService.getUserDetails(this.email).subscribe(data =>{
      this.user = data;
      console.log(this.user);
    })
  }
}
