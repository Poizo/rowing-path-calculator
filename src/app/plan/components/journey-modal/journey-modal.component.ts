import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DS_IconsEnum } from '../../../shared/modules/design-system/enums/ds-icons.enum';
import { Journey } from './../../models/journey.model';

@Component({
  selector: 'app-journey-modal',
  templateUrl: './journey-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JourneyModalComponent {
    public DS_IconsEnum = DS_IconsEnum;
    public journeyTraveled: number;

    constructor(public dialogRef: MatDialogRef<JourneyModalComponent>, @Inject(MAT_DIALOG_DATA) public data: Journey) {
        this.journeyTraveled = 0;
        this.data.stages.forEach(stage => {
            this.journeyTraveled += stage.calculDistance();
        });
    }

    closeDialog() {
        this.dialogRef.close();
    }
}
