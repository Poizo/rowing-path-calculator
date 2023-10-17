import { CdkStepperModule } from '@angular/cdk/stepper';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';

import { DS_StepperComponent } from './stepper.component';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'summary-mock-component',
    template: `
    <ds-stepper>
        <cdk-step></cdk-step>
        <cdk-step></cdk-step>
        <cdk-step></cdk-step>
        <cdk-step></cdk-step>
    </ds-stepper>
  `
})
export class SummaryMockComponent extends DS_StepperComponent { }

describe('StepperComponent', () => {
    let component: DS_StepperComponent;
    let mockSummaryComponent: SummaryMockComponent;
    let fixture: ComponentFixture<DS_StepperComponent<string>>;
    let mockSummaryFixture: ComponentFixture<SummaryMockComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                TranslateModule.forRoot(),
                CdkStepperModule
            ],
            declarations: [DS_StepperComponent, SummaryMockComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DS_StepperComponent) as ComponentFixture<DS_StepperComponent<string>>;
        mockSummaryFixture = TestBed.createComponent(SummaryMockComponent)
        component = fixture.componentInstance;
        mockSummaryComponent = mockSummaryFixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should test method selectStepByIndex() correctly set comp prop selectedIndex', () => {
        mockSummaryComponent.selectStepByIndex(1)
        expect(mockSummaryComponent.selectedIndex).toBe(1);
    });
});
