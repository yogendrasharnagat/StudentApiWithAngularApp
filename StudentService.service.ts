import { Injectable } from '@angular/core';
import {Student} from './student.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  formData:Student;
  list:Student[];
  readonly rootURL="http://localhost:55731/api";

  constructor(private http:HttpClient) { }

  PostStudentInsert(formData:StudentService)
  {
     return this.http.post(this.rootURL+'/student',formData);
  }

  GetStudentAll()
  {
     this.http.get(this.rootURL+'/student').toPromise().then(res=>this.list= res as Student[]);
  }

  PutStudentUpdateById(formData:StudentService)
  {
      return this.http.put(this.rootURL+'/student/'+this.formData.StudentId,formData);
  }

  DeleteStudentById(id:number)
  {
      return this.http.delete(this.rootURL+'/student/'+id);
  }

}
