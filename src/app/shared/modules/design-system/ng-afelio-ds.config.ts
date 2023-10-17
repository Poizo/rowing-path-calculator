import { InjectionToken } from '@angular/core';

export const DS_CONFIG = new InjectionToken<DS_ConfigInterface>('ds-config');

export interface DS_ConfigInterface {
    basePageSizeOptions: number[],
    baseTextfieldMaxLength: number,
    iconBaseUrl: string
}
