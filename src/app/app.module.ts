import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideTranslateService, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { provideTranslateHttpLoader, TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { DS_CONFIG } from './shared/modules/design-system/ds.config';
import { DS_IconModule } from './shared/modules/design-system/ds-icon/icon.module';

@NgModule({ declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DashboardModule,
        DS_IconModule
    ],
    providers: [
        { provide: DS_CONFIG, useValue: { iconBaseUrl: '/assets/icons/ds' } },
        provideHttpClient(withInterceptorsFromDi()),
        provideTranslateService({
        loader: provideTranslateHttpLoader({
            prefix: './assets/locales/',
            suffix: '.json'
        }),
        fallbackLang: 'fr',
        lang: 'fr',
        }),
    ] })
export class AppModule { }
