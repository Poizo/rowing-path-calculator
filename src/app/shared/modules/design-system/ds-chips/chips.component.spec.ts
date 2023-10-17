import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TranslateModule } from '@ngx-translate/core';

import { DS_ButtonModule } from '../ds-button/ds-button.module';
import { DS_ChipsComponent } from './chips.component';

describe('DS_ChipsComponent', () => {
    let component: DS_ChipsComponent;
    let fixture: ComponentFixture<DS_ChipsComponent>;
    let httpTestingController: HttpTestingController;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                TranslateModule.forRoot(),
                DS_ButtonModule
            ],
            declarations: [DS_ChipsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DS_ChipsComponent);
        component = fixture.componentInstance;
        component.label = { label: 'test' };
        httpTestingController = TestBed.inject(HttpTestingController);
        fixture.detectChanges();
    });

    afterEach(() => {
        httpTestingController.match((request) => {
            return /^\/assets\/.*/.test(request.url);
        });
        httpTestingController.verify();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display label', () => {
        const labelDiv = fixture.debugElement.query(By.css('[data-label]'));
        expect(labelDiv.nativeElement.textContent).toContain('test');
    });

    it('should display cross button when can delete', () => {
        component.displayCross = true;
        fixture.detectChanges();
        const button = fixture.debugElement.query(By.css('ds-button'));
        expect(button).toBeTruthy();
    });

    it('should not display cross button when cannot delete', () => {
        component.displayCross = false;
        fixture.detectChanges();
        const button = fixture.debugElement.query(By.css('ds-button'));
        expect(button).toBeFalsy();
    });

    it('should call output when cross clicked', () => {
        component.displayCross = true;
        fixture.detectChanges();
        spyOn(component.crossClick, 'emit').and.callThrough();
        const button = fixture.debugElement.query(By.css('button'));
        button.triggerEventHandler('click');
        expect(component.crossClick.emit).toHaveBeenCalled();
    });
});
