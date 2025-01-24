import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterLink,RouterOutlet,FormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  router=inject(Router);
  on_logout(){
    this.router.navigateByUrl("/login");
    localStorage.removeItem("EMP-ERP");
  }
}
