import { ObjectHelper } from '../../shared/modules/design-system/helpers/object.helper';
import { Rower } from './rower.models';
import { Stage } from './stage.model';

export class Journey {
    id: string;
    stages: Stage[] = [];
    boat?: string;
    rowers?: Rower[];
    date?: Date;

    constructor(base :Partial<Journey>) {
        this.id = ObjectHelper.generateUUIDv4();
        this.stages = base && base.stages ? base.stages : [];
        this.boat = base && base.boat ? base.boat : undefined;
        this.rowers = base && base.rowers ? base.rowers : [];
        this.date = base && base.date ? base.date : new Date();
    }
}
