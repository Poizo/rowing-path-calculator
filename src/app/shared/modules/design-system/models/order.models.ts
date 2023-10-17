
export class OrderModel {
    nextOrder?: OrderModel;
    orderByDescending?: boolean;
    orderByPropertyName?: string;

    constructor(base?: Partial<OrderModel>) {
        if (base) {
            Object.assign(this, base);
        }
    }

}
