import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { RdvService } from '../services/rdv.service';
import { ConsultationService } from '../services/consultation.service';

@Component({
  selector: 'app-rdv-history',
  templateUrl: './rdv-history.component.html',
  styleUrls: ['./rdv-history.component.css']
})
export class RdvHistoryComponent implements OnInit {

  @Input() userId = 1;
  data: Observable<any>;
  result: any [];
  result2 = [];
  length: number;
  myDate = new Date();
  month;
  constructor(private rdvService: RdvService,
              private consultationService: ConsultationService
) { }

  ngOnInit() {
    console.log(this.myDate.getFullYear() + '-' + this.myDate.getMonth() + 1 + '-' + this.myDate.getDay());
    this.month = this.myDate.getMonth() + 1;
    console.log(this.month);
    this.getUserRdv(this.userId, this.myDate.getFullYear() + '-01-20');
    // this.getUserRdv('1', this.myDate.getFullYear() + '-' + this.month + '-' + this.myDate.getDay());
  }

  getUserRdv(userId, date) {
    this.rdvService.getUserRdvsHistory(userId, date).subscribe(
      (data) => {
        console.log('data');
        console.log(data.json());

        this.result = data.json();
        this.length = this.result.length;
        this.result.forEach(element => {
        this.consultations(element.id);
        });

      },
      (error) => {
        console.log(error);
      });
  }



  consultations(rdvid): any {
    this.consultationService.getRdvConsultations(rdvid).subscribe(
      (data2) => {
        console.log('data2');
        console.log(data2.json());
        this.result2.push(data2.json());
        console.log(this.result2);
        console.log(this.result2[0]);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
