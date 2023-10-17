import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { DirtyCheckGuard } from '@ngneat/dirty-check-forms';

@Injectable()
export class DungeonKeeperGuard extends DirtyCheckGuard {

    public confirmChanges(): boolean | Observable<boolean> {
        return confirm('Êtes-vous certain de vouloir quitter le formulaire ? Toutes vos modifications seront perdues !');
    }

}
