import { Pointer } from '../models/pointer.model';
import { PointerName } from './pointer-name.type';

/**
 * Object with properties's name that are a PointerName and values that represent Pointers
 */
export type AllPointersDictionnary = { [key in PointerName]: Pointer | null };
