import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RepeatDirective } from './repeat.directive';


import { AppComponent } from './app.component';
@NgModule({
  imports:      [BrowserModule],
  declarations: [AppComponent, RepeatDirective],
  bootstrap:    [AppComponent]
       
})
export class AppModule { }
