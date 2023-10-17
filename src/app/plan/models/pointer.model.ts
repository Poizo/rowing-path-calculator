import { PointerName } from '../types/pointer-name.type';
import { BridgesNameEnum } from './../../enums/bridge-name.enum';
import { BuildingNameEnum } from './../../enums/building-name.enum';
export class Pointer {
    name!: PointerName;
    description?: string;
    distanceTo!: {
        [BuildingNameEnum.UNL]: number;
        [BuildingNameEnum.MEDIACITE]: number;
        [BuildingNameEnum.RSNM]: number;
        [BuildingNameEnum.MAMAC]: number;
        [BuildingNameEnum.CONFLUENT]: number;
        // [BridgesNameEnum.PONT_LIEGE]: number;
        // [BridgesNameEnum.PONT_CHEMIN_FER]: number;
        // [BridgesNameEnum.PONT_FRAGNE]: number;
        // [BridgesNameEnum.PONT_BELLE_ILE]: number;
        // [BridgesNameEnum.PONT_NAMUR]: number;
        // [BridgesNameEnum.PONT_FETINNE]: number;
        [BridgesNameEnum.PONT_MATIVA]: number;
        [BridgesNameEnum.PONT_BELLE_LIEGEOISE]: number;
        [BridgesNameEnum.PONT_ALBERT_1]: number;
        [BridgesNameEnum.PONT_PARC]: number;
        [BridgesNameEnum.PONT_HUY]: number;
        [BridgesNameEnum.PONT_JF_KENNEDY]: number;
        [BridgesNameEnum.PONT_LONGDOZ]: number;
        [BridgesNameEnum.PONT_SAUCY]: number;
        [BridgesNameEnum.PONT_ARCHE]: number;
        [BridgesNameEnum.PONT_AMERCOEUR]: number;
        [BridgesNameEnum.PONT_BRESSOUX]: number;
    }
}
