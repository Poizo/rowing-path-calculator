import { Injectable } from '@angular/core';
import { NativeDateAdapter } from '@angular/material/core';

@Injectable()
export class CustomDateAdapter extends NativeDateAdapter {
    override parse(value: any): Date | null {

        if (!!value && value.length !== 10 && value.length !== 8) {
            return new Date('INVALID DATE');
        }

        if ((typeof value === 'string') && value.length === 10 && (value.indexOf('/') > -1)) {
            const str = value.split('/');
            if (str.length < 2 || isNaN(+str[0]) || isNaN(+str[1]) || isNaN(+str[2])) {
                return null;
            }
            return new Date(Number(str[2]), Number(str[1]) - 1, Number(str[0]), 12);
        }
        else if (typeof value === 'string' && (value.length === 8)) {
            const day = value.slice(0, 2);
            const month = value.slice(2, 4);
            const year = value.slice(4);

            return new Date(Number(year), Number(month) - 1, Number(day));
        }

        const timestamp = typeof value === 'number' ? value : Date.parse(value);

        return !!value ? new Date(timestamp) : null;
    }
}
