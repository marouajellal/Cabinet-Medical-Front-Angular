import { RdvService } from './../services/rdv.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-con',
  templateUrl: './add-con.component.html',
  styleUrls: ['./add-con.component.css']
})
export class AddConComponent implements OnInit {

  constructor(private rdvService: RdvService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  ajouterCon(description,userId){
    this.rdvService.addConsultation(description, userId)
    .subscribe(data => {
      console.log(data);
      },
      error => {
      console.log('error');
      });
  }

}
