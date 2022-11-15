import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  


  constructor( private http : HttpClient) { }

  getProject(){
      return this.http.get<any>("http://localhost:8080/api/v1/project/getProject");
    }
    getUser(username: any, password: any){
      const headers = new HttpHeaders({Authorization: 'Basic' + btoa(username + ':' + password )});
      return this.http.get<any>("http://localhost:8080/api/v1/user/getUser",{headers});
    }

    updateProject(data : any){
      return this.http.put<any>("http://localhost:8080/api/v1/project/updateProject",data);
    }
}
