import { Component, Input, OnInit } from '@angular/core';

import { DS_IconsEnum } from '../enums/public-api';
import { DS_LabelWithParam } from '../interfaces';

@Component({
    selector: 'ds-tooltip',
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.scss']
})
export class DS_TooltipComponent implements OnInit {

    @Input()
    public text!: DS_LabelWithParam;
    public readonly DS_IconsEnum = DS_IconsEnum;

    constructor() { }

    ngOnInit() {
    }

}
