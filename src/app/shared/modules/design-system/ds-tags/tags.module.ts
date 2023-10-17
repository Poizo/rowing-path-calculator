import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { TranslateModule } from '@ngx-translate/core';

import { DS_ButtonModule } from '../ds-button/ds-button.module';
import { DS_TagsComponent } from './tags.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TranslateModule,
        DS_ButtonModule,
        NgSelectModule
    ],
    declarations: [DS_TagsComponent],
    exports: [DS_TagsComponent]
})
export class DS_TagsModule { }
