import { UserServiceService } from './../services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

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
  constructor(private userService: UserServiceService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        console.log(params);
        this.userId = +params.get('userId');
      }
    );
    this.getData( this.userId );
  }



}
