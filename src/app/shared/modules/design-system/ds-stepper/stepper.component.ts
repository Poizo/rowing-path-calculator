put, QueryList } from '@angular/core';
import { I_DS_Button_Menu_Action } from '../ds-button-menu/public-api';
import { DS_LabelWithParam } from '../interfaces';

export interface IStepperButtonMenuOptions<ActionIdType> {
    createLabel: DS_LabelWithParam;
    buttonMenuActions: I_DS_Button_Menu_Action<ActionIdType>[];
}

@Component({
    selector: 'ds-stepper',
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        { provide: CdkStepper, useExisting: DS_StepperComponent },
        { provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true } }
    ]
})
export class DS_StepperComponent<ActionIdType = string> extends CdkStepper {

    /** Full list of steps inside the stepper, including inside nested steppers. */
    @ContentChildren(CdkStep, { descendants: false }) override _steps!: QueryList<CdkStep>;

    @Input() isFormValid = false;
    @Input() couldClickOnStepforChange = true;
    @Input() isWizard = true;
    @Input() stepIndexDisplayed = true;

    @Output() validate: EventEmitter<ActionIdType> = new EventEmitter<ActionIdType>();


    public selectStepByIndex(index: number): void {
        if (this.couldClickOnStepforChange) {
            this.selectedIndex = index;
        }
    }

}
import { CdkStep, CdkStepper, STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, Input, Out