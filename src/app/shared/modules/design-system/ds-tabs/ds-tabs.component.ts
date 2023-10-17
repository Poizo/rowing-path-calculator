import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { DS_Tab } from './../interfaces/tab.interface';

@Component({
    selector: 'ds-tabs',
    templateUrl: './ds-tabs.component.html',
    styleUrls: ['./ds-tabs.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DsTabsComponent implements OnInit {

    @Input() public tabs!: DS_Tab[];

    constructor() { }

    ngOnInit(): void {

    }

}
