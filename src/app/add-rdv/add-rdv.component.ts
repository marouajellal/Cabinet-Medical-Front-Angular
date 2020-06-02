import { RdvService } from './../services/rdv.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-rdv',
  templateUrl: './add-rdv.component.html',
  styleUrls: ['./add-rdv.component.css']
})
export class AddRdvComponent implements OnInit {
  @Input() userIdInput = 1;
  sH: number;
  fH: number;
  date;
  option = [];
  hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
  patthname: string;

  constructor(private rdvService: RdvService, private router: Router) { }

  ngOnInit() {
    this.path();
  }

  fHValue(){
    this.fH = this.sH + 1;
  }

  hoursAvailavle(){
    this.option = [];
    this.rdvService.rdvsofday(this.date)
    .subscribe(data => {
      data.json().forEach(element => {
        if (element.starting_hour > 7 && element.starting_hour < 18) {
          switch (element.starting_hour) {
            case 8: {
               this.option[0] = true;
               break;
            }
            case 9: {
               this.option[1] = true;
               break;
            }
            case 10: {
              this.option[2] = true;
              break;
           }
            case 11: {
               this.option[3] = true;
               break;
            }
            case 12: {
               this.option[4] = true;
               break;
            }
            case 13: {
              this.option[5] = true;
              break;
           }
            case 14: {
               this.option[6] = true;
               break;
            }
            case 15: {
              this.option[7] = true;
              break;
           }
            case 16: {
               this.option[8] = true;
               break;
            }
            case 17: {
               this.option[9] = true;
               break;
            }
         }
        }
      });
      console.log("options");
      this.option.forEach(element => console.log(element) );
      },
      error => {
      console.log('error');
      });
  }

  ajouterRdv(rdv){
    const endingHour = +rdv.startingHour + 1;

    console.log(rdv.startingHour);
    console.log(endingHour);
    this.rdvService.addRdv(rdv.appointementDate, rdv.startingHour, endingHour, this.userIdInput)
    .subscribe(data => {
      console.log(data);
      },
      error => {
      console.log('error');
      });
  }

  afterAdd(){
    console.log('yyyyyyyyyy');
    console.log(window.location.pathname);

      this.router.navigateByUrl('/refresh', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/medecin']);
      });

  }

  path() {
    this.patthname = window.location.pathname;
  }
}
