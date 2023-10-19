import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PlanService } from '../../services/plan/plan.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-plan-header',
  templateUrl: './plan-header.component.html',
  styleUrls: ['./plan-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanHeaderComponent {

    public isRecording$: Observable<boolean>;

    constructor(private planService: PlanService) {
        this.isRecording$ = this.planService.isRecordingJourney$;
    }

    public startARecord() {
        this.planService.startRecordAJourney();
    }

    public stopRecord() {
        this.planService.stopRecordingJourney();
    }
}
