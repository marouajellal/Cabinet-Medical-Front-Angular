import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarVisibilityService {

  visible: boolean;
  constructor() { this.visible = true; }

  hide() { this.visible = false; }
  show() { this.visible = true; }
  reverseVisibility() { this.visible = !this.visible; }
}
