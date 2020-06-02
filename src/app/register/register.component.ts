import { UserServiceService } from './../services/user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private userService: UserServiceService) { }

  ngOnInit() {
  }

  addUser(credentials){
    console.log(credentials);
    console.log(credentials.firstName);
    this.userService.addUser(
      credentials.firstName,
      credentials.lastName,
      credentials.age,
      credentials.job,
      credentials.mail,
      credentials.password,
      credentials.phoneNumber,
      credentials.address)
    .subscribe(data => {
      console.log('add');
      console.log(data);
      },
      error => {
      console.log('error');
      });
  }
}
