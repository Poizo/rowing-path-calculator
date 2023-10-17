/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DS_SelectionModalComponent } from './selection-modal.component';

describe('SelectionModalComponent', () => {
    let component: DS_SelectionModalComponent;
    let fixture: ComponentFixture<DS_SelectionModalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DS_SelectionModalComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DS_SelectionModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
