hModel } from '../../advanced-search/public-api';
import { OrderModel } from './order.models';
import { PageModel } from './page.models';

export class DataQueryModel<ColumnKeys = string> {
    filters?: SearchModel<ColumnKeys>;
    order?: OrderModel;
    pagination?: PageModel;

    constructor(base?: Partial<DataQueryModel<ColumnKeys>>) {
        if (base) {
            Object.assign(this, base);
        }
        if (!this.pagination) {
            this.pagination = new PageModel();
        }
    }
}
import { Searc