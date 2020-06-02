import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  patthname: string;
  title = 'cabinet';

  ngOnInit() {
    this.path();
  }

  path() {
    this.patthname = window.location.pathname;
  }
}
