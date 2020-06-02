import { NavbarVisibilityService } from './../services/navbar-visibility.service';
import { LoginComponent } from './../login/login.component';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  patthname;
  constructor(
    private authService: AuthService,
    private dialog: MatDialog,
    private router: Router,
    public navbarVisibilityService: NavbarVisibilityService
    ) { }

  ngOnInit() {
    this.path();
  }

  path() {
    this.patthname = window.location.pathname;
  }

  openDialog() {
    console.log('open');
    this.dialog.open(LoginComponent);
    this.dialog.afterAllClosed.subscribe(() => {
      console.log('refresh');
      console.log(window.location.pathname);
      this.router.navigate(['/patient']);
    });
  }
}
