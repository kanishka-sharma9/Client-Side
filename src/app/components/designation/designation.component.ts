import { Component, inject, OnInit } from '@angular/core';
import { MasteService } from '../../services/maste.service';
import { APIResponse, IDesignation } from '../../model/interface/role';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit{
  master_service = inject(MasteService);
  designation_list: IDesignation []=[];

  is_loader: boolean = true;

  
  ngOnInit(): void {
    this.master_service.get_all_designation().subscribe((response:APIResponse)=>{
      this.designation_list = response.data;
      this.is_loader = false;
    },error=>{
      alert("API Error");
      this.is_loader = false;
    })
  }
}