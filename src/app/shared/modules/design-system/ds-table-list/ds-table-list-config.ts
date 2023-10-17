import { Observable } from 'rxjs';
import { DS_LabelWithParam } from './../interfaces/label-with-param.interface';
import { InjectionToken, TemplateRef } from "@angular/core";
import { MatTableDataSource } from '@angular/material/table';
import { Sort } from '@angular/material/sort';
import { PageEvent } from '@angular/material/paginator';

export interface pageSortEventInterface {
    sort?: Sort;
    page?: PageEvent;
}
export interface PaginatedDatasourceInterface {
    datasource: unknown[];
    pagination: {
        /**
         * The length of the total number of items that are being paginated.
         */
        length: number;
        /**
         * The zero-based page index of the displayed list of items.
         */
        pageIndex: number;
    }
}

export interface TableListColumnConfig {
    /**
     * The column name should be in the `displayedColumns`
     */
    columnDef: string;
    /**
     * Can the column be pinned?
     */
    isPinnable?: boolean;
    /**
     * Is the column pinned?
     */
    isPinned?: boolean;
    /**
     * Is the column pinned to the right end of the table?
     */
    isPinnedRight?: boolean;
    /**
     * Can the column be drag and drop for reorder?
     */
    isDisabledReorderable?: boolean;
    /**
     * Is the column showed or is it hide?
     */
    isNotDisplayed?: boolean;
    /**
     * Is this column sortable?
     */
    isSortable?: boolean;
    /**
     * A description for the sort element, such as "Sort by last name"
     */
    sortActionDescription?: DS_LabelWithParam;
    /**
     * The value write, in the header cell
     */
    headValue: DS_LabelWithParam;
    /**
     * The property of the element that should be displayed in this column
     * Cannot be used with the template property
     */
    elementProperty?: string;
    /**
     * A Template to display in the body cell of the current column
     * Cannot be used with elementProperty
     */
    template?: TemplateRef<unknown>
}

export type TableListConfig = {
    /**
     * Determine if the table/list is <table></table> or not
     * It is mostly important for styling the elements
     */
    isHtmlTable?: boolean;
    /**
     * Determine if the table/list is sortable
     */
    isTableSortable?: boolean;
    /**
     * Determine if the columns of table/list can be drag and drop for reordering them
     */
    isDisabledColumnsReorderable?: boolean;
    /**
     * Determine if there's columns action button in the table/list footer
     */
    isColumnActionInFooter?: {
        /**
         * Determine if we can reorder columns from the columns action panel
         */
        canReorder?: boolean;
        /**
         * Determine if we can toggle hide/show columns from the columns action panel
         */
        canHideAndShow?: boolean;
    };
    /**
     * Whether to disable the user from clearing the sort by finishing the sort direction cycle.
     */
    disableSortClear?: boolean;
    /**
     * An array of data to display in the table/list
     * If you provide a `serverSideDatasourceCallback` this datasource will be read only the first time
     */
    datasource?: unknown[] | MatTableDataSource<unknown>;

    /**
     * Does the component emit when sort change
     *
     * @type {boolean}
     */
    sortEmitter?: boolean;

    /**
     * Does the component emit when page change
     *
     * @type {boolean}
     */
    pageEmitter?: boolean;

    /**
     * Callback to update datasource from the outside
     */
    serverSideDatasourceCallback?: (pageSort: pageSortEventInterface) => Observable<PaginatedDatasourceInterface>;

    /**
     * Array of data to configure the header cells and the body cells
     */
    columns?: Array<TableListColumnConfig>
    pagination?: {
        /**
         * Number of items to display on a page.
         */
        pageSize?: number;
        /**
         * The length of the total number of items that are being paginated.
         */
        length?: number;
        /**
         * The zero-based page index of the displayed list of items.
         */
        pageIndex?: number;
        /**
         * The set of provided page size options to display to the user.
         */
        pageSizeOptions?: number[];
        /**
         * Whether to hide the page size selection UI from the user.
         */
        hidePageSize?: boolean;
        /**
         * Whether to show the first/last buttons UI to the user.
         */
        showFirstLastButtons?: boolean;
    }
};

export const TABLE_LIST_CONFIG = new InjectionToken<TableListConfig>('TABLE_LIST_CONFIG');
