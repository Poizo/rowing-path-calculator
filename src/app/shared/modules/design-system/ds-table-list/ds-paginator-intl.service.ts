import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

/**
 * DS_PaginatorIntlService is an injectable class used ton change the default label used in the Table/list paginator.
 */
@Injectable()
export class DS_PaginatorIntlService extends MatPaginatorIntl {
  override itemsPerPageLabel = 'items per page';
  override nextPageLabel     = 'next page';
  override previousPageLabel = 'previous page';
  public numbersSeparatorLabel = ' - ';
  public fromLengthLabel = ' of ';

  override getRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length === 0 || pageSize === 0) {
      return '0' + this.fromLengthLabel + length;
    }

    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;
    return startIndex + 1 + this.numbersSeparatorLabel + endIndex + this.fromLengthLabel + length;
  };

    public setItemsPerPageLabel(label: string) {
        this.itemsPerPageLabel = label;
    }

    public setNextPageLabel(label: string) {
        this.nextPageLabel = label;
    }

    public setPreviousPageLabel(label: string) {
        this.previousPageLabel = label;
    }

    public setNumbersSeparatorLabel(label: string) {
        this.numbersSeparatorLabel = label;
    }

    public setFromLengthLabel(label: string) {
        this.fromLengthLabel = label;
    }

}
