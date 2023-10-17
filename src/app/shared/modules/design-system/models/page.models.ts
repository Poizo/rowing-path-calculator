
export class PageModel {

    public pageNumber?: number = 0;
    public size?: number = 20;
    public totalSize?: number;

    constructor(base?: Partial<PageModel>) {
        if (base) {
            Object.assign(this, base);
        }
    }
}
