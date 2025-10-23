import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-plan',
    templateUrl: './plan.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class PlanComponent {

}
