import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponse } from '../model/interface/role';
import { Observable } from 'rxjs';
import { client } from '../model/class/client';
import { environment } from '../../environments/environment.development';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class MasteService {

  constructor(private http:HttpClient) {}

  get_all_designation(){
    return this.http.get<APIResponse>(environment.API_URL+"GetAllDesignation");
  }
  get_all_users_async(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

  get_all_client():Observable<APIResponse>{
    return this.http.get<APIResponse>(environment.API_URL+Constant.API_METHOD.GET_ALL_CLIENTS);
  }
  get_all_employees():Observable<APIResponse>{
    return this.http.get<APIResponse>(environment.API_URL+Constant.API_METHOD.GET_ALL_EMPLOYEE);
  }
  add_update_client(obj:client):Observable<APIResponse>{
    return this.http.post<APIResponse>(environment.API_URL+"AddUpdateClient",obj);
  }
  delete_client_by_id(id:number):Observable<APIResponse>{
    return this.http.delete<APIResponse>(environment.API_URL+"DeleteClientByClientId?clientId="+id);
  }
  add_update_client_project(obj:client):Observable<APIResponse>{
    return this.http.post<APIResponse>(environment.API_URL+"AddUpdateClientProject",obj);
  }
  get_all_client_projects():Observable<APIResponse> {
    return this.http.get<APIResponse>(environment.API_URL+"GetAllClientProjects");
  }
}