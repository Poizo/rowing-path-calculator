() { }

    ngOnInit() {
    }

    get classes(): { [key: string]: boolean }  {
        return {
            'tag--button': this.displayCross,
            'tag--clickable': this.clickable,
            [`tag${this.color}`]: true,
            [`tag${this.type}`]: true
        }
    }

    public crossClicked(): void {
        this.crossClick.emit();
    }

    public chipsClicked(): void {
        if (this.clickable) {
            this.chipsClick.emit();
        }
    }

}
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DS_button_icon_placement_Enum } from '../enums/ds-button-icon-placement.enum';
import { DS_ColorEnum, DS_ButtonTypeEnum, DS_IconsEnum } from '../enums/public-api';
import { DS_LabelWithParam } from '../interfaces';

@Component({
    selector: 'ds-chips',
    templateUrl: './chips.component.html',
    styleUrls: ['./chips.component.scss']
})
export class DS_ChipsComponent implements OnInit {

    public readonly DS_ButtonTypeEnum = DS_ButtonTypeEnum;
    public readonly DS_button_icon_placement_Enum = DS_button_icon_placement_Enum;
    public readonly DS_IconsEnum = DS_IconsEnum;

    @Input()
    public label!: DS_LabelWithParam;

    @Input()
    public color = DS_ColorEnum.ACTION;

    @Input()
    public type = DS_ButtonTypeEnum.PRIMARY;

    @Input()
    public displayCross = false;

    @Input()
    public clickable = false;

    @Output()
    public crossClick = new EventEmitter<void>();

    @Output()
    public chipsClick = new EventEmitter<void>();

    constructor