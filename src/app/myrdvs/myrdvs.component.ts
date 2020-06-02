import { Router } from '@angular/router';
import { ConsultationService } from '../services/consultation.service';
import { Component, OnInit, Input } from '@angular/core';
import { RdvService } from '../services/rdv.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-myrdvs',
  templateUrl: './myrdvs.component.html',
  styleUrls: ['./myrdvs.component.css']
})
export class MyrdvsComponent implements OnInit {
  @Input() userId = 1;
  data: Observable<any>;
  result: any [];
  result2 = [];
  length: number;
  myDate = new Date();
  month;
  patthname: string;
  constructor(private rdvService: RdvService, private router: Router) { }

  ngOnInit() {
    this.path();
    console.log(this.myDate.getFullYear() + '-' + this.myDate.getMonth() + 1 + '-' + this.myDate.getDay());
    this.month = this.myDate.getMonth() + 1;
    console.log(this.month);
    this.getUserRdv(this.userId, this.myDate.getFullYear() + '-'+ this.month +'-20');
    // this.getUserRdv('1', this.myDate.getFullYear() + '-' + this.month + '-' + this.myDate.getDay());
  }

  getUserRdv(userId, date) {
    this.rdvService.getUserRdvsAfterDate(userId, date).subscribe(
      (data) => {
        console.log('data');
        console.log(data.json());

        this.result = data.json();
        this.length = this.result.length;

      },
      (error) => {
        console.log(error);
      });
  }

  cancelRdv(idRdv) {
    this.rdvService.cancelRdv(idRdv).subscribe(
      (data) => {
        console.log('data');
        console.log('refresh');
        console.log(window.location.pathname);
        this.router.navigateByUrl('/refresh', { skipLocationChange: true }).then(() => {
        this.router.navigate([window.location.pathname]); });
      },
      (error) => {
        console.log(error);
      });
  }

  path() {
    this.patthname = window.location.pathname;
  }

}
