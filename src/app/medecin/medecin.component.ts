import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.css']
})
export class MedecinComponent implements OnInit {

  patthname;
  interfaceName2;
  isPatient2: boolean;
  constructor() { }

  ngOnInit() {
    this.interfaceName2 = this.constructor.name;
    this.isPatient2 = false;
    this.path();
  }

  path() {
    this.patthname = window.location.pathname;
  }

}
