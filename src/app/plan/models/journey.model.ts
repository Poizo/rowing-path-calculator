import { Rower } from './rower.models';
import { Stage } from './stage.model';

export class Journey {
    stages: Stage[] = [];
    boat?: string;
    rowers?: Rower[];
    date?: Date;
}
