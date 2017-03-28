import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({ selector: '[repeat]' })
export class RepeatDirective {

    constructor(private _templateRef: TemplateRef<any>,  private _viewContainer: ViewContainerRef) {}

   @Input() set repeat(count: number) {
         for (var i = 0; i < count; i++) {
          this._viewContainer.createEmbeddedView(this._templateRef);

    }
  }

}