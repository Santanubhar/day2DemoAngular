import { Component } from '@angular/core';

@Component({
   selector: 'my-app',
   template: ` 
        <h1> Welcome to Angular 2</h1>
        <h2> Course Name: {{ courseName }}</h2>
    `
})
export class AppComponent
{
    courseName: string = "Angular 2";
}






