import { Injectable } from '@angular/core';
import { ALL_POINTERS } from '../../DB/pointers.data';
import { Observable, of } from 'rxjs';
import { Pointer } from '../../models/pointer.model';
import { PointerName } from '../../types/pointer-name.type';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor() { }

  public getAllPointers(): Observable<Pointer[]> {
    return of(ALL_POINTERS);
  }

  public getPointer(pointerName: PointerName): Observable<Pointer | undefined> {
    return of(ALL_POINTERS.find(p => p.name === pointerName));
  }
}
