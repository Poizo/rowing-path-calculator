import { ChangeDetectionStrategy, Component, ElementRef, Inject, Input, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BridgesNameEnum } from '../../../enums/bridge-name.enum';
import { BuildingNameEnum } from '../../../enums/building-name.enum';
import { Pointer } from '../../models/pointer.model';
import { PlanService } from '../../services/plan/plan.service';
import { PointerName } from '../../types/pointer-name.type';
import { DOCUMENT } from '@angular/common';
import { Stage } from '../../models/stage.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent {

    @ViewChild('pointerTooltip') pointerTooltip!: ElementRef<HTMLDivElement>;

    public form: FormGroup;
    public isRecording$: Observable<boolean>;

    public readonly BuildingNameEnum =  BuildingNameEnum;
    public readonly BridgesNameEnum =  BridgesNameEnum;

    public pointerFocusName: PointerName | null = null;
    public selectedItem$ = new Subject<Pointer | null>();
    public stages: Stage[];

    constructor(private planService: PlanService, @Inject(DOCUMENT) private document: Document) {
        this.isRecording$ = this.planService.isRecordingJourney$;
        const firstStage = new Stage();
        const firstControl = new FormControl();
        this.stages = [firstStage];
        this.form = new FormGroup({
            [firstStage.id]: firstControl
        });
    }

    public handlePointerClick(e: Event, pointerClicked: PointerName) {
        e.stopPropagation();
        this.planService.getPointer(pointerClicked).subscribe( pointer => {
            if (pointer) {
                this.pointerFocusName = pointerClicked;
                this.selectedItem$.next(pointer);
                if (this.planService.isRecording()) {
                    console.log(pointer);

                } else {
                    this.showInformationTooltip((e as PointerEvent));
                }


            }
        });
    }

    public clearSelection() {
        this.pointerFocusName = null;
        this.selectedItem$.next(null);
    }

    /*** RECORDING ***/

    public addStage() {
        const stage = new Stage();
        this.form.addControl(stage.id, new FormControl());
        this.stages.push(stage);
    }

    public deleteStage(stageToDelete: Stage) {
        this.stages = this.stages.filter(stage => stageToDelete.id !== stage.id);
    }

    public selectStepinput(stage: Stage, target: 'start' | 'end') {
        console.log(stage, target);
    }
    /******/

    private showInformationTooltip(e: PointerEvent) {
        // settimeout because of ngif need to render the elementRef before act on it
        setTimeout(() => {
            const tooltip: HTMLDivElement = this.pointerTooltip.nativeElement;
            let x = e.x;
            let y = e.y;
            const windowHeight = this.document.documentElement.clientHeight;
            const windowWidth = this.document.documentElement.clientWidth;
            if (x > windowWidth/2) {
                x = x - tooltip.clientWidth;
            }
            if (y > windowHeight/2) {
                y = y - tooltip.clientHeight;
            }
            tooltip.style.top = `${y}px`;
            tooltip.style.left = `${x}px`;
        }, 0);
    }
}
