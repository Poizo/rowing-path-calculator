import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PlanService } from '../../services/plan/plan.service';
import { DS_IconsEnum } from './../../../shared/modules/design-system/enums/ds-icons.enum';

@Component({
  selector: 'app-plan-header',
  templateUrl: './plan-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanHeaderComponent {

    public isRecording$: Observable<boolean>;
    public showHelp$ = new Subject<boolean>();
    public readonly DS_IconsEnum = DS_IconsEnum;

    constructor(private planService: PlanService) {
        this.isRecording$ = this.planService.isRecordingJourney$;
    }

    public startARecord() {
        this.planService.startRecordAJourney();
    }

    public stopRecord() {
        this.planService.stopRecordingJourney();
    }

    public toggleHelp(show = true) {
        this.showHelp$.next(show);
    }
}
