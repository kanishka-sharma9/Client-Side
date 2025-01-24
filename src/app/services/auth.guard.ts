import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router=inject(Router);
  
  const local_user=localStorage.getItem("EMP-ERP");
  if (local_user != null){
    return true;
  } else{
    router.navigateByUrl("/login");
    return false;
  }
};
