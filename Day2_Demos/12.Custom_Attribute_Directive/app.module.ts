import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MessageDirective } from './message.directive';
import { AppComponent } from './app.component';

@NgModule({
  imports:      [BrowserModule],
  declarations: [AppComponent, MessageDirective],
  bootstrap:    [AppComponent]      
})
export class AppModule { }
