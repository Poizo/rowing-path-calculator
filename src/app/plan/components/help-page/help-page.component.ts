import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Output } from '@angular/core';
import { DS_IconsEnum } from '../../../shared/modules/design-system/enums/ds-icons.enum';
import { Stage } from '../../models/stage.model';

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
    public isStepExplanationShowed = true;
    public isClockwise = false;
    public stageHelpDemo = new Stage();

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
