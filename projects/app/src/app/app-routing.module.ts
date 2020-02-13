import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'test-template', pathMatch: 'full' },
  { path: 'test-template', loadChildren: () => import('./test-template/test-template.module').then(m => m.TestTemplateModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
