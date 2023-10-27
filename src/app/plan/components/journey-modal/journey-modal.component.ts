import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DS_IconsEnum } from '../../../shared/modules/design-system/enums/ds-icons.enum';
import { Journey } from './../../models/journey.model';
import { Observable, map, take, timer } from 'rxjs';

@Component({
  selector: 'app-journey-modal',
  templateUrl: './journey-modal.component.html',
  styleUrls: ['./journey-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JourneyModalComponent {
    public DS_IconsEnum = DS_IconsEnum;
    public journeyTraveled: number;
    // public drops: number[] = [];
    public explodeDrops: number[] = [];
    public animationTimer$: Observable<{anim: boolean}>;

    constructor(public dialogRef: MatDialogRef<JourneyModalComponent>, @Inject(MAT_DIALOG_DATA) public data: Journey) {
        this.journeyTraveled = 0;
        this.data.stages.forEach(stage => {
            this.journeyTraveled += stage.calculDistance();
        });

        for (let i = 0; i < 200; i++) {
            this.explodeDrops.push(i);
        }

        // for (let i = 0; i < 500; i++) {
        //     this.drops.push(i);
        // }

        this.animationTimer$ = timer(0, 2000).pipe(take(2), map(i => ({anim: i === 0}) ));
    }

    closeDialog() {
        this.dialogRef.close();
    }
}
