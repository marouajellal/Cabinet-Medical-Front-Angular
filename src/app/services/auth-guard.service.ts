import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authService: AuthService, private route: Router) { }

  canActivate() {
    if (this.authService.isLogedIn()) {
      return true;
    }
    this.route.navigate(['/login']);
    return false;
  }
}
