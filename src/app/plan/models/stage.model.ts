import { ObjectHelper } from '../../shared/modules/design-system/helpers/object.helper';
import { Pointer } from './pointer.model';

export class Stage {
    id: string = ObjectHelper.generateUUIDv4();
    start!: Pointer;
    end!: Pointer;
    isClockwise: boolean = false;
    count: number = 1;

    public isCompleteAndCanCalculdistance(): boolean {
        return this.count > 0 && !!this.start && !!this.end;
    }

    public calculDistance(): number {
        let distanceTotal = 0;
        if (this.isClockwise) {
            distanceTotal += this.start.distanceToClockwise[this.end.name] * this.count;
        } else {
            distanceTotal += this.start.distanceToReverseClockwise[this.end.name] * this.count;
        }
        return distanceTotal;
    }
}
