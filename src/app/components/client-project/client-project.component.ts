import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MasteService } from '../../services/maste.service';
import { APIResponse, ClientProject, Employee } from '../../model/interface/role';
import { EmployeeComponent } from '../employee/employee.component';
import { client } from '../../model/class/client';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { AlertComponent } from '../../reusableComponents/alert/alert.component';
import { MyButtonComponent } from '../../reusableComponents/my-button/my-button.component';

@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule,DatePipe,AlertComponent,MyButtonComponent],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit{
  ngOnInit(): void {
    const name=this.firstname();
    this.get_all_client();
    this.get_all_emp();
  }
  client_srv=inject(MasteService);
  emp_list:Employee[]=[];
  client_list:client[]=[];
  firstname=signal("kans");
  project_list=signal<ClientProject[]>([]);




  project_form:FormGroup=new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl("",[Validators.required,Validators.minLength(4),]),
    startDate:new FormControl(""),
    expectedEndDate:new FormControl(""),
    leadByEmpId:new FormControl(""),
    completedDate: new FormControl(""),
    contactPerson: new FormControl(""),
    contactPersonContactNo:new FormControl(""),
    totalEmpWorking:new FormControl(""),
    projectCost:new FormControl(""),
    projectDetails:new FormControl(""),
    contactPersonEmailId:new FormControl(""),
    clientId:new FormControl(""),
  })
  get_all_emp(){
    this.client_srv.get_all_employees().subscribe((res:APIResponse)=>{
      this.emp_list=res.data;
    })
  }
  get_all_client(){
    this.client_srv.get_all_client_projects().subscribe((res:APIResponse)=>{
      this.project_list.set(res.data);
    })
  }

  get_all_client_projects(){
    this.client_srv.get_all_client().subscribe((res:APIResponse)=>{
      this.client_list=res.data;
    })
  }
  change_first_name(){
    if (this.firstname()=="jabba"){
      this.firstname.set("the hut");
    } else {
      this.firstname.set("jabba");
    }
  }
  on_save_project(){
    const form_val=this.project_form.value;
    debugger;
    this.client_srv.add_update_client_project(form_val).subscribe((res:APIResponse)=>{
      if (res.result){
        alert("Project created successfully");
      }else{
        alert(res.message);
      }
    })
  }
}