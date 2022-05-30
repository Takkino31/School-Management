import { Component, OnInit } from '@angular/core';
import {ClassroomService} from "../../services/classroom.service";
import {faEdit} from "@fortawesome/free-regular-svg-icons/faEdit";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {Classroom} from "../../Models/Classroom";
import {BehaviorClassroomService} from "../../behaviors/behavior-classroom.service";

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrls: ['./classroom-list.component.scss']
})
export class ClassroomListComponent implements OnInit {
  edit = faEdit
  delete = faTrash
  constructor(
    private classroomServices: ClassroomService,
    private classroomBehavior: BehaviorClassroomService
  ) { }
  data !: Classroom[];

  page!: number;
  totalItems!: number;
  ngOnInit(): void {
    this.page = 1
    this.data = this.getData()
    this.totalItems = this.data.length
  }

  pageChanged(event: number):any{
    this.page = event;
  }

  sendClassToEdit(data: Classroom) {
    console.log('data'+data)
    this.classroomBehavior.sendData(data);
  }

  getData(): Classroom[]{
    return this.classroomServices.sendData();
  }

  removeClassroom(id: number) {
    this.classroomServices.removeClassroom(id)
  }
}
