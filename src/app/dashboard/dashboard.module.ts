import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { components } from './components';
import { containers } from './containers';
import { services } from './services';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    ...components,
    ...containers,
  ],
  providers: [
    ...services,
  ]
})
export class DashboardModule {}
