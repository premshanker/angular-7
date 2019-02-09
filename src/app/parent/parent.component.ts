import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators, FormArray} from '@angular/forms';
import { from } from 'rxjs';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  form = new FormGroup({
    name: new FormGroup({
      fname: new FormControl('Prem', Validators.required),
      lname: new FormControl('Bajpayee', Validators.required)
    }),
    emailid: new FormControl(),
    password: new FormControl()
  })

  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.form.get('name.fname').value);
    console.log(this.form.get('name.lname').value);
    console.log(this.form.get('name').value);
    console.log(this.form.value);
    console.log(this.form.status);
  }
  setPreset(){
  this.form.get('name').setValue({fname: 'Prakash', lname: 'Mishra'});
}
}
