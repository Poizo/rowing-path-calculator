import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
    DS_ButtonTypeEnum, DS_IconsEnum, DS_button_icon_placement_Enum
} from '../enums/public-api';
import { DS_LabelWithParam } from '../interfaces/label-with-param.interface';
import { I_DS_Button_Menu_Action } from './ds-button-menu-component.interface';

@Component({
    selector: 'ds-button-menu',
    templateUrl: './ds-button-menu.component.html',
    styleUrls: ['./ds-button-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DS_ButtonMenuComponent<ActionIdType = string> implements OnInit {

    public readonly DS_ButtonTypeEnum = DS_ButtonTypeEnum;
    public readonly DS_button_icon_placement_Enum = DS_button_icon_placement_Enum;
    public readonly DS_IconsEnum = DS_IconsEnum;

    /**
     * Button label
     *
     * @required
     */
    @Input()
    public label?: DS_LabelWithParam;

    /**
     * What kind of button it is? Default is primary
     */
    @Input()
    public type: DS_ButtonTypeEnum = DS_ButtonTypeEnum.PRIMARY;

    /**
     * Disable button
     */
    @Input()
    public disabled = false;

    //#region ICONS

    /**
     * Does the icon before or after the label ?
     */
    @Input()
    public iconPlacement: DS_button_icon_placement_Enum = DS_button_icon_placement_Enum.after;

    /**
     * What icon do you want to show ?
     */
    @Input()
    public icon?: DS_IconsEnum = DS_IconsEnum.chevronBottom;

    //#endregion

    //#region SIZES

    /**
     * Button is full container width
     */
    @Input()
    public isFullWidth = true;

    /**
     * Button has a minimum width
     */
    @Input()
    public minimumwidth = true;

    //#endregion

    /**
     * Button custom HTML classes
     *
     */
    @Input()
    public customClasses: string[] = [];

    //#region OUTPUT

    /**
     * Optional click handler
     */
    @Output()
    public clicked = new EventEmitter<ActionIdType>();

    //#endregion

    @Input()
    public isOpened = false;

    @Input()
    public actions!: I_DS_Button_Menu_Action<ActionIdType>[];

    constructor() { }

    ngOnInit(): void { }

    get classes(): { [key: string]: boolean } {
        const classes = {
            [this.type]: true,
            '-disabled': this.disabled,
            '-auto': !this.isFullWidth,
            '-no-min': !this.minimumwidth && !this.isFullWidth,
        };

        if (!!this.icon) {
            classes[this.iconPlacement] = true;
        }

        if (this.customClasses && this.customClasses.length > 0) {
            this.customClasses.forEach((customClass: string) => {
                classes[customClass] = true;
            });
        }

        return classes;
    }

    public toggleMenu(): void {
        this.isOpened = !this.isOpened;
    }

    buttonClicked(action: I_DS_Button_Menu_Action<ActionIdType>): void {
        this.clicked.emit(action.id);
        this.isOpened = false;
    }

}
