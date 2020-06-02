import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-myrdvs-medecin',
  templateUrl: './myrdvs-medecin.component.html',
  styleUrls: ['./myrdvs-medecin.component.css']
})
export class MyrdvsMedecinComponent implements OnInit {
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
