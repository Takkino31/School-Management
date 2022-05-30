import { Injectable } from '@angular/core';
import {Student} from "../Models/Student";
import {elementAt} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  data: Student[] = [
    {idClassroom:1, id: 1, nom: 'Student1',prenom: 'Student2',adresse: 'adresse1'},
    {idClassroom:1, id: 2, nom: 'Student2',prenom: 'Student2',adresse: 'adresse2'},
    {idClassroom:1, id: 3, nom: 'Student3',prenom: 'Student3',adresse: 'adresse3'},
    {idClassroom:1, id: 4, nom: 'Student4',prenom: 'Student4',adresse: 'adresse4'},
    {idClassroom:1, id: 5, nom: 'Student5',prenom: 'Student5',adresse: 'adresse5'},
    {idClassroom:1, id: 6, nom: 'Student6',prenom: 'Student6',adresse: 'adresse6'},
    {idClassroom:1, id: 7, nom: 'Student7',prenom: 'Student7',adresse: 'adresse7'},
    {idClassroom:1, id: 8, nom: 'Student8',prenom: 'Student8',adresse: 'adresse8'},
    {idClassroom:1, id: 9, nom: 'Student9',prenom: 'Student9',adresse: 'adresse9'},
    {idClassroom:1, id: 10, nom: 'Student10',prenom: 'Student10',adresse: 'adresse10'},
    {idClassroom:2, id: 11, nom: 'Student11',prenom: 'Student11',adresse: 'adresse11'},
    {idClassroom:2, id: 22, nom: 'Student22',prenom: 'Student22',adresse: 'adresse22'},
    {idClassroom:2, id: 23, nom: 'Student23',prenom: 'Student23',adresse: 'adresse23'},
    {idClassroom:2, id: 24, nom: 'Student24',prenom: 'Student24',adresse: 'adresse24'},
    {idClassroom:2, id: 25, nom: 'Student25',prenom: 'Student25',adresse: 'adresse25'},
    {idClassroom:2, id: 26, nom: 'Student26',prenom: 'Student26',adresse: 'adresse26'},
    {idClassroom:2, id: 27, nom: 'Student27',prenom: 'Student27',adresse: 'adresse27'},
    {idClassroom:2, id: 27, nom: 'Student27',prenom: 'Student27',adresse: 'adresse27'},
    {idClassroom:2, id: 28, nom: 'Student28',prenom: 'Student28',adresse: 'adresse28'},
    {idClassroom:2, id: 29, nom: 'Student29',prenom: 'Student29',adresse: 'adresse29'},
    {idClassroom:2, id: 30, nom: 'Student30',prenom: 'Student30',adresse: 'adresse30'},
  ]
  constructor() { }

  getOneStudent(id: number) {
    let student: Student
    return student={idClassroom: 1, id: 3,nom: 'student', prenom:'lo', adresse: 'pa'};
  }

  getStudentsFromOneClass(id: number){
    let students: Student[] = [];
    for (const student of this.data) {
      if (student.idClassroom == id) students.push(student)
    }
    return students
  }

  putStudent(studentToEdit: Student) : boolean{
   /* let elementIndex = this.data.findIndex((student => student.id == studentToEdit.id));*/
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id == studentToEdit.id){
        this.data[i] = studentToEdit
        return true
      }
    }
/*    console.log(elementIndex)
    if (elementIndex!= -1){
      this.data[elementIndex].nom = studentToEdit.nom
      this.data[elementIndex].prenom = studentToEdit.prenom
      this.data[elementIndex].adresse = studentToEdit.adresse
      return true
    }*/
    return false;
  }

  postStudent(value: Student) {
    let newStudent: Student = {
      id: this.data.length,
      idClassroom: value.idClassroom,
      nom: value.nom,
      prenom: value.prenom,
      adresse: value.adresse
    }
    this.data.push(newStudent)
    return true
  }
}
