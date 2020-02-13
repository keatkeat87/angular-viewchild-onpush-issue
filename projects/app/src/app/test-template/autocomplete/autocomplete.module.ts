import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from './autocomplete.component';
import { AutocompleteTriggerDirective } from './autocomplete-trigger.directive';
import { SelectionListModule } from '../selection-list/selection-list.module';



@NgModule({
  declarations: [AutocompleteComponent, AutocompleteTriggerDirective],
  imports: [
    CommonModule,
    SelectionListModule
  ],
  exports: [AutocompleteComponent, AutocompleteTriggerDirective]
})
export class AutocompleteModule { }
