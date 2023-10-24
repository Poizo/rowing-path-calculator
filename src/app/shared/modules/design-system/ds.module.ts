import { ModuleWithProviders, NgModule } from '@angular/core';

import { DS_CONFIG, DS_ConfigInterface } from './ds.config';

@NgModule({
    declarations: [],
    imports: [],
    exports: []
})
export class DsModule {
    public static forRoot(config: Partial<DS_ConfigInterface> = {}): ModuleWithProviders<DsModule> {
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
            ngModule: DsModule,
            providers: [
                { provide: DS_CONFIG, useValue: configToApply }
            ]
        };
    }
}
