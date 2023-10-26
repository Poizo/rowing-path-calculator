import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Output } from '@angular/core';
import { DS_IconsEnum } from '../../../shared/modules/design-system/enums/ds-icons.enum';

@Component({
  selector: 'app-help-page',
  templateUrl: './help-page.component.html',
  styleUrls:['./help-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelpPageComponent {

    @HostListener('window:keydown.escape')
    escapePressed() {
        this.closeHelp();
    }

    @HostListener('click', ['$event.target'])
    onClick(e: HTMLElement | SVGElement) {
        this.buildingPointerClicked = !!e.dataset['legendBuildingMarker'];
        this.bridgePointerClicked = !!e.dataset['legendBridgeMarker'];
    }

    @Output() public close = new EventEmitter<void>();

    public buildingPointerClicked = false;
    public bridgePointerClicked = false;
    public isStepExplanationShowed = false;
    public isClockwise = false;

    public readonly DS_IconsEnum = DS_IconsEnum;

    public closeHelp() {
        this.close.emit();
    }

    public toggleStepExplanation(show = false) {
        this.isStepExplanationShowed = show;
    }

    public changeDirection(){
        this.isClockwise = !this.isClockwise;
    }
}
