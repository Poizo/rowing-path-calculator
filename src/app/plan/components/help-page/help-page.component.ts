import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Output } from '@angular/core';
import { DS_IconsEnum } from '../../../shared/modules/design-system/enums/ds-icons.enum';

@Component({
  selector: 'app-help-page',
  templateUrl: './help-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelpPageComponent {

    @HostListener('window:keydown.escape')
    onClick() {
        this.closeHelp();
    }

    @Output() public close = new EventEmitter<void>();

    public readonly DS_IconsEnum = DS_IconsEnum;

    public closeHelp() {
        this.close.emit();
    }
}
