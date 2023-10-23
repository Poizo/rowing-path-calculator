import { ChangeDetectionStrategy, Component, ElementRef, Inject, Input, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map, merge, skip, tap } from 'rxjs';
import { BridgesNameEnum } from '../../../enums/bridge-name.enum';
import { BuildingNameEnum } from '../../../enums/building-name.enum';
import { Pointer } from '../../models/pointer.model';
import { PlanService } from '../../services/plan/plan.service';
import { PointerName } from '../../types/pointer-name.type';
import { DOCUMENT } from '@angular/common';
import { Stage } from '../../models/stage.model';
import { FormControl, FormGroup } from '@angular/forms';
import { StageTarget } from '../../types/stage-target.type';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent {

    @ViewChild('pointerTooltip') pointerTooltip!: ElementRef<HTMLDivElement>;

    public form: FormGroup<{ [k:string]: FormControl<Stage | null>; }>;
    public isRecording$: Observable<boolean>;

    public readonly BuildingNameEnum =  BuildingNameEnum;
    public readonly BridgesNameEnum =  BridgesNameEnum;

    public pointerFocusName: PointerName | null;
    public highlightedPointers: {start: PointerName | null, end: PointerName | null};
    public selectedItem$ = new Subject<Pointer | null>();
    public showOverlay$: Observable<boolean>;
    public selectedStageTarget$ = new BehaviorSubject<{stage: Stage, target: StageTarget} | null>(null);
    public stages: Stage[];

    constructor(private planService: PlanService, @Inject(DOCUMENT) private document: Document) {
        this.pointerFocusName = null;
        this.highlightedPointers = {start: null, end: null};
        this.form = new FormGroup({});
        this.stages = [];

        this.isRecording$ = this.planService.isRecordingJourney$.pipe(skip(1), tap(isRecord => {
            if (!isRecord && (Object.keys(this.form.controls).length || this.stages.length)) {
                this.form.controls = {};
                this.stages = [];
            } else {
                const firstStage = new Stage();
                const firstControl: FormControl<Stage | null> = new FormControl<Stage>(firstStage);
                this.stages.push(firstStage);
                this.form.addControl(firstStage.id, firstControl);
            }
        }));
        this.showOverlay$ = merge(this.selectedItem$, this.selectedStageTarget$).pipe(map(value => !!value));
    }

    public handlePointerClick(e: Event, pointerClicked: PointerName) {
        e.stopPropagation();
        this.planService.getPointer(pointerClicked).subscribe( pointer => {
            if (pointer) {
                this.pointerFocusName = pointerClicked;
                this.selectedItem$.next(pointer);
                if (this.planService.isRecording()) {
                    const selectedStageTarget =  this.selectedStageTarget$.value;
                    if (selectedStageTarget) {
                        const controlToSet = this.form.get(selectedStageTarget.stage.id);
                        if (controlToSet) {
                            this.stages.find(s => s.id === selectedStageTarget.stage.id)![selectedStageTarget.target] = pointer;
                            controlToSet.setValue({...selectedStageTarget.stage, [selectedStageTarget.target]: pointer })
                        }
                    } else {
                        this.showInformationTooltip((e as PointerEvent));
                    }
                } else {
                    this.showInformationTooltip((e as PointerEvent));
                }
            }
        });
    }

    public clearSelection() {
        this.pointerFocusName = null;
        this.selectedItem$.next(null);
        this.selectedStageTarget$.next(null);
        this.highlightedPointers = {start: null, end: null};
    }

    /*** RECORDING ***/

    public addStage() {
        const stage = new Stage();
        this.form.addControl(stage.id, new FormControl<Stage>(stage));
        this.stages.push(stage);
    }

    public deleteStage(stageToDelete: Stage) {
        this.stages = this.stages.filter(stage => stageToDelete.id !== stage.id);
    }

    public selectStepinput(stage: Stage, target: StageTarget) {
        this.selectedStageTarget$.next({stage, target});
    }

    public showClickedStage(stage: Stage) {
        if (stage && stage.start) {
            this.highlightedPointers.start = stage.start.name;
        }
        if (stage && stage.end) {
            this.highlightedPointers.end = stage.end.name;
        }
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
