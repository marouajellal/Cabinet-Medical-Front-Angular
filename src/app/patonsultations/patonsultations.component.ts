import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ConsultationService } from '../services/consultation.service';
import { RdvService } from '../services/rdv.service';

@Component({
  selector: 'app-patonsultations',
  templateUrl: './patonsultations.component.html',
  styleUrls: ['./patonsultations.component.css']
})
export class PatonsultationsComponent implements OnInit {

  @Input() userIdInput = 1;
  data: Observable<any>;
  result: any [];
  result2 = [];
  length: number;
  myDate = new Date();
  month;

  constructor(private rdvService: RdvService,
              private consultationService: ConsultationService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        console.log(params);
        this.userIdInput = +params.get('id');
      }
    );
    console.log(this.myDate.getFullYear() + '-' + this.myDate.getMonth() + 1 + '-' + this.myDate.getDay());
    this.month = this.myDate.getMonth() + 1;
    console.log(this.month);
    this.getUserRdv(this.userIdInput, this.myDate.getFullYear() + '-12-' + this.myDate.getDay());
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
