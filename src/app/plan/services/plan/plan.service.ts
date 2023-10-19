import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { GET_ALL_POINTERS } from '../../DB/pointers.data';
import { Pointer } from '../../models/pointer.model';
import { AllPointersDictionnary } from '../../types/all-pointers-dictionnary.type';
import { PointerName } from '../../types/pointer-name.type';

@Injectable({
    providedIn: 'root'
})
export class PlanService {

    allPointers: AllPointersDictionnary = GET_ALL_POINTERS();

    public isRecordingJourney$ = new BehaviorSubject<boolean>(false);

    constructor() { }

    public isRecording(): boolean {
        return this.isRecordingJourney$.value;
    }

    public getAllPointers(): Observable<(Pointer | null)[]> {
        return of(Object.keys(this.allPointers).map(key => this.allPointers[(key as PointerName)]));
    }

    public getPointer(pointerName: PointerName): Observable<Pointer | null> {
        return of(this.allPointers[pointerName]);
    }

    public startRecordAJourney() {
        this.isRecordingJourney$.next(true);
    }

    public stopRecordingJourney() {
        this.isRecordingJourney$.next(false);
    }
}
