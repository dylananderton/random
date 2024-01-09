import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './modules/banner/banner.component';
import { SizeSwitcher } from './directives/size-switcher.directive';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SizeSwitcher
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
