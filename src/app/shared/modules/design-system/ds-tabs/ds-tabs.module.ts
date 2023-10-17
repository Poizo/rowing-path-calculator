import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { DsTabsComponent } from './ds-tabs.component';


@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        RouterModule
    ],
    declarations: [
        DsTabsComponent
    ],
    exports: [
        DsTabsComponent
    ],
    providers: [
    ]
})
export class Ds_TabsModule { }
