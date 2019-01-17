import { Component, Input, HostListener, Inject } from '@angular/core';
import { MyserviceService } from './services/myservice.service';
import { Router} from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BEST Solution';
  mytitle= "I am in app component";
  constructor(private router: Router,@Inject(MyserviceService) myservice){
    console.log(myservice);
    console.log('hi i am component;');
  }
  @Input() exampleProperty: string;

  @HostListener('click', ['$event.target'])
    bye(btn) {
//alert('Hello Prem!');
    }
    getData(value){
    console.log(value);
    }
    studentCom(){
      this.router.navigate(["/student"]);
    }
  
}
