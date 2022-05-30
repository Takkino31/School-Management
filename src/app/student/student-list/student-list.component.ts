import { Component, OnInit } from '@angular/core';
import {faEdit} from "@fortawesome/free-regular-svg-icons/faEdit";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {StudentService} from "../../services/student.service";
import {Student} from "../../Models/Student";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  edit = faEdit
  delete = faTrash
  data: Student[] =[]

  page!: number;
  totalItems!: number;
  constructor(
    private studentServices: StudentService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.data =this.getStudentsToShow(this.activatedRoute.snapshot.params['id'])
    this.page = 1
    this.totalItems = this.data.length
  }

  getStudentsToShow(id: number): Student[]{
    return this.studentServices.getStudentsFromOneClass(id)
  }

  pageChanged(event: number):any{
    this.page = event;
  }
}
