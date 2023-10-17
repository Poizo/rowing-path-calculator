export class DS_SelectModalModule { }
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';

import { TranslateModule } from '@ngx-translate/core';

import { DS_ButtonModule } from '../ds-button/public-api';
import { DS_CheckboxModule } from '../ds-checkbox/checkbox.module';
import { DS_ChipsModule } from '../ds-chips/public-api';
import { DS_TextfieldModule } from '../ds-textfield/public-api';
import { DS_SelectModalComponent } from './select-modal.component';
import { DS_SelectionModalComponent } from './selection-modal/selection-modal.component';

const materialModules = [
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatSortModule,
    MatDialogModule
];

@NgModule({
    declarations: [
        DS_SelectModalComponent,
        DS_SelectionModalComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        TranslateModule,
        DS_ButtonModule,
        DS_ChipsModule,
        DS_TextfieldModule,
        DS_CheckboxModule,
        ...materialModules
    ],
    exports: [
        DS_SelectModalComponent
    ]
})
