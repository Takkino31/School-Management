import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClassroomFormComponent} from "./classroom/classroom-form/classroom-form.component";
import {ClassroomListComponent} from "./classroom/classroom-list/classroom-list.component";
import {StudentFormComponent} from "./student/student-form/student-form.component";
import {StudentListComponent} from "./student/student-list/student-list.component";

const routes: Routes = [
  {path:'', redirectTo:'admin/list-classroom', pathMatch: 'full'},
  {
     path:'admin',
     children:[
            { path: 'list-classroom', component: ClassroomListComponent },
            { path: 'add-classroom', component: ClassroomFormComponent },
            { path: 'edit-classroom/:id', component: ClassroomFormComponent },
            { path: 'list-student/:id', component: StudentListComponent },
            { path: 'add-student', component: StudentFormComponent },
            { path: 'edit-student/:id', component: StudentFormComponent }
     ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
