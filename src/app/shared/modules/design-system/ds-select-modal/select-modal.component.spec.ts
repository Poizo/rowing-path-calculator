/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DS_SelectModalComponent } from './select-modal.component';

describe('DsSelectModalComponent', () => {
    let component: DS_SelectModalComponent;
    let fixture: ComponentFixture<DS_SelectModalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DS_SelectModalComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DS_SelectModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
