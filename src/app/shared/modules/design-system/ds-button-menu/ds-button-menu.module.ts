import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DS_ButtonModule } from "../ds-button/ds-button.module";
import { DS_ClickOutsideModule } from '../ds-click-outside/public-api';
import { DS_ButtonMenuComponent } from './ds-button-menu.component';

@NgModule({
  declarations: [DS_ButtonMenuComponent],
  exports: [DS_ButtonMenuComponent],
  imports: [
    CommonModule,
    TranslateModule,
    DS_ClickOutsideModule,
    DS_ButtonModule
  ]
})
export class DS_ButtonMenuModule { }
