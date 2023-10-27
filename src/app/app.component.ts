import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DS_IconsEnum } from './shared/modules/design-system/enums/ds-icons.enum';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    isBanner = true;

    public readonly DS_IconsEnum =  DS_IconsEnum;

    constructor(
        private translate: TranslateService
    ) { }

    ngOnInit(): void {
        this.translate.setDefaultLang('fr');
        this.translate.use('fr');
    }

    closeBanner() {
        this.isBanner = false;
    }
}
