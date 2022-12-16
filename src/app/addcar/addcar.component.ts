import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarService } from '../car.service';
import ValidateForm from '../helper/ValidateForm';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit {
  carForm!:FormGroup;
  constructor(private carService: CarService,
    private fb:FormBuilder) { }
    firstFormGroup: FormGroup = this.fb.group({firstCtrl: ['']});
  secondFormGroup: FormGroup = this.fb.group({secondCtrl: ['']});

  ngOnInit(): void {
    
    this.carForm =this.fb.group({
      userId:['',Validators.required],
      carNumber:['',Validators.required],
      carName:['',Validators.required],
      
      fuelType:['',Validators.required],
      ownerType:['',Validators.required],
      yearOfManufacture:['',Validators.required],
      carModelName:['',Validators.required],
      gearTransmission:['',Validators.required],
      kmDriven:['',Validators.required],
      price:['',Validators.required],
      description:['',Validators.required],
      
      premium:['',Validators.required]
      // registration:['',Validators.required]

    })
    
  }
  onSign(){
    if(this.carForm.valid){
      console.log(this.carForm.value);
      this.carService.addcar(this.carForm.value).subscribe({
        next: (res) => {
          alert("user Created")
        },
        error: (err) => {
          alert(err?.error.message)
      }
    });
    }
    else{
  console.log("Form is not valid");
      ValidateForm.validateFormFields(this.carForm);
      alert("Your form is invalid ");
    }
  }

}
