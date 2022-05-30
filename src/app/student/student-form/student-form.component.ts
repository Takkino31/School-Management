import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Student} from "../../Models/Student";
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  addStudentForm!: FormGroup
  studentToEdit!: Student
  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService,
  ) { }

  ngOnInit(): void {
    if(!this.activatedRoute.snapshot.params['id']){
      this.initForm();
    }else{
      this.getStudentToEdit(this.activatedRoute.snapshot.params['id'])
    }
  }

  initForm(value?: any): void {
    this.addStudentForm = this.fb.group(
      {
        idClassroom: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
        id: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
        nom: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
        prenom: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
        adresse: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      }
    );
    if (value){
      this.addStudentForm.patchValue({
        idClassroom: value.className,
        nom: value.nom,
        prenom: value.prenom,
        adresse: value.adresse
      });
    }
  }

  isValidInput(fieldName: string): boolean {
    return this.addStudentForm.controls[fieldName].invalid &&
      (this.addStudentForm.controls[fieldName].dirty || this.addStudentForm.controls[fieldName].touched);
  }
  private getStudentToEdit(id: number) {
    this.studentToEdit = this.studentService.getOneStudent(id)
    console.log(this.studentToEdit)
    this.initForm(this.studentToEdit)
  }

  onSubmit() {
    !this.studentToEdit?this.onAddStudent():this.onEditStudent();
  }

  onAddStudent(){
    this.studentService.postStudent(this.addStudentForm.value)
  }

  onEditStudent(){
    let studentToEdit: Student ={
      idClassroom:this.studentToEdit.idClassroom,
      id: this.studentToEdit.id,
      nom:  this.addStudentForm.value.nom,
      prenom: this.addStudentForm.value.prenom,
      adresse: this.addStudentForm.value.adresse
    }
    console.log(    this.studentService.putStudent(studentToEdit))
  }
}
