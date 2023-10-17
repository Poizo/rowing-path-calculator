import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DS_CheckboxModule } from '../ds-checkbox/checkbox.module';
import { DS_ClickOutsideModule } from './../ds-click-outside/click-outside.module';
import { DS_IconModule } from './../ds-icon/icon.module';
import { DS_PaginatorIntlService } from './ds-paginator-intl.service';
import { TABLE_LIST_CONFIG, TableListConfig } from './ds-table-list-config';
import { DsTableListComponent } from './ds-table-list.component';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        DragDropModule,
        MatTableModule,
        MatSortModule,
        DS_IconModule,
        DS_CheckboxModule,
        DS_ClickOutsideModule,
        MatPaginatorModule
    ],
    declarations: [
        DsTableListComponent
    ],
    exports: [
        DsTableListComponent
    ],
    providers: [
    ]
})
export class Ds_TabLeListModule {
    public static forRoot(config: TableListConfig): ModuleWithProviders<Ds_TabLeListModule> {

        const tableListConfig: TableListConfig = {
            isHtmlTable: true,
            ...config,
            pagination: {
                pageSize: 5,
                pageIndex: 0,
                length: 0,
                pageSizeOptions: [5, 10, 20],
                hidePageSize: false,
                showFirstLastButtons: true,
                 ...config.pagination
            }
        };

        const paginatorIntlService = new DS_PaginatorIntlService();

        return {
            ngModule: Ds_TabLeListModule,
            providers: [
                {
                    provide: TABLE_LIST_CONFIG,
                    useValue: tableListConfig
                },
                {
                    provide: MatPaginatorIntl,
                    useValue: paginatorIntlService
                },
                {
                    provide: DS_PaginatorIntlService,
                    useValue: paginatorIntlService
                }
            ]
        }
    }

    public static forChild(config: TableListConfig): ModuleWithProviders<Ds_TabLeListModule> {

        const tableListConfig: TableListConfig = {
            isHtmlTable: true,
            ...config,
            pagination: {
                pageSize: 5,
                pageIndex: 0,
                length: 0,
                pageSizeOptions: [5, 10, 20],
                hidePageSize: false,
                showFirstLastButtons: true,
                 ...config.pagination
            }
        };

        return {
            ngModule: Ds_TabLeListModule,
            providers: [
                {
                    provide: TABLE_LIST_CONFIG,
                    useValue: tableListConfig
                }
            ]
        }
    }
}
