import { Component, ViewChild } from '@angular/core';
import { BannerComponent } from './modules/banner/banner.component';
import { SizeSwitcher } from './directives/size-switcher.directive';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <app-banner #banner></app-banner>
    <input #switcher='sizeSwitcher' sizeSwitcher type="text" placeholder="Input Something...">
    <button (click)="switcher?.toggle()">Alternative button for switcher</button>
    <button (click)="banner?.toggle()">Alternative button for banner</button>
  `
})
export class AppComponent {

  // @ViewChild(BannerComponent) banner: BannerComponent | undefined;

  // Code below is what it will be like if ViewChild is applied to the code in line 9
  // @ViewChild('switcher', {read: SizeSwitcher}) switcher: BannerComponent | undefined;

  title = 'random';
}
