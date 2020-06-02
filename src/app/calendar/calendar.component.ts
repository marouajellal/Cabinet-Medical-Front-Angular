import { Router } from '@angular/router';
import { AddRdvComponent } from './../add-rdv/add-rdv.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, AfterContentInit, Input } from '@angular/core';
import { EventSettingsModel, View } from '@syncfusion/ej2-angular-schedule';
import { RdvService } from '../services/rdv.service';
import { Observable, Subject } from 'rxjs';
import { UserServiceService } from '../services/user-service.service';
// import { L10n, loadCldr } from '@syncfusion/ej2-base';
// import * as numberingSystems from 'cldr-data/supplemental/numberingSystems.json';
// import * as gregorian from 'cldr-data/main/af-NA/ca-gregorian.json';
// import * as numbers from 'cldr-data/main/af-NA/numbers.json';
// import * as timeZoneNames from 'cldr-data/main/af-NA/timeZoneNames.json';

// loadCldr(numberingSystems, gregorian, numbers, timeZoneNames);
// L10n.load({
//     'fr-CH': {
//         'schedule': {
//             'day': 'journée',
//             'week': 'La semaine',
//             'workWeek': 'Semaine de travail',
//             'month': 'Mois',
//             'today': 'Aujourd`hui'
//         }
//     }
// });

@Component({
  selector: 'app-calendar',
  // template: '<ejs-schedule></ejs-schedule>',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  @Input() isPatient: boolean;
  bla = [{}];
  public setDate: Date = new Date('2020, 01, 20');
  public scheduleViews: View[] = ['WorkWeek', 'Day', 'Month'];
  public startHour = '8:00';
  public endHour = '18:00';
  patthname;
  data: Observable<any>;
  result: any [];
  public eventObject: EventSettingsModel ;
  subject;
  constructor(
    private dialog: MatDialog,
    private rdvService: RdvService,
    private router: Router,
    private userService: UserServiceService
    ) { }

  ngOnInit() {
    this.getallrdvs();
    this.event();
    this.path();
  }

  path() {
    this.patthname = window.location.pathname;
  }

  openDialog() {
    console.log('open');
    this.dialog.open(AddRdvComponent);
    this.dialog.afterAllClosed.subscribe(() => {
      console.log('refresh');
      console.log(window.location.pathname);
      this.router.navigateByUrl('/refresh', { skipLocationChange: true }).then(() => {
        this.router.navigate([window.location.pathname]);
    });
  });
  }

  reconstruction(rdv) {
    console.log(rdv);
    this.subject = 'Occupé';
    if (!this.isPatient && this.patthname === '/medecin') {
      this.userService.userByRdvId(rdv.id).subscribe(
        (data1) => {
          console.log('data1');
          console.log(data1.json());
          this.bla.push({
            Subject: data1.json().first_name + ' ' + data1.json().last_name,
            StartTime: new Date(rdv.date + ' ' + rdv.starting_hour + ':00'),
            EndTime: new Date(rdv.date + ' ' + rdv.finishing_hour + ':00')
          });
        },
        (error) => {
          console.log(error);
        });
    } else {
      this.bla.push({
        Subject: 'Occupé',
        StartTime: new Date(rdv.date + ' ' + rdv.starting_hour + ':00'),
        EndTime: new Date(rdv.date + ' ' + rdv.finishing_hour + ':00')
      });
    }
  }
  reconstructionForEach() {
    this.result.forEach(element => this.reconstruction(element));
  }
  getallrdvs() {
    this.rdvService.getallrdvs().subscribe(
      (data) => {
        console.log(data.json());
        this.result = data.json();
        this.reconstructionForEach();
      },
      (error) => {
        console.log(error);
      });
  }
  event() {
    console.log(this.bla);
    this.eventObject = {
      dataSource: this.bla
    };
  }
}
