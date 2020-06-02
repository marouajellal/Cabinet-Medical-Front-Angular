import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() interfaceName;

  data: Observable<any>;
  result: any = [];
  patthname;
  constructor(private userService: UserServiceService, private router : Router) { }

  ngOnInit() {
    this.path();
    if (this.interfaceName === 'Myrdvs1Component') {
      this.getuser(1);
    }
    else{
      this.getuser(7);
    }

  }

  getuser(userId) {
    this.userService.getUserData(userId).subscribe(
      (data) => {
        console.log(data.json() );
        this.result = data.json();
      },
      (error) => {
        console.log(error);
      });
  }

  path() {
    this.patthname = window.location.pathname;
  }

  call1(){
      this.router.navigateByUrl('/refresh', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/patient']);
      });
  }
  call2(){
      this.router.navigateByUrl('/refresh', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/medecin']);
      });
  }
}
