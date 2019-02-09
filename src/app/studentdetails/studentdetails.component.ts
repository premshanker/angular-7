import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators, FormArray} from '@angular/forms';
import { formsignup } from '../signupfrm';
//import { getMaxListeners } from 'cluster';
//import { from } from 'rxjs';
@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.scss']
})
export class StudentdetailsComponent implements OnInit {
  public signupform:FormGroup;
  FormGroup:FormGroup;
  public Fname:string='';
  public Lname: string = '';
  public Password:string = '';
  public Email: string = '';
  form1:any;
  TotalRow: number;

  constructor(private formbuilder: FormBuilder) {
    this.signupform = this.formbuilder.group({
      fname: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      lname: ['', Validators.required],
      emailid: ['', Validators.compose([Validators.required, Validators.email, Validators.minLength(5)])],
      password: ['', Validators.required]

    })
   }
   addNewRow(){
     const control = <FormArray>this.FormGroup.controls['itemRow'];
     control.push(this.initItemRow());
   }
   deleteRow(index: number){
    const control = <FormArray>this.FormGroup.controls['itemRow'];
    if(control != null){
      this.TotalRow = control.value.length;
    }
    if(this.TotalRow>1){
      control.removeAt(index);
    }else{
      alert('One Record is mandatory.');
      return false;
    }
   }
  initItemRow(){
    return this.formbuilder.group({
      Name:[''],
      RollNo:[''],
      Class:[''],
      MobileNo:['']
    })
  }
  ngOnInit(): void {
    this.FormGroup = this.formbuilder.group({
      itemRow: this.formbuilder.array([this]),
    })
   /* this.signupform.get('fname').valueChanges.subscribe(
      uname=>{
        console.log(`changes values  ${uname}`);
      }
    )*/

    /*this.signupform.valueChanges.subscribe((uname:formsignup)=>{
      console.log(`changes fname values  ${uname.fname}`);
      console.log(`changes lname values  ${uname.lname}`);
      console.log(`changes emai values  ${uname.emailid}`);
      console.log(`changes pass values  ${uname.password}`);
    }
    );*/
    /*this.signupform.get('emailid').statusChanges.subscribe((ustatus)=>{
      console.log(`Status changes email values  ${ustatus}`);
    }


    )*/

   /* this.signupform.statusChanges.subscribe((ustatus)=>{
      console.log(`form validation check status   ${ustatus}`);
      
    }
    );*/

    this.form1 = new FormGroup({    
      ContactNos: new FormArray([
        new FormControl('6676767606'),
        new FormControl('977667666'),
        new FormControl('3977667666'),
        new FormControl('4977667666'),
      ])
    });

  }
  addContactNo(){this.form1.get('ContactNos').push(new FormControl('44444444444444'))}
  ngSubmit(){
    console.log(`ngSubmit click  ${this.form1.get('ContactNos').value}`);
    console.log(`ngSubmit click for all value  ${this.form1.value}`);
  }
  setPreset(){this.form1.get('ContactNos').patchValue(['35353553','453535345']);}
  setFrmValue(){
    this.signupform.setValue({
      fname: "Prem",
      lname: "Bajpayee",
     // emailid: "prem@gmail.com",
      password:"123456"
    })
  }
  setFrmPatch(){
    this.signupform.patchValue({
      fname: "Prem",
      lname: "Bajpayee",
      //emailid: "prem@gmail.com",
      password:"123456"
    })
  }
  postData(signupform: any){
    alert(this.signupform.get('fname').value);
    alert(JSON.stringify(this.signupform.value));
    this.signupform.reset({
      fname:"Prakash",
      emailid: "p@gmail.com"
    });
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
    console.log(regform.controls.customRadioInline2.value);
  }

}
