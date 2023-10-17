import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanRoutingModule } from './plan-routing.module';
import { components } from './components';
import { containers } from './containers';
import { services } from './services';

@NgModule({
  imports: [
    CommonModule,
    PlanRoutingModule,
  ],
  declarations: [
    ...components,
    ...containers,
  ],
  providers: [
    ...services,
  ]
})
export class PlanModule {}
