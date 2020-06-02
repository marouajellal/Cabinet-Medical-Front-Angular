import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {

  data: Observable<any>;
  result: any = [];
  userId;

  getData(userId) {
    this.userService.getUserData(userId).subscribe(
      (data) => {
        console.log(data.json() );
        this.result = data.json();
      },
      (error) => {
        console.log(error);
      });
  }

  constructor(private userService: UserServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        console.log(params);
        this.userId = +params.get('id');
      }
    );
    console.log(this.route.paramMap);
    console.log(this.userId);
    this.getData( this.userId );
  }



}
