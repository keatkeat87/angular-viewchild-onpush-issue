import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestTemplateRoutingModule } from './test-template-routing.module';
import { TestTemplateComponent } from './test-template.component';
import { AutocompleteModule } from './autocomplete/autocomplete.module';


@NgModule({
  declarations: [TestTemplateComponent],
  imports: [
    CommonModule,
    TestTemplateRoutingModule,
    AutocompleteModule
  ]
})
export class TestTemplateModule { }
