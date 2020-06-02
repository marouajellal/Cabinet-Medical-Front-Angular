import { Component, OnInit } from '@angular/core';
import { NavbarVisibilityService } from '../services/navbar-visibility.service';

@Component({
  selector: 'app-myrdvs1',
  templateUrl: './myrdvs1.component.html',
  styleUrls: ['./myrdvs1.component.css']
})
export class Myrdvs1Component implements OnInit {

  patthname;
  interfaceName;
  isPatient;
  constructor(public navbarVisibilityService: NavbarVisibilityService) {
  }

  ngOnInit() {
    this.navbarVisibilityService.hide();
    this.interfaceName = this.constructor.name;
    this.isPatient = true;
    this.path();
  }

  path() {
    this.patthname = window.location.pathname;
  }

}
