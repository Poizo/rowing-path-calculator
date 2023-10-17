import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateAdapter, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { TranslateModule } from '@ngx-translate/core';
import { CustomDateAdapter } from './custom-date.adapter';
import { DS_DatepickerComponent } from './datepicker.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule
    ],
    declarations: [DS_DatepickerComponent],
    exports: [DS_DatepickerComponent],
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'fr-BE' },
        { provide: DateAdapter, useClass: CustomDateAdapter },
    ]
})
export class DS_DatepickerModule { }
