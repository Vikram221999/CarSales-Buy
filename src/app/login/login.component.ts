import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { first } from 'rxjs';
import ValidateForm from '../helper/ValidateForm';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  type:string ="Password"
  isText: boolean=false;
  eyeIcon:string="fa-eye-slash";

  loginForm!:FormGroup;

  constructor(private usersService: UsersService,
     private fb:FormBuilder,
     private cookies : CookieService) { }

  ngOnInit(): void {
    this.loginForm =this.fb.group({
      email:['',Validators.required],
      userPassword:['',Validators.required]
    })

  }
  hideshowpass(){
    this.isText=!this.isText;
    this.isText ? this.eyeIcon="fa-eye" : this.eyeIcon="fa-eye-slash";
    this.isText ? this.type="text" : this.type="Password";
  }
  get f() { return this.loginForm.controls; }

  onLogin(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      this.usersService.login(this.f['email'].value, this.f['userPassword'].value).pipe(first()).subscribe({
      // this.usersService.login(this.loginForm.).subscribe({
        
        next: (res: any) => {
          alert(res.message)
        }, 
        error: (err: any) => {
          // alert(err?.error.message)
          alert(err.error.message);
      }
    });
    }
    else{
console.log("Form is not valid");

      //throw the error using toaster and with required fiels
      ValidateForm.validateFormFields(this.loginForm);
      alert("Your form is invalid is Invalis")
    }
  }


}
