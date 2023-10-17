import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { DS_ButtonModule } from '../ds-button/ds-button.module';
import { DS_RepeatComponent } from './repeat.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TranslateModule,
        DS_ButtonModule
    ],
    declarations: [DS_RepeatComponent],
    exports: [DS_RepeatComponent]
})
export class DS_RepeatModule { }
