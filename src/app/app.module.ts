import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyserviceService } from './services/myservice.service';
import { ParentComponent } from './parent/parent.component';
import { StudentComponent } from './student/student.component';
import { StudentportalModule } from './studentportal/studentportal.module';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MyserviceService, StudentportalModule],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log('hi i am module;');
  }
}
