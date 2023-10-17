import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { DS_RepeatComponent } from './repeat.component';

import { Component } from '@angular/core';

@Component({
    selector: 'mocked',
    template: `
        <ds-repeat [formControl]="form" [readOnly]="readOnly">
            <ng-template let-control="control" let-readOnly="readOnly">
                <div data-value>{{ control.value }}</div>
                <div data-read-only>{{ readOnly }}</div>
            </ng-template>
        </ds-repeat>
    `
})
export class MockedComponent {
    public form = new FormControl(['test 1']);
    public readOnly = false;
}


describe('RepeatComponent', () => {
    let component: MockedComponent;
    let fixture: ComponentFixture<MockedComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule],
            declarations: [DS_RepeatComponent, MockedComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MockedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show one value', () => {
        const elements = fixture.debugElement.queryAll(By.css('[data-value]'));
        expect(elements.length).toBe(1);
        expect(elements[0].nativeElement.textContent).toContain('test 1');
    });

    it('should show multiple values', () => {
        component.form.setValue([
            'test 1',
            'test 2',
            'test 3'
        ]);
        fixture.detectChanges();
        const elements = fixture.debugElement.queryAll(By.css('[data-value]'));
        expect(elements.length).toBe(3);
        expect(elements[0].nativeElement.textContent).toContain('test 1');
        expect(elements[1].nativeElement.textContent).toContain('test 2');
        expect(elements[2].nativeElement.textContent).toContain('test 3');
    });

    it('should propagate readOnly', () => {
        component.form.setValue([
            'test 1',
            'test 2'
        ]);
        fixture.detectChanges();

        let elements = fixture.debugElement.queryAll(By.css('[data-read-only]'));
        expect(elements.length).toBe(2);
        expect(elements[0].nativeElement.textContent).toContain('false');
        expect(elements[1].nativeElement.textContent).toContain('false');

        component.readOnly = true;
        fixture.detectChanges();
        elements = fixture.debugElement.queryAll(By.css('[data-read-only]'));
        expect(elements.length).toBe(2);
        expect(elements[0].nativeElement.textContent).toContain('true');
        expect(elements[1].nativeElement.textContent).toContain('true');
    });

});
