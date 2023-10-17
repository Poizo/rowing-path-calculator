import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DS_ButtonTypeEnum, DS_IconsEnum, DS_button_icon_placement_Enum, DS_ColorEnum } from '../enums/public-api';
import { DS_LabelWithParam } from '../interfaces';

/**
 * Doc on the button
 */
@Component({
    selector: 'ds-button',
    templateUrl: './ds-button.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
// tslint:disable-next-line: class-name
export class DS_ButtonComponent implements OnInit {
    /**
     * @internal
     */
    public readonly DS_IconsEnum = DS_IconsEnum;
    /**
     * @internal
     */
    public readonly DS_button_icon_placement_Enum = DS_button_icon_placement_Enum;

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
     * What kind of color it is? Default is action
     */
    @Input()
    public color: DS_ColorEnum = DS_ColorEnum.ACTION;

    /**
     * Disable button
     */
    @Input()
    public disabled = false;

    /**
     * Is a submit type
     */
    @Input()
    public isSubmitType = false;

    //#region ICONS

    /**
     * Does the icon before or after the label ?
     */
    @Input()
    public iconPlacement: DS_button_icon_placement_Enum = DS_button_icon_placement_Enum.before;

    /**
     * What icon do you want to show ?
     */
    @Input()
    public icon?: DS_IconsEnum;

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

    /**
     * Specify if must stop click propagation or not
     */
    @Input()
    public stopPropagation = false;

    //#region OUTPUT

    /**
     * Optional click handler
     */
    @Output()
    public clicked = new EventEmitter();

    //#endregion

    constructor() { }

    ngOnInit(): void { }

    get classes(): { [key: string]: boolean } {
        const classes = {
            [this.type]: true,
            'button--disabled': this.disabled,
            'button--icon ': !!(this.icon && this.iconPlacement),
            'button--auto': !this.isFullWidth,
            'button--no-min': !this.minimumwidth && !this.isFullWidth,
        };

        if (!!this.icon) {
            classes[this.iconPlacement] = true;
        }

        if (!!this.color) {
            classes[this.color] = true;
        }

        if (this.customClasses && this.customClasses.length > 0) {
            this.customClasses.forEach((customClass: string) => {
                classes[customClass] = true;
            });
        }

        return classes;
    }

    buttonClicked(event: Event): void {
        if (this.disabled) {
            event.stopPropagation();
            return;
        } else if (this.stopPropagation) {
            event.stopPropagation();
        }

        this.clicked.emit();
    }

}
