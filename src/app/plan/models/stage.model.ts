import { ObjectHelper } from '../../shared/modules/design-system/helpers/object.helper';
import { Pointer } from './pointer.model';

export class Stage {
    id: string = ObjectHelper.generateUUIDv4();
    start!: Pointer;
    end!: Pointer;
    isClockwise: boolean = false;
    count: number = 1;
}
