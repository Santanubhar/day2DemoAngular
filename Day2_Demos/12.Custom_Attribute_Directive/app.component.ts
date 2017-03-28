import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h3>Attribute Directive</h3>
    <p [showMessage]="myMessage">Click Here</p>
`
})
export class AppComponent {  
    myMessage: string = "Hello, I am from attribute directive";
}
