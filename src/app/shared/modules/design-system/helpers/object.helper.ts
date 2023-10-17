export class ObjectHelper {

    public static generateUUIDv4(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            // tslint:disable-next-line: no-bitwise
            const r = Math.random() * 16 | 0;
            // tslint:disable-next-line: no-bitwise
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    public static isObject(obj: any) {
        return Object.prototype.toString.call(obj) === '[object Object]';
    };

    public static isEmpty(obj: any) {
        return Object.keys(obj).length === 0;
    }

}
