import { Observable } from 'rxjs';
import { RdvService } from './../../services/rdv.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.css']
})
export class RdvComponent implements OnInit {
  data: Observable<any>;
  result: any [];
  constructor(private rdvService: RdvService) { }

  ngOnInit() {
    this.getallrdvs();
  }

  getUserRdvs(userId){
    this.rdvService.getUserRdvs(userId).subscribe(
      (data) => {
        console.log(data.json());
        this.result = data.json();
      },
      (error) => {
        console.log(error);
      });
  }
  getallrdvs(){
    this.rdvService.getallrdvs().subscribe(
      (data) => {
        console.log(data.json());
        this.result = data.json();
      },
      (error) => {
        console.log(error);
      });
  }

}
