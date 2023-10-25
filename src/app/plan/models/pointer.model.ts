import { PointerName } from '../types/pointer-name.type';
import { BridgesNameEnum } from './../../enums/bridge-name.enum';
import { BuildingNameEnum } from './../../enums/building-name.enum';
export class Pointer {
    name!: PointerName;
    description?: string;
    distanceToClockwise!: {
        [BuildingNameEnum.UNL]: number;
        [BuildingNameEnum.MEDIACITE]: number;
        [BuildingNameEnum.RSNM]: number;
        [BuildingNameEnum.MAMAC]: number;
        [BuildingNameEnum.CONFLUENT]: number;
        [BuildingNameEnum.CURTIUS]: number;
        [BuildingNameEnum.AQUARIUM]: number;

        [BridgesNameEnum.PONT_LIEGE]: number;
        [BridgesNameEnum.PONT_CHEMIN_FER]: number;
        [BridgesNameEnum.PONT_FRAGNE]: number;
        [BridgesNameEnum.PONT_BELLE_ILE]: number;
        [BridgesNameEnum.PONT_NAMUR]: number;
        [BridgesNameEnum.PONT_FETINNE]: number;
        [BridgesNameEnum.PONT_GRAMME]: number;
        [BridgesNameEnum.PONT_MATIVA]: number;
        [BridgesNameEnum.PONT_PARC]: number;
        [BridgesNameEnum.PONT_HUY]: number;
        [BridgesNameEnum.PONT_AMERCOEUR]: number;
        [BridgesNameEnum.PONT_BRESSOUX]: number;
        [BridgesNameEnum.PONT_BIAIS]: number;
        [BridgesNameEnum.PONT_ATLAS]: number;
        [BridgesNameEnum.PONT_MAGHIN]: number;
        [BridgesNameEnum.PONT_BELLE_LIEGEOISE]: number;
        [BridgesNameEnum.PONT_JF_KENNEDY]: number;
        [BridgesNameEnum.PONT_ALBERT_1]: number;
        [BridgesNameEnum.PONT_LONGDOZ]: number;
        [BridgesNameEnum.PONT_SAUCY]: number;
        [BridgesNameEnum.PONT_ARCHE]: number;
    }
    distanceToReverseClockwise!: {
        [BuildingNameEnum.UNL]: number;
        [BuildingNameEnum.MEDIACITE]: number;
        [BuildingNameEnum.RSNM]: number;
        [BuildingNameEnum.MAMAC]: number;
        [BuildingNameEnum.CONFLUENT]: number;
        [BuildingNameEnum.CURTIUS]: number;
        [BuildingNameEnum.AQUARIUM]: number;

        [BridgesNameEnum.PONT_LIEGE]: number;
        [BridgesNameEnum.PONT_CHEMIN_FER]: number;
        [BridgesNameEnum.PONT_FRAGNE]: number;
        [BridgesNameEnum.PONT_BELLE_ILE]: number;
        [BridgesNameEnum.PONT_NAMUR]: number;
        [BridgesNameEnum.PONT_FETINNE]: number;
        [BridgesNameEnum.PONT_GRAMME]: number;
        [BridgesNameEnum.PONT_MATIVA]: number;
        [BridgesNameEnum.PONT_PARC]: number;
        [BridgesNameEnum.PONT_HUY]: number;
        [BridgesNameEnum.PONT_AMERCOEUR]: number;
        [BridgesNameEnum.PONT_BRESSOUX]: number;
        [BridgesNameEnum.PONT_BIAIS]: number;
        [BridgesNameEnum.PONT_ATLAS]: number;
        [BridgesNameEnum.PONT_MAGHIN]: number;
        [BridgesNameEnum.PONT_BELLE_LIEGEOISE]: number;
        [BridgesNameEnum.PONT_JF_KENNEDY]: number;
        [BridgesNameEnum.PONT_ALBERT_1]: number;
        [BridgesNameEnum.PONT_LONGDOZ]: number;
        [BridgesNameEnum.PONT_SAUCY]: number;
        [BridgesNameEnum.PONT_ARCHE]: number;
    }
}
