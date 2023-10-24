import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Pointer } from '../../models/pointer.model';
import { Stage } from '../../models/stage.model';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { StageTarget } from '../../types/stage-target.type';
import { DS_IconsEnum } from '../../../shared/modules/design-system/enums/ds-icons.enum';

@Component({
  selector: 'app-encode-stage-row',
  templateUrl: './encode-stage-row.component.html',
  styleUrls: ['./encode-stage-row.component.scss'],
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => EncodeStageRowComponent),
        multi: true
    }
],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EncodeStageRowComponent implements  ControlValueAccessor, OnInit, OnDestroy {

    @Input() public stage!: Stage;
    @Input() public index!: number;

    @Output() stageEmiter = new EventEmitter();
    @Output() stageDirectionEmiter = new EventEmitter();
    @Output() stageDelete = new EventEmitter();
    @Output() stepInputClick = new EventEmitter<StageTarget>();

    public destroyer$ = new Subject();

    public readonly DS_IconsEnum = DS_IconsEnum;

    public startControl = new FormControl<string>('');
    public endControl = new FormControl<string>('');
    public countControl = new FormControl<number>(1);

    ngOnInit(): void {
        this.countControl.valueChanges.pipe(
            takeUntil(this.destroyer$)
        ).subscribe({
            next: (count) => {
                this.stage.count = count ?? 1;
            }
        });
    }


    public ngOnDestroy(): void {
        this.destroyer$.next(null);
        this.destroyer$.complete();
    }

    public deleteStage() {
        this.stageDelete.emit();
    }

    public selectStepinput(target: StageTarget) {
        this.stepInputClick.emit(target);
    }

    public emitStage() {
        this.stageEmiter.emit();
    }

    public changeStageDirection() {
        this.stageDirectionEmiter.emit();
    }

    // ---------- ControlValueAccessor IMPLEMENTATION ----------

        /**
     *
     * @internal
     */
        public onChange = (_data: string) => { };
        /**
         *
         * @internal
         */
        public onTouched = () => { };


    public registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    public writeValue(value: Stage): void {
        if (value.start) {
            this.startControl.setValue(value.start.name);
        }
        if (value.end) {
            this.endControl.setValue(value.end.name);
        }
    }

    public registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    public setDisabledState?(isDisabled: boolean): void {

    }


}
