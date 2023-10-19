import { ChangeDetectionStrategy, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { BridgesNameEnum } from '../../../enums/bridge-name.enum';
import { BuildingNameEnum } from '../../../enums/building-name.enum';
import { Pointer } from '../../models/pointer.model';
import { PlanService } from '../../services/plan/plan.service';
import { PointerName } from '../../types/pointer-name.type';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent {

    @ViewChild('pointerTooltip') pointerTooltip!: ElementRef<HTMLDivElement>;

    public readonly BuildingNameEnum =  BuildingNameEnum;
    public readonly BridgesNameEnum =  BridgesNameEnum;

    public pointerFocusName: PointerName | null = null;
    public selectedItem$ = new Subject<Pointer | null>();

    constructor(private planService: PlanService, @Inject(DOCUMENT) private document: Document) { }

    public handlePointerClick(e: Event, pointerClicked: PointerName) {
        this.planService.getPointer(pointerClicked).subscribe( pointer => {
            if (pointer) {
                this.pointerFocusName = pointerClicked;
                this.selectedItem$.next(pointer);
                // settimeou because of ngif need to render the elementRef before act on it
                setTimeout(() => {
                    const tooltip: HTMLDivElement = this.pointerTooltip.nativeElement;
                    let x = (e as PointerEvent).x;
                    let y = (e as PointerEvent).y;
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
        });
    }

    public clearSelection() {
        this.pointerFocusName = null;
        this.selectedItem$.next(null);
    }
}
