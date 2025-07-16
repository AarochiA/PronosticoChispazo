import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  //debugger;

  const router = inject(Router);

  const localData = sessionStorage.getItem('currentSesion');

  if (localData != null) {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};
