import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolicyRoutingModule } from './policy-routing.module';
import { PolicyComponent } from './policy.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PolicyComponent
  ],
  imports: [
    CommonModule,
    PolicyRoutingModule,FormsModule
  ]
})
export class PolicyModule { }
