import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink,RouterOutlet,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login_obj:any={
    email:"",
    password:"",
  };
  router=inject(Router);

  on_login(){
    if (this.login_obj.email=='admin@gmail.com' && this.login_obj.password=="HTMKC"){
      this.router.navigateByUrl("/client");
      localStorage.setItem("EMP-ERP",this.login_obj.email);
    }else{
      alert("wrong credential");
    }
  }
  
}