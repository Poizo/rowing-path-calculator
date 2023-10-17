import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DS_ClickOutsideDirective } from './click-outside.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DS_ClickOutsideDirective],
  exports: [DS_ClickOutsideDirective],
})
export class DS_ClickOutsideModule { }
