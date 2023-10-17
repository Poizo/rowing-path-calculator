import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'rowing-path-calculator';

    constructor(
        private translate: TranslateService
    ) { }

    ngOnInit(): void {
        this.translate.setDefaultLang('fr');
        this.translate.use('fr');
    }

}
