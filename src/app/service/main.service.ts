import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor( private http:HttpClient) { }

  getStudentsList(){
    return this.http.get(environment.apiUrl+"/students").toPromise();
  }
  addNewStudent(data:any){
    return this.http.post(environment.apiUrl+"/students/add-new-student",data).toPromise();
  }
  updateStudent(data:any){
    return this.http.put(environment.apiUrl+"/students/update-student",data).toPromise();
  }
  deleteStudent(Sid:any){
    return this.http.delete(environment.apiUrl+"/students/delete-student/"+Sid).toPromise();
  }
}
