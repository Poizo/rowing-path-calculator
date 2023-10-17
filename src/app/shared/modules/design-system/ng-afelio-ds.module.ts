: [
                { provide: DS_CONFIG, useValue: configToApply }
            ]
        };
    }
}
import { ModuleWithProviders, NgModule } from '@angular/core';

import { DS_CONFIG, DS_ConfigInterface } from './ng-afelio-ds.config';

@NgModule({
    declarations: [],
    imports: [],
    exports: []
})
export class NgAfelioDsModule {
    public static forRoot(config: Partial<DS_ConfigInterface> = {}): ModuleWithProviders<NgAfelioDsModule> {
        const defaultConfig: DS_ConfigInterface = {
            basePageSizeOptions: [10, 20, 50],
            baseTextfieldMaxLength: 200,
            iconBaseUrl: '/assets/icons/ds'
        };
        const configToApply = {
            ...defaultConfig,
            ...config
        }
        return {
            ngModule: NgAfelioDsModule,
            providers