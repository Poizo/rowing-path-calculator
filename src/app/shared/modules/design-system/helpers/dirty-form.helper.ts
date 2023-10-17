ructor !== b.constructor) {
            return false;
        }

        let length: number;
        let i: number;
        let keys: string[];
        if (Array.isArray(a)) {
            length = a.length;
            if (length !== b.length) {
                return false;
            }
            for (i = length; i-- !== 0;) {
                if (!isEqual(a[i], b[i])) {
                    return false;
                }
            }
            return true;
        }

        if (a.constructor === RegExp) {
            return a.source === b.source && a.flags === b.flags;
        }
        if (a.valueOf !== Object.prototype.valueOf) {
            return a.valueOf() === b.valueOf();
        }
        if (a.toString !== Object.prototype.toString) {
            return a.toString() === b.toString();
        }

        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) {
            return false;
        }

        for (i = length; i-- !== 0;) {
            if (!Object.prototype.hasOwnProperty.call(b, keys[i])) {
                return false;
            }
        }

        for (i = length; i-- !== 0;) {
            const key = keys[i];
            if (!isEqual(a[key], b[key])) {
                return false;
            }
        }

        return true;
    }

    // true if both NaN, false otherwise
    return a !== a && b !== b;
}
//#endregion dirtyCheck
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';
import { cloneDeep } from 'lodash';
import { combineLatest, defer, fromEvent, merge, Observable, of, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, finalize, map, shareReplay, startWith, takeUntil, withLatestFrom } from 'rxjs/operators';

/**
 * Check if there is a difference between a snapshot (taken at init time or when reset$ is emited) and value from the form.
 * @param form form to check rawValues
 * @param destroy$ Observable to stop dungeon keeper logic
 * @param reset$ Obserbable when you need to take a new snapshot to compare (usefull when you sumbited value into your service)
 * @returns true if there a diff beween the snapshot and the actual value.
 */
export function dirtyFormCheck(form: FormGroup, destroy$: Observable<any>, reset$: Observable<any>): Observable<boolean> {
    const snapshot$ = reset$.pipe(startWith(true), takeUntil(destroy$), map(() => cloneDeep(form.getRawValue())));
    return dirtyCheck(form, snapshot$, { withDisabled: true }, destroy$);
}

/**
 * Check if there is a difference between a snapshot (taken at init time or when reset$ is emited) and value from the form.
 * This function will check each forms separetly and returns a unique value.
 * @param forms form to check rawValues
 * @param destroy$ Observable to stop dungeon keeper logic
 * @param reset$ Obserbable when you need to take a new snapshot to compare (usefull when you sumbited value into your service)
 * @returns true if there a diff beween the snapshot and the actual value for at least one of the forms
 */
export function dirtyMultipleFormCheck(forms: FormGroup[], destroy$: Observable<any>, reset$: Observable<any>): Observable<boolean> {
    return combineLatest(
        forms.map(formResult => dirtyFormCheck(formResult, destroy$, reset$))
    ).pipe(map(values => values.includes(true)));
}


// Code below is from https://github.com/ngneat/dirty-check-forms with $detroy in addition
//#region dirtyCheck
interface DirtyCheckConfig {
    debounce?: number;
    withDisabled?: boolean;
}

function mergeConfig(config: DirtyCheckConfig): DirtyCheckConfig {
    return {
        ...config,
        debounce: 0,
        withDisabled: true,
    };
}

function getControlValue(control: AbstractControl, withDisabled: boolean) {
    if (
        withDisabled &&
        (control instanceof FormGroup || control instanceof FormArray)
    ) {
        return control.getRawValue();
    }
    return control.value;
}

export function dirtyCheck<U>(
    control: AbstractControl,
    source: Observable<U>,
    config: DirtyCheckConfig = {},
    destroy$: Observable<any>
) {
    const { debounce, withDisabled } = mergeConfig(config);
    const value = () => getControlValue(control, !!withDisabled);
    const valueChanges$ = merge(
        defer(() => of(value())),
        control.valueChanges.pipe(
            debounceTime(debounce ?? 0),
            distinctUntilChanged(),
            map(() => value())
        )
    );
    let subscription: Subscription;

    const isDirty$: Observable<boolean> = combineLatest([
        source,
        valueChanges$
    ]).pipe(
        map(([a, b]) => !isEqual(a, value())),
        takeUntil(destroy$),
        finalize(() => subscription.unsubscribe()),
        startWith(false),
        shareReplay({ bufferSize: 1, refCount: true })
    );

    subscription = fromEvent(window, 'beforeunload')
        .pipe(
            withLatestFrom(isDirty$)
        )
        .subscribe(([event, isDirty]) => {
            if (isDirty) {
                event.preventDefault();
                event.returnValue = false;
            }
        });

    return isDirty$;
}

export function isEqual(a: any, b: any) {
    if (a === b) { return true; }

    if (a && b && typeof a === 'object' && typeof b === 'object') {
        if (a.const