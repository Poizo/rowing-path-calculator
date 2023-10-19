import { Injectable } from '@angular/core';
import { GET_ALL_POINTERS } from '../../DB/pointers.data';
import { Observable, of } from 'rxjs';
import { Pointer } from '../../models/pointer.model';
import { PointerName } from '../../types/pointer-name.type';
import { AllPointersDictionnary } from '../../types/all-pointers-dictionnary.type';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

    allPointers: AllPointersDictionnary = GET_ALL_POINTERS();

  constructor() { }

  public getAllPointers(): Observable<(Pointer | null)[]> {
    return of(Object.keys(this.allPointers).map(key => this.allPointers[(key as PointerName)]));
  }

  public getPointer(pointerName: PointerName): Observable<Pointer | null> {
    return of(this.allPointers[pointerName]);
  }
}
