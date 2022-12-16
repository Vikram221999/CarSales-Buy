import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carinfo',
  templateUrl: './carinfo.component.html',
  styleUrls: ['./carinfo.component.css']
})
export class CarinfoComponent implements OnInit {

  constructor() { }

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
  }

}
