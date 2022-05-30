import { Injectable } from '@angular/core';
import {Classroom} from "../Models/Classroom";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {
  data: Classroom[] = [
    {id: 1, className: 'Tle S2A1', desc: 'lorem ipsum1'},
    {id: 2, className: 'Tle S2A2', desc: 'lorem ipsum2'},
    {id: 3, className: 'Tle S2A3', desc: 'lorem ipsum3'},
    {id: 4, className: 'Tle S2A4', desc: 'lorem ipsum4'},
    {id: 5, className: 'Tle S2A5', desc: 'lorem ipsum5'},
    {id: 6, className: 'Tle S2A6', desc: 'lorem ipsum6'},
    {id: 7, className: 'Tle S2A7', desc: 'lorem ipsum7'},
    {id: 8, className: 'Tle S2A8', desc: 'lorem ipsum8'},
    {id: 9, className: 'Tle S2A9', desc: 'lorem ipsum9'},
    {id: 10, className: 'Tle S2A10', desc: 'lorem ipsum10'},
    {id: 21, className: 'Tle S2A21', desc: 'lorem ipsum21'},
    {id: 22, className: 'Tle S2A22', desc: 'lorem ipsum22'},
    {id: 23, className: 'Tle S2A23', desc: 'lorem ipsum23'},
    {id: 24, className: 'Tle S2A24', desc: 'lorem ipsum24'},
    {id: 25, className: 'Tle S2A25', desc: 'lorem ipsum25'},
    {id: 26, className: 'Tle S2A26', desc: 'lorem ipsum26'},
    {id: 27, className: 'Tle S2A27', desc: 'lorem ipsum27'},
    {id: 28, className: 'Tle S2A28', desc: 'lorem ipsum28'},
    {id: 29, className: 'Tle S2A29', desc: 'lorem ipsum29'},
    {id: 30, className: 'Tle S2A30', desc: 'lorem ipsum30'},
    {id: 31, className: 'Tle S2A31', desc: 'lorem ipsum31'},
    {id: 32, className: 'Tle S2A32', desc: 'lorem ipsum32'},
    {id: 33, className: 'Tle S2A33', desc: 'lorem ipsum33'},
    {id: 34, className: 'Tle S2A34', desc: 'lorem ipsum34'},
    {id: 35, className: 'Tle S2A35', desc: 'lorem ipsum35'},
    {id: 36, className: 'Tle S2A36', desc: 'lorem ipsum36'},
    {id: 37, className: 'Tle S2A37', desc: 'lorem ipsum37'},
    {id: 38, className: 'Tle S2A38', desc: 'lorem ipsum38'},
    {id: 39, className: 'Tle S2A39', desc: 'lorem ipsum39'},
    {id: 40, className: 'Tle S2A40', desc: 'lorem ipsum40'}
  ]
  constructor(
    private httpClient: HttpClient
  ) { }

  sendData():Classroom[]{
    return this.data;
  }

  getOneClassroom(id: number): Classroom|void{
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id == id) {
        let classroom =  this.data[i]
        i = this.data.length
        return classroom
      }
    }
  }

  postClassroom(classroom: any){
    const last = (this.data.length-1)
    const id = this.data[last]['id']+1
    let classroomToAdd: Classroom = {
      'id': id,
      desc: classroom.desc,
      className: classroom.className
    }
    console.log(classroomToAdd)
    this.data.push(classroomToAdd);
    return true;
  }

  putClassroom(classroom: Classroom): boolean {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id == classroom.id) {
        this.data[i].desc = classroom.desc
        this.data[i].className = classroom.className
        return true
      }
    }
    return false
  }

  removeClassroom(idClassroom: number){
    this.data.forEach((classroom,index)=>{
      if(classroom.id==idClassroom) this.data.splice(index,1)
    });
  }
}
