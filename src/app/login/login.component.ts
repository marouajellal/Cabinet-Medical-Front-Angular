import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean;
  data: Observable<any>;
  result: any = [];
  id = 1;
  constructor(private router: Router, private authService: AuthService) { }
  signIn(credentials) {
    this.authService.login(credentials)
      .subscribe((data) => {
        console.log(data.json() );
        this.result = data.json();
        if (this.result) {
          this.router.navigate(['/']);
        } else {
          this.invalidLogin = true;
        }
      },
      (error) => {
        console.log(error);
      });
  }
  ngOnInit() {
  }

}
