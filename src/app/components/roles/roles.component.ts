import { HttpClient } from '@angular/common/http';
import { Component , inject, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [FormsModule,CommonModule],
  standalone: true,
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})

export class RolesComponent implements OnInit {
  http=inject(HttpClient);
  role_list:IRole []=[];
  ngOnInit(): void {
    this.get_all_roles();
  }

  get_all_roles() {
    this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((resp:any)=>{
      this.role_list = resp.data;
    })
  }

}
