import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { BridgesNameEnum } from '../../../enums/bridge-name.enum';
import { BuildingNameEnum } from '../../../enums/building-name.enum';
import { Pointer } from '../../models/pointer.model';
import { PlanService } from '../../services/plan/plan.service';
import { PointerName } from '../../types/pointer-name.type';

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

    constructor(private planService: PlanService) { }

    public handlePointerClick(e: Event, pointerClicked: PointerName) {
        this.planService.getPointer(pointerClicked).subscribe( pointer => {
            if (pointer) {
                this.pointerFocusName = pointerClicked;
                this.selectedItem$.next(pointer);
                // settimeou because of ngif need to render the elementRef before act on it
                setTimeout(() => {
                    const tooltip: HTMLDivElement = this.pointerTooltip.nativeElement;
                    tooltip.style.top = `${(e as PointerEvent).y}px`;
                    tooltip.style.left = `${(e as PointerEvent).x}px`;
                }, 0);
            }
        });
    }

    public clearSelection() {
        this.pointerFocusName = null;
        this.selectedItem$.next(null);
    }

}
