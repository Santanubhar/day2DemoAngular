import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductListComponent } from './products/product-list.component';

@NgModule({
  imports:      [BrowserModule, FormsModule],
  declarations: [LoginComponent, WelcomeComponent,ProductListComponent],
  bootstrap:    [WelcomeComponent]      
})
export class AppModule { }
