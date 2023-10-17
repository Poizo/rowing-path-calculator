import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DS_TextareaComponent } from './textarea.component';
import { LinkyModule } from 'ngx-linky';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    LinkyModule
  ],
  declarations: [DS_TextareaComponent],
  exports: [DS_TextareaComponent],
})
export class DS_TextareaModule { }
