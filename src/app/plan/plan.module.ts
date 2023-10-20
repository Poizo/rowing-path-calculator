import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanRoutingModule } from './plan-routing.module';
import { components } from './components';
import { containers } from './containers';
import { services } from './services';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PlanRoutingModule,
    TranslateModule,
    ReactiveFormsModule
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
