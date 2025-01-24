import { Component } from '@angular/core';
import { DesignationComponent } from '../designation/designation.component';
import { RolesComponent } from '../roles/roles.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-master',
  imports: [DesignationComponent,RolesComponent,CommonModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {
  current_component:string="";

  change_current_component_val(name:string){
    this.current_component=name;
  }
    
}
