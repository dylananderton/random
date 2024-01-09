import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  template: `
  <div class="container">
    <div *ngIf="show === true">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Cakap_Logo.png" alt="cakap logo" class="cakap-logo">
    </div>
    <div class="button-div">
        <button (click)="toggle()" class="show-button">{{ show ? 'hide' : 'show banner'}}</button>
    </div>
</div>
  `,
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  show = false;

  toggle(){
    this.show = !this.show;
  }
}
