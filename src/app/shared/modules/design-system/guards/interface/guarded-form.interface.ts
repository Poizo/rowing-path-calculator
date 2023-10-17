import { DirtyComponent } from '@ngneat/dirty-check-forms';
import { Observable, Subject } from 'rxjs';


export interface IDungeonKeeper extends DirtyComponent {
    resetDirty$: Subject<boolean>;
}
