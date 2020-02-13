import { Directive, Input, ViewContainerRef, HostListener } from '@angular/core';
import { AutocompleteComponent } from './autocomplete.component';

@Directive({
  selector: '[appAutocompleteTrigger]'
})
export class AutocompleteTriggerDirective {

  constructor(
    private viewContainerRef: ViewContainerRef
  ) { }

  @Input('appAutocompleteTrigger')
  auto: AutocompleteComponent;

  @HostListener('click')
  append() {
    this.viewContainerRef.createEmbeddedView(this.auto.template);
  }

}
