import { APP_ID, Component, OnInit, inject } from '@angular/core';
import { client } from '../../model/class/client';
import { FormsModule } from '@angular/forms';
import { MasteService } from '../../services/maste.service';
import { APIResponse } from '../../model/interface/role';
import { AsyncPipe, UpperCasePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { observeNotification } from 'rxjs/internal/Notification';
import { AlertComponent } from '../../reusableComponents/alert/alert.component';
import { MyButtonComponent } from '../../reusableComponents/my-button/my-button.component';

@Component({
  selector: 'app-client',
  imports: [FormsModule,UpperCasePipe,AlertComponent,MyButtonComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  client_obj: client = new client();
  client_service = inject(MasteService);
  client_list: client[] = [];

  user_list$:Observable<any> = new Observable<any>;

  ngOnInit():void {
    this.load_client();
    // this.save_client();
    this.user_list$=this.client_service.get_all_users_async();
  }
  
  load_client() {
    this.client_service.get_all_client().subscribe((response: APIResponse) => {
      this.client_list = response.data;
    })
  }
  save_client(data:string) {
    this.client_service.add_update_client(this.client_obj).subscribe((response: APIResponse) => {
      if (response.result) {
        alert("client created successfully");
        this.load_client();
        this.client_obj = new client();
      } else {
        alert("client creation failed");
      }
    })
  }
  delete_client(id: number) {
    let is_delete = confirm("are you sure ?");
    if (is_delete) {
      this.client_service.delete_client_by_id(id).subscribe((response: APIResponse) => {
        if (response.result) {
          alert("client deleted successfully");
          this.load_client();
        } else {
          alert(response.message);
        }
      })
    }
  }
  edit_client_data(client:client) {
    this.client_obj = client;
  }
}
