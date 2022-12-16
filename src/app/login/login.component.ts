import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  // Hello vikram Is git working??
  
  type:string ="Password"
  isText: boolean=false;
  eyeIcon:string="fa-eye-slash";


  notFound:boolean = false;
  isChecked=false;

  loginForm!:FormGroup;

  constructor(private usersService: UsersService,
     private fb:FormBuilder,
     private cookie : CookieService,
     private router:Router,
     private route : ActivatedRoute) { }

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

  inCorrect:boolean=false;
  onLogin(){
    if (!this.loginForm.valid) {
      alert("UserName or Password Incorrect");
      return;
    } else {
     
      //this.inCorrect = false;
      this.notFound = false;
      
        this.usersService.login(this.loginForm.value.email).subscribe(
          (data) => {
            if (
              data?.userPassword == this.loginForm.value.userPassword &&
              data?.email == this.loginForm.value.email)
             {
         
              this.inCorrect = false;
              this.notFound = false;
              this.cookie.set('email', `${data?.email}`);
               console.log(this.loginForm.value);
             
              this.cookie.set('userId', `${data?.userId}`);
              this.router.navigate(['dashboard']);
              this.usersService.setSideMenuView(Object.keys(this.cookie.getAll()).length != 0);
            } else {
              this.inCorrect = true;
            }
          },
          (error) => {
            if (error?.status == 404) {

              this.notFound = true;
            }
          }
        );




//     if(this.loginForm.valid){
//       console.log(this.loginForm.value);
//       this.usersService.login(this.f['email'].value, this.f['userPassword'].value).pipe(first()).subscribe({
      
        
//         next: (res: any) => {
//           alert(res.message)
//         }, 
//         error: (err: any) => {
          
//           alert(err.error.message);
//       }
//     });
//     }
//     else{
// console.log("Form is not valid");

     
//       ValidateForm.validateFormFields(this.loginForm);
//       alert("Your form is invalid is Invalis")
//     }
//   }
//
        }
      }
    }


