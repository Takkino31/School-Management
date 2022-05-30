import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Classroom} from "../Models/Classroom";

@Injectable({
  providedIn: 'root'
})
export class BehaviorClassroomService {

  constructor() { }
  classroom!:Classroom;
  private dataSource: BehaviorSubject<Classroom> = new BehaviorSubject<Classroom>(this.classroom);
  data: Observable<Classroom> = this.dataSource.asObservable();

  sendData(data: Classroom) {
    console.log('data to send on behavior ',data);
    this.dataSource.next(data);
  }
}
