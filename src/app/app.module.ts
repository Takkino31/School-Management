import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassroomListComponent } from './classroom/classroom-list/classroom-list.component';
import { ClassroomFormComponent } from './classroom/classroom-form/classroom-form.component';
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ReactiveFormsModule} from "@angular/forms";
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentFormComponent } from './student/student-form/student-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassroomListComponent,
    ClassroomFormComponent,
    StudentListComponent,
    StudentFormComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgxPaginationModule,
        FontAwesomeModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
