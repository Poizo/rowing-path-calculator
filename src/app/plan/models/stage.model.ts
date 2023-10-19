import { Pointer } from './pointer.model';

export class Stage {
    start!: Pointer;
    end!: Pointer;
    isClockwise: boolean = false;
    count: number = 1;
}
