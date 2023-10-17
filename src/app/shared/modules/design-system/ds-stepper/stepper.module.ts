import { CdkStepperModule } from '@angular/cdk/stepper';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { DS_ButtonMenuModule } from '../ds-button-menu/ds-button-menu.module';
import { DS_StepperComponent } from './stepper.component';


@NgModule({
    declarations: [
        DS_StepperComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        DS_ButtonMenuModule,
        CdkStepperModule
    ],
    exports: [
        DS_StepperComponent,
        CdkStepperModule
    ],
    providers: [],
})
export class DS_StepperModule {}
