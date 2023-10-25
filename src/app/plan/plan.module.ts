import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanRoutingModule } from './plan-routing.module';
import { components } from './components';
import { containers } from './containers';
import { services } from './services';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DS_IconModule } from '../shared/modules/design-system/ds-icon/icon.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    PlanRoutingModule,
    TranslateModule,
    DS_IconModule,
    ReactiveFormsModule,
    MatDialogModule
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
