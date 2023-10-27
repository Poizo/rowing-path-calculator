import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncodeStageRowComponent } from './encode-stage-row.component';

describe('EncodeStageRowComponent', () => {
  let component: EncodeStageRowComponent;
  let fixture: ComponentFixture<EncodeStageRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncodeStageRowComponent]
    });
    fixture = TestBed.createComponent(EncodeStageRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
