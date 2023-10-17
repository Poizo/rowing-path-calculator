import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';

import { TranslateModule } from '@ngx-translate/core';

import { DS_IconModule } from "../ds-icon/icon.module";
import { DS_TooltipComponent } from './tooltip.component';


@NgModule({
    declarations: [DS_TooltipComponent],
    exports: [DS_TooltipComponent],
    imports: [
        CommonModule,
        TranslateModule,
        MatTooltipModule,
        DS_IconModule
    ]
})
export class DS_TooltipModule { }
