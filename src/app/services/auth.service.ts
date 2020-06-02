import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ResponseOptions, Http } from '@angular/http';
import { empty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  LogedIn = false;
  constructor(private http: Http) { }
  login(credentials) {
    if (credentials.email === 'simo' && credentials.password === 'simo'  ) {
      this.LogedIn = true;
      return this.http.get('http://localhost:8080/user/1', { withCredentials: true });
    }
    this.LogedIn = false;
    return empty();
  }
  isLogedIn() {
    return this.LogedIn;
  }
}
