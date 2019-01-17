import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyserviceService } from './services/myservice.service';
import { ParentComponent } from './parent/parent.component';
import { StudentComponent } from './student/student.component';
import { StudentportalModule } from './studentportal/studentportal.module';
import { MypipePipe } from './mypipe.pipe';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    StudentComponent,
    MypipePipe,
    StudentdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MyserviceService, StudentportalModule],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log('hi i am module;');
  }
}
