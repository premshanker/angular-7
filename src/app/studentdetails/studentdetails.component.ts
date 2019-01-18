import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
//import { from } from 'rxjs';
@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.scss']
})
export class StudentdetailsComponent implements OnInit {
  public signupform:FormGroup;
  public fname:string='';
  public lname: string = '';
  public password:string = '';
  public email: string = '';

  constructor(private formbuilder: FormBuilder) {
    this.signupform = this.formbuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      emailid: ['', Validators.required],
      password: ['', Validators.required]

    })
   }

  ngOnInit() {
  }
  postData(signupform: any){
    console.log(signupform.controls.emailid.value);
    console.log(signupform.controls);
  }
  Register(regform: any){
    debugger;
    console.log(regform.controls.inputEmail4.value);
    console.log(regform.controls.inputPassword4.value);
    console.log(regform.controls.inputAddress.value);
    console.log(regform.controls.inputAddress2.value);
    console.log(regform.controls.inputCity.value);
    console.log(regform.controls.inputState.value);
    console.log(regform.controls.inputZip.value);
    console.log(regform.controls.gridCheck.value);
    console.log(regform);
  }

}
