import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileLinksVisibilityService {
  calendarLinkVisibility: boolean;
  myRdvsLinkVisibility: boolean;
  historyLinkVisibility: boolean;
  constructor() {
    this.calendarLinkVisibility = true;
    this.myRdvsLinkVisibility = true;
    this.historyLinkVisibility = true;
   }

   show(linkVisibility: boolean) { linkVisibility = true; }
   hide(linkVisibility: boolean) { linkVisibility = false; }
   reverseVisibility(linkVisibility: boolean) { linkVisibility = !linkVisibility; }
}
