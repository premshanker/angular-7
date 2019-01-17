import { Component, NgModule, OnInit, Input, Output, EventEmitter, HostListener, Renderer, ElementRef } from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
@Input() myinput: string;
isValid: boolean;
public switch_expression: string;
public persion:any[];
public student: any[];
public data: string='Prem';
public data1: string='Prem1';
public DOB: any;
public sal: number;
public title:string = "Midas IT Services";
public name: string = "Prem Bajpayee";
public article: string = "Pipes in angular ";
public position: string = "bloger";
public users: any;
@Output() myoutput: EventEmitter<string> = new EventEmitter();
outputstring = 'Hi I am your child';
  constructor(private el: ElementRef, private renderer: Renderer) { 

this.users = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    gender: "male",
    "email": "Sincere@april.biz"
},
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    gender: "female",
    "email": "Shanna@melissa.tv"
},
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    gender: "male",
    "email": "Nathan@yesenia.net"
},
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    gender: "female",
    "email": "Julianne.OConner@kory.org"
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    gender: "male",
    "email": "Lucio_Hettinger@annie.ca"
  }
];

this.persion = [
  {name: "Prem Kumar"},
  {name: "Aman Kumar"},
  {name: "Prem Kumar"},
  {name: "Aman Kumar"},
  {name: "Prem Kumar"},
  {name: "Aman Kumar"},
  {name: "Prem Kumar"},
  {name: "Aman Kumar"},
  {name: "Prem Kumar"},
  {name: "Aman Kumar"}

];

this.student = [
  {id:1, name: "Prem", course: "MCA", gender: "Male"},
  {id:2, name: "Srem", course: "BCA", gender: "Female"},
  {id:3, name: "Prem Prakash", course: "BBA", gender: "Male"},
  {id:4, name: "Suman Prakash", course: "MBA", gender: "Female"}
];
  }

  addMoreStudent():void{
    this.student = [
    {id:1, name: "Prem", course: "MCA", gender: "Male"},
    {id:2, name: "Srem", course: "BCA", gender: "Female"},
    {id:3, name: "Prem Prakash", course: "BBA", gender: "Male"},
    {id:4, name: "Suman Prakash", course: "MBA", gender: "Female"},
    {id:5, name: "Hari Prakash", course: "Matric", gender: "Male"}
    ];
  }

  trackByFn(index: number, studentp: any):string{//alert(studentp)
    return studentp.id;
  }
  ngOnInit() {
    console.log(this.myinput);
    this.isValid = true;
    this.DOB = new Date(1947,8,15);
    this.sal = 345600;

  }
  changeStyle(coun: string){
    switch(coun){
      case 'Male':
      return 'green';
      case 'Female':
      return 'blue';

    }
  }
  sendData(){
    this.myoutput.emit(this.outputstring);
  }
  getValue(dropdown: any){
this.switch_expression = dropdown.target.value;
//alert(this.switch_expression);
  }
  getCssClass(flag: string){
    let cssClass;
    if(flag === 'nightmode'){
      cssClass={
        'one': true,
        'two': true
      }
    }else{
      cssClass={
        'four': false,
        'two': true
      }
    }
    return cssClass;
  }
  @HostListener('click') onclick(){
   // alert('click done');
  }
  @HostListener('mouseover') onmouseover11(){
    //this.changeBGColor('yellow');
  }
  @HostListener('mouseleave') onmouseover1(){
    //this.changeBGColor('blue');
  }
  changeBGColor(color: string){
   // this.renderer.setElementStyle(this.el.nativeElement, 'color', color);
  }

}
