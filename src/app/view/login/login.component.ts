import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username :any
password : any
invalidLogin= false
user : any

  constructor(private router: Router,  private api: ApiService) { }

  ngOnInit(): void {
  }

  checkLogin(){

    this.api.getUser(this.username, this.password).subscribe({
    next:(res)=>{
    this.user = res;
    console.log(this.user);
    },
    // error: (err)=>{
    // alert("Error while fetching the Records!!")
    // }
    })
  }




}
