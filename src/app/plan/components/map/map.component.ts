import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Inject, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable, Subject, skip, tap } from 'rxjs';
import { BridgesNameEnum } from '../../../enums/bridge-name.enum';
import { BuildingNameEnum } from '../../../enums/building-name.enum';
import { DS_IconsEnum } from '../../../shared/modules/design-system/enums/ds-icons.enum';
import { Journey } from '../../models/journey.model';
import { Pointer } from '../../models/pointer.model';
import { Stage } from '../../models/stage.model';
import { PlanService } from '../../services/plan/plan.service';
import { PointerName } from '../../types/pointer-name.type';
import { StageTarget } from '../../types/stage-target.type';
import { JourneyModalComponent } from '../journey-modal/journey-modal.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent {

    @ViewChild('pointerTooltip') pointerTooltip!: ElementRef<HTMLDivElement>;

    @HostListener('click', ['$event.target'])
    onClick(e: HTMLElement | SVGElement) {
      if (e.tagName === 'APP-MAP' || e.classList.contains('map-background') || e.classList.contains('water')) {
        this.clearSelection()
      }
    }

    public form: FormGroup<{ [k:string]: FormControl<Stage | null>; }>;
    public isRecording$: Observable<boolean>;

    public readonly BuildingNameEnum =  BuildingNameEnum;
    public readonly BridgesNameEnum =  BridgesNameEnum;
    public readonly DS_IconsEnum = DS_IconsEnum;

    public pointerFocusName: PointerName | null;
    public highlightedStage: {start: PointerName | null, end: PointerName | null, isClockwise: boolean};
    public selectedItem$ = new Subject<Pointer | null>();
    public selectedStageTarget$ = new BehaviorSubject<{stage: Stage, target: StageTarget} | null>(null);
    public stages: Stage[];
    public isJourneyCalculable$ = new Subject<boolean>();

    constructor(private planService: PlanService, @Inject(DOCUMENT) private document: Document, private dialog: MatDialog) {
        this.pointerFocusName = null;
        this.highlightedStage = {start: null, end: null, isClockwise: false};
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
                            this.isJourneyCalculable();
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
        this.highlightedStage = {start: null, end: null, isClockwise: false};
    }

    /*** RECORDING ***/

    public addStage() {
        const stage = new Stage();
        this.form.addControl(stage.id, new FormControl<Stage>(stage));
        this.stages.push(stage);
        this.isJourneyCalculable();
    }

    public deleteStage(stageToDelete: Stage) {
        this.stages = this.stages.filter(stage => stageToDelete.id !== stage.id);
        this.isJourneyCalculable();
    }

    public changeStageDirection(stage: Stage) {
        const stageToUpdate = this.stages.find(s => s.id === stage.id);
        if (stageToUpdate) {
            stageToUpdate.isClockwise = !stageToUpdate.isClockwise;
            this.showClickedStage(stageToUpdate);
        }
    }

    public selectStepinput(stage: Stage, target: StageTarget) {
        this.selectedStageTarget$.next({stage, target});
    }


    public showClickedStage(stage: Stage) {
        if (!!stage) {
            this.highlightedStage.isClockwise = stage.isClockwise;
            if (stage.start) {
                this.highlightedStage.start = stage.start.name;
            }
            if (stage.end) {
                this.highlightedStage.end = stage.end.name;
            }
        }
    }

    /**
     * Update the boolean that determine if the submit button for calculing journey is disabled or not
     */
    public isJourneyCalculable() {
        this.isJourneyCalculable$.next(this.stages.every(stage => stage.isCompleteAndCanCalculdistance()));
    }

    public calculJourney() {
        if (this.stages.every(stage => stage.isCompleteAndCanCalculdistance())) {
            this.dialog.open(JourneyModalComponent, {
                data: new Journey({stages: this.stages})
              });
        }
    }
    /*** RECORDING END ***/

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
