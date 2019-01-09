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
@Output() myoutput: EventEmitter<string> = new EventEmitter();
outputstring = 'Hi I am your child';
  constructor(private el: ElementRef, private renderer: Renderer) { 

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
    alert('click done');
  }
  @HostListener('mouseover') onmouseover11(){
    this.changeBGColor('yellow');
  }
  @HostListener('mouseleave') onmouseover1(){
    this.changeBGColor('blue');
  }
  changeBGColor(color: string){
    this.renderer.setElementStyle(this.el.nativeElement, 'color', color);
  }

}
