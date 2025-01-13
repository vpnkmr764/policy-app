import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolicyModule } from './policy/policy.module';

const routes: Routes = [
  {path:'**' , redirectTo: 'policy' , pathMatch: 'full'},
  {path: 'policy' , loadChildren:() => import('./policy/policy.module').then(m => m.PolicyModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
