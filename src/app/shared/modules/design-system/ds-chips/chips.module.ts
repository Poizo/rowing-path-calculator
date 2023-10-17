import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { DS_ButtonModule } from '../ds-button/ds-button.module';
import { DS_IconModule } from '../ds-icon/icon.module';
import { DS_ChipsComponent } from './chips.component';


@NgModule({
    declarations: [
        DS_ChipsComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        DS_ButtonModule,
        DS_IconModule
    ],
    exports: [
        DS_ChipsComponent
    ],
    providers: []
})
export class DS_ChipsModule { }
