import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-rdv-to-patient',
  templateUrl: './add-rdv-to-patient.component.html',
  styleUrls: ['./add-rdv-to-patient.component.css']
})
export class AddRdvToPatientComponent implements OnInit {
  userId;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        console.log(params);
        this.userId = +params.get('id');
      }
    );
  }

}
