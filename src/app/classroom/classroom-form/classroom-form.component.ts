import { Component, OnInit } from '@angular/core';
import {BehaviorClassroomService} from "../../behaviors/behavior-classroom.service";
import {Classroom} from "../../Models/Classroom";
import {ClassroomService} from "../../services/classroom.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {delay} from "rxjs";

@Component({
  selector: 'app-classroom-form',
  templateUrl: './classroom-form.component.html',
  styleUrls: ['./classroom-form.component.scss']
})
export class ClassroomFormComponent implements OnInit {
  addClassroomForm!: FormGroup ;
  classroomToEdit!: Classroom | void ;
  constructor(
    private fb: FormBuilder,
    private classroomBehavior: BehaviorClassroomService,
    private classroomService: ClassroomService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    if(!this.activatedRoute.snapshot.params['id']){
      this.initForm();
    }else{
      this.getClassroomToEdit(this.activatedRoute.snapshot.params['id'])
    }
  }

  getClassroomToEdit(id: number) {
    this.classroomToEdit = this.classroomService.getOneClassroom(id)
    this.initForm(this.classroomToEdit)
  }

  initForm(value?: any): void {
    this.addClassroomForm = this.fb.group(
      {
        className: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
        desc: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      }
    );
    if (value){
      this.addClassroomForm.patchValue({
        className: value.className,
        desc: value.desc
      });
    }
  }

  isValidInput(fieldName: string): boolean {
    return this.addClassroomForm.controls[fieldName].invalid &&
      (this.addClassroomForm.controls[fieldName].dirty || this.addClassroomForm.controls[fieldName].touched);
  }

  onSubmit() {
    !this.classroomToEdit?this.onAddClassroom():this.onEditClassroom(this.activatedRoute.snapshot.params['id']);
  }

  onAddClassroom(){
    let newClassroom = {
      desc: this.addClassroomForm.value.desc,
      className: this.addClassroomForm.value.className
    }
    console.log(this.classroomService.postClassroom(newClassroom))
  }

  onEditClassroom(id: number){
    let classroom: Classroom ={
      'id': id,
      desc: this.addClassroomForm.value.desc,
      className: this.addClassroomForm.value.className,
    }
    this.classroomService.putClassroom(classroom)
  }
}
