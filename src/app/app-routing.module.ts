import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './view/form/form.component';
import { LoginComponent } from './view/login/login.component';


const routes: Routes =[
  // {path: '/project', component: FormComponent},
  // {path: '/login', component: LoginComponent},
  
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
