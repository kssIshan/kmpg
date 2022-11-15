import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

export class User{
  constructor(public status: string, ){}
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor( private httpClient:HttpClient) { }


  // authenticate(username : any, password : any){
  //   const headers = new HttpHeaders({Authorization: 'Basic' + btoa(username + ':' + password)});
  //   return this.httpClient.get<User>('http://localhost:8080/employees/validateLogin', {headers}).pipe(
  //     map(
  //       userData =>{
  //         sessionStorage.setItem('username',username);
  //         return userData;
  //       }
  //     )
  //   );
    
  // }
  isUserLoggedIn(){
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut(){
    sessionStorage.removeItem('username')
  }
}
