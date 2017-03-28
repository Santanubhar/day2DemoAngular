import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h3>Structural Directive</h3>
    <p *repeat="5">I am being repeated...</p>
`
  
})
export class AppComponent { }
