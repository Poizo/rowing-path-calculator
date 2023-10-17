import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DS_ButtonComponent } from './ds-button.component';
import { TranslateModule } from '@ngx-translate/core';
import { DS_IconModule } from "../ds-icon/icon.module";

@NgModule({
    declarations: [DS_ButtonComponent],
    exports: [DS_ButtonComponent],
    imports: [
        CommonModule,
        TranslateModule,
        DS_IconModule
    ]
})
export class DS_ButtonModule { }
