import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {ApiService} from 'src/app/api.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  projectFullDetails: any[]=[];
  project: any;
  description: any;
  proDescription :any;


  constructor( private api : ApiService, private fb : FormBuilder) { }

  ngOnInit(): void {
  this.getProject();
  }

  projectForm = new FormGroup({
  projectName: new FormControl(""),
  description: new FormControl(""),
  clientName: new FormControl(""),
  division : new FormControl(""),
  projectManager : new FormControl(""),
  
 

  


  });


  

  projectFormSubmit(){
    console.log(this.projectForm)
    if(this.projectForm){
      this.api.updateProject(this.projectForm.value).subscribe({
        next:(res)=>{
          alert:("Project Form is Update!!!")
          this.projectForm.reset();
          
        },
        // error:()=>{
        //   alert("Error while adding the Item")
        // }
      })
    }

   
 
 



  }

  getProject(){
    this.api.getProject().subscribe({
    next:(res)=>{
    this.projectFullDetails = res;
    console.log(this.projectFullDetails);
    },
    // error: (err)=>{
    // alert("Error while fetching the Records!!")
    // }
    })
  }


  getDescription(){
  console.log(this.project)
  this.projectFullDetails.forEach((item:any)=>{
  if(this.project==item.projectName){


  this.description=item.projectDescription
  console.log(this.description);
  console.log(item.projectDescription)

  }
  })

  }

}
