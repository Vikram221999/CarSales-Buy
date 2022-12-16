import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../helper/ValidateForm';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  type :string ="Password"
  isText: boolean=false;
  eyeIcon:string="fa-eye-slash";


  signForm!:FormGroup;

  constructor(private usersService: UsersService,
    private fb:FormBuilder) { }
  ngOnInit(): void {
    this.signForm =this.fb.group({
      userName:['',Validators.required],
      userPassword:['',Validators.required],
      mobileNumber:['',Validators.required],
      email:['',Validators.required]
    })
    
  }
  hideshowpass(){
    this.isText=!this.isText;
    this.isText ? this.eyeIcon="fa-eye" : this.eyeIcon="fa-eye-slash";
    this.isText ? this.type="text" : this.type="Password";
      }


onSign(){
  if(this.signForm.valid){
    // console.log(this.signForm.value);
    this.usersService.signUp(this.signForm.value)
    .subscribe({
      next: (res: any) => {
        alert("user Created")
      },
      error: (err: any) => {
        alert(err?.error.message)
    }
  });
  }
  else{
console.log("Form is not valid");
    ValidateForm.validateFormFields(this.signForm);
    alert("Your form is invalid ");
  }

}
}
