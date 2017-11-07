import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGaurdService implements CanActivate, CanLoad{

  constructor(private authServ: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
  	return this.authServ.isAuth();
  }

  canLoad(){
  	return this.authServ.isAuth();
  }
}
