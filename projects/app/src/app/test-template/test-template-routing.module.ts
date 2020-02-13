import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestTemplateComponent } from './test-template.component';

const routes: Routes = [{ path: '', component: TestTemplateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestTemplateRoutingModule { }
