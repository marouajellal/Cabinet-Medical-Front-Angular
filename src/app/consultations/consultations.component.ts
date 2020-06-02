import { Component, OnInit } from '@angular/core';
import { ConsultationService } from '../services/consultation.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consultations',
  templateUrl: './consultations.component.html',
  styleUrls: ['./consultations.component.css']
})
export class ConsultationsComponent implements OnInit {

  data: Observable<any>;
  result: any [];
  rdvId;
  constructor(private consultationService: ConsultationService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(window.location.pathname);
    console.log(window.location.pathname.startsWith('/consultations'));
    this.route.paramMap.subscribe(
      params => {
        console.log(params);
        this.rdvId = +params.get('rdvId');
      }
    );
    this.consultations(this.rdvId);
  }

  consultations(rdvid): any {
    this.consultationService.getRdvConsultations(rdvid).subscribe(
      (data) => {
        console.log('data2');
        console.log(data.json());
        this.result = data.json();
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
