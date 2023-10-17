import { BridgesNameEnum } from './../../enums/bridge-name.enum';
import { BuildingNameEnum } from './../../enums/building-name.enum';
import { Pointer } from "../models/pointer.model"

export const RSNM: Pointer = {
    name: BuildingNameEnum.RSNM,
    description: '',
    distanceTo: {
        [BuildingNameEnum.RSNM]: 0,
        [BuildingNameEnum.UNL]: 500,
        [BuildingNameEnum.CONFLUENT]: 650,
        [BuildingNameEnum.MAMAC]: 1120,
        [BuildingNameEnum.MEDIACITE]: 1650,
        [BridgesNameEnum.PONT_BELLE_LIEGEOISE]: 0,
        // [BridgesNameEnum.PONT_FRAGNE]: 870,
        // [BridgesNameEnum.PONT_CHEMIN_FER]: 1300,
        // [BridgesNameEnum.PONT_LIEGE]: 1400,
        // [BridgesNameEnum.PONT_BELLE_ILE]: 1710,
        // [BridgesNameEnum.PONT_NAMUR]: 1260,
        // [BridgesNameEnum.PONT_FETINNE]: 880,
        [BridgesNameEnum.PONT_MATIVA]: 865,
        [BridgesNameEnum.PONT_PARC]: 1380,
        [BridgesNameEnum.PONT_HUY]: 1750,
        [BridgesNameEnum.PONT_LONGDOZ]: 2220,
        [BridgesNameEnum.PONT_AMERCOEUR]: 2840,
        [BridgesNameEnum.PONT_BRESSOUX]: 3380,
        [BridgesNameEnum.PONT_ARCHE]: 6370,
        [BridgesNameEnum.PONT_SAUCY]: 6630,
        [BridgesNameEnum.PONT_JF_KENNEDY]: 7000,
        [BridgesNameEnum.PONT_ALBERT_1]: 7650
    }

};

export const MEDIACITE: Pointer = {
    name: BuildingNameEnum.MEDIACITE,
    description: '',
    distanceTo: {
        [BuildingNameEnum.MEDIACITE]: -0,
        [BuildingNameEnum.RSNM]: 6350,
        [BuildingNameEnum.UNL]: 6840,
        [BuildingNameEnum.CONFLUENT]: 7000,
        [BuildingNameEnum.MAMAC]: 7600,
        [BridgesNameEnum.PONT_HUY]: 30,
        [BridgesNameEnum.PONT_LONGDOZ]: 500,
        [BridgesNameEnum.PONT_AMERCOEUR]: 1100,
        [BridgesNameEnum.PONT_BRESSOUX]: 1640,
        [BridgesNameEnum.PONT_ARCHE]: 4560,
        [BridgesNameEnum.PONT_SAUCY]: 4830,
        [BridgesNameEnum.PONT_JF_KENNEDY]: 5200,
        [BridgesNameEnum.PONT_ALBERT_1]: 5860,
        [BridgesNameEnum.PONT_BELLE_LIEGEOISE]: 6350,
        // [BridgesNameEnum.PONT_FRAGNE]: 7240,
        // [BridgesNameEnum.PONT_CHEMIN_FER]: 7700,
        // [BridgesNameEnum.PONT_LIEGE]: 7800,
        // [BridgesNameEnum.PONT_FETINNE]: 7280,
        // [BridgesNameEnum.PONT_NAMUR]: 7600,
        // [BridgesNameEnum.PONT_BELLE_ILE]: 8100,
        [BridgesNameEnum.PONT_MATIVA]: 7260,
        [BridgesNameEnum.PONT_PARC]: 7770,
    }

};

export const UNL: Pointer = {
    name: BuildingNameEnum.UNL,
    description: '',
    distanceTo: {
        [BuildingNameEnum.UNL]: 0,
        [BuildingNameEnum.CONFLUENT]: 150,
        [BuildingNameEnum.MAMAC]: 680,
        [BuildingNameEnum.MEDIACITE]: 1230,
        [BuildingNameEnum.RSNM]: 7600,
        [BridgesNameEnum.PONT_MATIVA]: 390,
        [BridgesNameEnum.PONT_PARC]: 900,
        [BridgesNameEnum.PONT_HUY]: 1260,
        [BridgesNameEnum.PONT_LONGDOZ]: 1750,
        [BridgesNameEnum.PONT_AMERCOEUR]: 2350,
        [BridgesNameEnum.PONT_BRESSOUX]: 2900,
        [BridgesNameEnum.PONT_ARCHE]: 5820,
        [BridgesNameEnum.PONT_SAUCY]: 6000,
        [BridgesNameEnum.PONT_JF_KENNEDY]: 6450,
        [BridgesNameEnum.PONT_ALBERT_1]: 7120,
        [BridgesNameEnum.PONT_BELLE_LIEGEOISE]: 7600,
        // [BridgesNameEnum.PONT_FRAGNE]: -0,
        // [BridgesNameEnum.PONT_CHEMIN_FER]: -0,
        // [BridgesNameEnum.PONT_LIEGE]: -0,
        // [BridgesNameEnum.PONT_FETINNE]: -0,
        // [BridgesNameEnum.PONT_NAMUR]: -0,
        // [BridgesNameEnum.PONT_BELLE_ILE]: -0,
    }

};

export const MAMAC: Pointer = {
    name: BuildingNameEnum.MAMAC,
    description: '',
    distanceTo: {
        [BuildingNameEnum.UNL]: -0,
        [BuildingNameEnum.MEDIACITE]: -0,
        [BuildingNameEnum.RSNM]: -0,
        [BuildingNameEnum.MAMAC]: -0,
        [BuildingNameEnum.CONFLUENT]: -0,
        // [BridgesNameEnum.PONT_LIEGE]: -0,
        // [BridgesNameEnum.PONT_CHEMIN_FER]: -0,
        // [BridgesNameEnum.PONT_FRAGNE]: -0,
        // [BridgesNameEnum.PONT_BELLE_ILE]: -0,
        // [BridgesNameEnum.PONT_NAMUR]: -0,
        // [BridgesNameEnum.PONT_FETINNE]: -0,
        [BridgesNameEnum.PONT_MATIVA]: -0,
        [BridgesNameEnum.PONT_BELLE_LIEGEOISE]: -0,
        [BridgesNameEnum.PONT_ALBERT_1]: -0,
        [BridgesNameEnum.PONT_PARC]: -0,
        [BridgesNameEnum.PONT_HUY]: -0,
        [BridgesNameEnum.PONT_JF_KENNEDY]: -0,
        [BridgesNameEnum.PONT_LONGDOZ]: -0,
        [BridgesNameEnum.PONT_SAUCY]: -0,
        [BridgesNameEnum.PONT_ARCHE]: -0,
        [BridgesNameEnum.PONT_AMERCOEUR]: -0,
        [BridgesNameEnum.PONT_BRESSOUX]: -0
    }

};

export const CONFLUENT: Pointer = {
    name: BuildingNameEnum.CONFLUENT,
    description: '',
    distanceTo: {
        [BuildingNameEnum.UNL]: -0,
        [BuildingNameEnum.MEDIACITE]: -0,
        [BuildingNameEnum.RSNM]: -0,
        [BuildingNameEnum.MAMAC]: -0,
        [BuildingNameEnum.CONFLUENT]: -0,
        // [BridgesNameEnum.PONT_LIEGE]: -0,
        // [BridgesNameEnum.PONT_CHEMIN_FER]: -0,
        // [BridgesNameEnum.PONT_FRAGNE]: -0,
        // [BridgesNameEnum.PONT_BELLE_ILE]: -0,
        // [BridgesNameEnum.PONT_NAMUR]: -0,
        // [BridgesNameEnum.PONT_FETINNE]: -0,
        [BridgesNameEnum.PONT_MATIVA]: -0,
        [BridgesNameEnum.PONT_BELLE_LIEGEOISE]: -0,
        [BridgesNameEnum.PONT_ALBERT_1]: -0,
        [BridgesNameEnum.PONT_PARC]: -0,
        [BridgesNameEnum.PONT_HUY]: -0,
        [BridgesNameEnum.PONT_JF_KENNEDY]: -0,
        [BridgesNameEnum.PONT_LONGDOZ]: -0,
        [BridgesNameEnum.PONT_SAUCY]: -0,
        [BridgesNameEnum.PONT_ARCHE]: -0,
        [BridgesNameEnum.PONT_AMERCOEUR]: -0,
        [BridgesNameEnum.PONT_BRESSOUX]: -0
    }

};

export const PONT_LIEGE: Pointer = {
    name: BridgesNameEnum.PONT_LIEGE,
    description: '',
    distanceTo: {
        [BuildingNameEnum.UNL]: -0,
        [BuildingNameEnum.MEDIACITE]: -0,
        [BuildingNameEnum.RSNM]: -0,
        [BuildingNameEnum.MAMAC]: -0,
        [BuildingNameEnum.CONFLUENT]: -0,
        // [BridgesNameEnum.PONT_LIEGE]: -0,
        // [BridgesNameEnum.PONT_CHEMIN_FER]: -0,
        // [BridgesNameEnum.PONT_FRAGNE]: -0,
        // [BridgesNameEnum.PONT_BELLE_ILE]: -0,
        // [BridgesNameEnum.PONT_NAMUR]: -0,
        // [BridgesNameEnum.PONT_FETINNE]: -0,
        [BridgesNameEnum.PONT_MATIVA]: -0,
        [BridgesNameEnum.PONT_BELLE_LIEGEOISE]: -0,
        [BridgesNameEnum.PONT_ALBERT_1]: -0,
        [BridgesNameEnum.PONT_PARC]: -0,
        [BridgesNameEnum.PONT_HUY]: -0,
        [BridgesNameEnum.PONT_JF_KENNEDY]: -0,
        [BridgesNameEnum.PONT_LONGDOZ]: -0,
        [BridgesNameEnum.PONT_SAUCY]: -0,
        [BridgesNameEnum.PONT_ARCHE]: -0,
        [BridgesNameEnum.PONT_AMERCOEUR]: -0,
        [BridgesNameEnum.PONT_BRESSOUX]: -0
    }

};

export const PONT_CHEMIN_FER: Pointer = {
    name: BridgesNameEnum.PONT_CHEMIN_FER,
    description: '',
    distanceTo: {
        [BuildingNameEnum.UNL]: -0,
        [BuildingNameEnum.MEDIACITE]: -0,
        [BuildingNameEnum.RSNM]: -0,
        [BuildingNameEnum.MAMAC]: -0,
        [BuildingNameEnum.CONFLUENT]: -0,
        // [BridgesNameEnum.PONT_LIEGE]: -0,
        // [BridgesNameEnum.PONT_CHEMIN_FER]: -0,
        // [BridgesNameEnum.PONT_FRAGNE]: -0,
        // [BridgesNameEnum.PONT_BELLE_ILE]: -0,
        // [BridgesNameEnum.PONT_NAMUR]: -0,
        // [BridgesNameEnum.PONT_FETINNE]: -0,
        [BridgesNameEnum.PONT_MATIVA]: -0,
        [BridgesNameEnum.PONT_BELLE_LIEGEOISE]: -0,
        [BridgesNameEnum.PONT_ALBERT_1]: -0,
        [BridgesNameEnum.PONT_PARC]: -0,
        [BridgesNameEnum.PONT_HUY]: -0,
        [BridgesNameEnum.PONT_JF_KENNEDY]: -0,
        [BridgesNameEnum.PONT_LONGDOZ]: -0,
        [BridgesNameEnum.PONT_SAUCY]: -0,
        [BridgesNameEnum.PONT_ARCHE]: -0,
        [BridgesNameEnum.PONT_AMERCOEUR]: -0,
        [BridgesNameEnum.PONT_BRESSOUX]: -0
    }

};

export const PONT_FRAGNE: Pointer = {
    name: BridgesNameEnum.PONT_FRAGNE,
    description: '',
    distanceTo: {
        [BuildingNameEnum.UNL]: -0,
        [BuildingNameEnum.MEDIACITE]: -0,
        [BuildingNameEnum.RSNM]: -0,
        [BuildingNameEnum.MAMAC]: -0,
        [BuildingNameEnum.CONFLUENT]: -0,
        // [BridgesNameEnum.PONT_LIEGE]: -0,
        // [BridgesNameEnum.PONT_CHEMIN_FER]: -0,
        // [BridgesNameEnum.PONT_FRAGNE]: -0,
        // [BridgesNameEnum.PONT_BELLE_ILE]: -0,
        // [BridgesNameEnum.PONT_NAMUR]: -0,
        // [BridgesNameEnum.PONT_FETINNE]: -0,
        [BridgesNameEnum.PONT_MATIVA]: -0,
        [BridgesNameEnum.PONT_BELLE_LIEGEOISE]: -0,
        [BridgesNameEnum.PONT_ALBERT_1]: -0,
        [BridgesNameEnum.PONT_PARC]: -0,
        [BridgesNameEnum.PONT_HUY]: -0,
        [BridgesNameEnum.PONT_JF_KENNEDY]: -0,
        [BridgesNameEnum.PONT_LONGDOZ]: -0,
        [BridgesNameEnum.PONT_SAUCY]: -0,
        [BridgesNameEnum.PONT_ARCHE]: -0,
        [BridgesNameEnum.PONT_AMERCOEUR]: -0,
        [BridgesNameEnum.PONT_BRESSOUX]: -0
    }

};

export const PONT_BELLE_ILE: Pointer = {
    name: BridgesNameEnum.PONT_BELLE_ILE,
    description: '',
    distanceTo: {
        [BuildingNameEnum.UNL]: -0,
        [BuildingNameEnum.MEDIACITE]: -0,
        [BuildingNameEnum.RSNM]: -0,
        [BuildingNameEnum.MAMAC]: -0,
        [BuildingNameEnum.CONFLUENT]: -0,
        // [BridgesNameEnum.PONT_LIEGE]: -0,
        // [BridgesNameEnum.PONT_CHEMIN_FER]: -0,
        // [BridgesNameEnum.PONT_FRAGNE]: -0,
        // [BridgesNameEnum.PONT_BELLE_ILE]: -0,
        // [BridgesNameEnum.PONT_NAMUR]: -0,
        // [BridgesNameEnum.PONT_FETINNE]: -0,
        [BridgesNameEnum.PONT_MATIVA]: -0,
        [BridgesNameEnum.PONT_BELLE_LIEGEOISE]: -0,
        [BridgesNameEnum.PONT_ALBERT_1]: -0,
        [BridgesNameEnum.PONT_PARC]: -0,
        [BridgesNameEnum.PONT_HUY]: -0,
        [BridgesNameEnum.PONT_JF_KENNEDY]: -0,
        [BridgesNameEnum.PONT_LONGDOZ]: -0,
        [BridgesNameEnum.PONT_SAUCY]: -0,
        [BridgesNameEnum.PONT_ARCHE]: -0,
        [BridgesNameEnum.PONT_AMERCOEUR]: -0,
        [BridgesNameEnum.PONT_BRESSOUX]: -0
    }

};

export const PONT_NAMUR: Pointer = {
    name: BridgesNameEnum.PONT_NAMUR,
    description: '',
    distanceTo: {
        [BuildingNameEnum.UNL]: -0,
        [BuildingNameEnum.MEDIACITE]: -0,
        [BuildingNameEnum.RSNM]: -0,
        [BuildingNameEnum.MAMAC]: -0,
        [BuildingNameEnum.CONFLUENT]: -0,
        // [BridgesNameEnum.PONT_LIEGE]: -0,
        // [BridgesNameEnum.PONT_CHEMIN_FER]: -0,
        // [BridgesNameEnum.PONT_FRAGNE]: -0,
        // [BridgesNameEnum.PONT_BELLE_ILE]: -0,
        // [BridgesNameEnum.PONT_NAMUR]: -0,
        // [BridgesNameEnum.PONT_FETINNE]: -0,
        [BridgesNameEnum.PONT_MATIVA]: -0,
        [BridgesNameEnum.PONT_BELLE_LIEGEOISE]: -0,
        [BridgesNameEnum.PONT_ALBERT_1]: -0,
        [BridgesNameEnum.PONT_PARC]: -0,
        [BridgesNameEnum.PONT_HUY]: -0,
        [BridgesNameEnum.PONT_JF_KENNEDY]: -0,
        [BridgesNameEnum.PONT_LONGDOZ]: -0,
        [BridgesNameEnum.PONT_SAUCY]: -0,
        [BridgesNameEnum.PONT_ARCHE]: -0,
        [BridgesNameEnum.PONT_AMERCOEUR]: -0,
        [BridgesNameEnum.PONT_BRESSOUX]: -0
    }

};

export const PONT_FETINNE: Pointer = {
    name: BridgesNameEnum.PONT_FETINNE,
    description: '',
    distanceTo: {
        [BuildingNameEnum.UNL]: -0,
        [BuildingNameEnum.MEDIACITE]: -0,
        [BuildingNameEnum.RSNM]: -0,
        [BuildingNameEnum.MAMAC]: -0,
        [BuildingNameEnum.CONFLUENT]: -0,
        // [BridgesNameEnum.PONT_LIEGE]: -0,
        // [BridgesNameEnum.PONT_CHEMIN_FER]: -0,
        // [BridgesNameEnum.PONT_FRAGNE]: -0,
        // [BridgesNameEnum.PONT_BELLE_ILE]: -0,
        // [BridgesNameEnum.PONT_NAMUR]: -0,
        // [BridgesNameEnum.PONT_FETINNE]: -0,
        [BridgesNameEnum.PONT_MATIVA]: -0,
        [BridgesNameEnum.PONT_BELLE_LIEGEOISE]: -0,
        [BridgesNameEnum.PONT_ALBERT_1]: -0,
        [BridgesNameEnum.PONT_PARC]: -0,
        [BridgesNameEnum.PONT_HUY]: -0,
        [BridgesNameEnum.PONT_JF_KENNEDY]: -0,
        [BridgesNameEnum.PONT_LONGDOZ]: -0,
        [BridgesNameEnum.PONT_SAUCY]: -0,
        [BridgesNameEnum.PONT_ARCHE]: -0,
        [BridgesNameEnum.PONT_AMERCOEUR]: -0,
        [BridgesNameEnum.PONT_BRESSOUX]: -0
    }

};

export const PONT_MATIVA: Pointer = {
    name: BridgesNameEnum.PONT_MATIVA,
    description: '',
    distanceTo: {
        [BuildingNameEnum.UNL]: -0,
        [BuildingNameEnum.MEDIACITE]: -0,
        [BuildingNameEnum.RSNM]: -0,
        [BuildingNameEnum.MAMAC]: -0,
        [BuildingNameEnum.CONFLUENT]: -0,
        // [BridgesNameEnum.PONT_LIEGE]: -0,
        // [BridgesNameEnum.PONT_CHEMIN_FER]: -0,
        // [BridgesNameEnum.PONT_FRAGNE]: -0,
        // [BridgesNameEnum.PONT_BELLE_ILE]: -0,
        // [BridgesNameEnum.PONT_NAMUR]: -0,
        // [BridgesNameEnum.PONT_FETINNE]: -0,
        [BridgesNameEnum.PONT_MATIVA]: -0,
        [BridgesNameEnum.PONT_BELLE_LIEGEOISE]: -0,
        [BridgesNameEnum.PONT_ALBERT_1]: -0,
        [BridgesNameEnum.PONT_PARC]: -0,
        [BridgesNameEnum.PONT_HUY]: -0,
        [BridgesNameEnum.PONT_JF_KENNEDY]: -0,
        [BridgesNameEnum.PONT_LONGDOZ]: -0,
        [BridgesNameEnum.PONT_SAUCY]: -0,
        [BridgesNameEnum.PONT_ARCHE]: -0,
        [BridgesNameEnum.PONT_AMERCOEUR]: -0,
        [BridgesNameEnum.PONT_BRESSOUX]: -0
    }

};

export const PONT_BELLE_LIEGEOISE: Pointer = {
    name: BridgesNameEnum.PONT_BELLE_LIEGEOISE,
    description: '',
    distanceTo: {
        [BuildingNameEnum.UNL]: -0,
        [BuildingNameEnum.MEDIACITE]: -0,
        [BuildingNameEnum.RSNM]: -0,
        [BuildingNameEnum.MAMAC]: -0,
        [BuildingNameEnum.CONFLUENT]: -0,
        // [BridgesNameEnum.PONT_LIEGE]: -0,
        // [BridgesNameEnum.PONT_CHEMIN_FER]: -0,
        // [BridgesNameEnum.PONT_FRAGNE]: -0,
        // [BridgesNameEnum.PONT_BELLE_ILE]: -0,
        // [BridgesNameEnum.PONT_NAMUR]: -0,
        // [BridgesNameEnum.PONT_FETINNE]: -0,
        [BridgesNameEnum.PONT_MATIVA]: -0,
        [BridgesNameEnum.PONT_BELLE_LIEGEOISE]: -0,
        [BridgesNameEnum.PONT_ALBERT_1]: -0,
        [BridgesNameEnum.PONT_PARC]: -0,
        [BridgesNameEnum.PONT_HUY]: -0,
        [BridgesNameEnum.PONT_JF_KENNEDY]: -0,
        [BridgesNameEnum.PONT_LONGDOZ]: -0,
        [BridgesNameEnum.PONT_SAUCY]: -0,
        [BridgesNameEnum.PONT_ARCHE]: -0,
        [BridgesNameEnum.PONT_AMERCOEUR]: -0,
        [BridgesNameEnum.PONT_BRESSOUX]: -0
    }

};

export const PONT_ALBERT_1: Pointer = {
    name: BridgesNameEnum.PONT_ALBERT_1,
    description: '',
    distanceTo: {
        [BuildingNameEnum.UNL]: -0,
        [BuildingNameEnum.MEDIACITE]: -0,
        [BuildingNameEnum.RSNM]: -0,
        [BuildingNameEnum.MAMAC]: -0,
        [BuildingNameEnum.CONFLUENT]: -0,
        // [BridgesNameEnum.PONT_LIEGE]: -0,
        // [BridgesNameEnum.PONT_CHEMIN_FER]: -0,
        // [BridgesNameEnum.PONT_FRAGNE]: -0,
        // [BridgesNameEnum.PONT_BELLE_ILE]: -0,
        // [BridgesNameEnum.PONT_NAMUR]: -0,
        // [BridgesNameEnum.PONT_FETINNE]: -0,
        [BridgesNameEnum.PONT_MATIVA]: -0,
        [BridgesNameEnum.PONT_BELLE_LIEGEOISE]: -0,
        [BridgesNameEnum.PONT_ALBERT_1]: -0,
        [BridgesNameEnum.PONT_PARC]: -0,
        [BridgesNameEnum.PONT_HUY]: -0,
        [BridgesNameEnum.PONT_JF_KENNEDY]: -0,
        [BridgesNameEnum.PONT_LONGDOZ]: -0,
        [BridgesNameEnum.PONT_SAUCY]: -0,
        [BridgesNameEnum.PONT_ARCHE]: -0,
        [BridgesNameEnum.PONT_AMERCOEUR]: -0,
        [BridgesNameEnum.PONT_BRESSOUX]: -0
    }

};

export const PONT_PARC: Pointer = {
    name: BridgesNameEnum.PONT_PARC,
    description: '',
    distanceTo: {
        [BuildingNameEnum.UNL]: -0,
        [BuildingNameEnum.MEDIACITE]: -0,
        [BuildingNameEnum.RSNM]: -0,
        [BuildingNameEnum.MAMAC]: -0,
        [BuildingNameEnum.CONFLUENT]: -0,
        // [BridgesNameEnum.PONT_LIEGE]: -0,
        // [BridgesNameEnum.PONT_CHEMIN_FER]: -0,
        // [BridgesNameEnum.PONT_FRAGNE]: -0,
        // [BridgesNameEnum.PONT_BELLE_ILE]: -0,
        // [BridgesNameEnum.PONT_NAMUR]: -0,
        // [BridgesNameEnum.PONT_FETINNE]: -0,
        [BridgesNameEnum.PONT_MATIVA]: -0,
        [BridgesNameEnum.PONT_BELLE_LIEGEOISE]: -0,
        [BridgesNameEnum.PONT_ALBERT_1]: -0,
        [BridgesNameEnum.PONT_PARC]: -0,
        [BridgesNameEnum.PONT_HUY]: -0,
        [BridgesNameEnum.PONT_JF_KENNEDY]: -0,
        [BridgesNameEnum.PONT_LONGDOZ]: -0,
        [BridgesNameEnum.PONT_SAUCY]: -0,
        [BridgesNameEnum.PONT_ARCHE]: -0,
        [BridgesNameEnum.PONT_AMERCOEUR]: -0,
        [BridgesNameEnum.PONT_BRESSOUX]: -0
    }

};

export const PONT_HUY: Pointer = {
    name: BridgesNameEnum.PONT_HUY,
    description: '',
    distanceTo: {
        [BuildingNameEnum.UNL]: -0,
        [BuildingNameEnum.MEDIACITE]: -0,
        [BuildingNameEnum.RSNM]: -0,
        [BuildingNameEnum.MAMAC]: -0,
        [BuildingNameEnum.CONFLUENT]: -0,
        // [BridgesNameEnum.PONT_LIEGE]: -0,
        // [BridgesNameEnum.PONT_CHEMIN_FER]: -0,
        // [BridgesNameEnum.PONT_FRAGNE]: -0,
        // [BridgesNameEnum.PONT_BELLE_ILE]: -0,
        // [BridgesNameEnum.PONT_NAMUR]: -0,
        // [BridgesNameEnum.PONT_FETINNE]: -0,
        [BridgesNameEnum.PONT_MATIVA]: -0,
        [BridgesNameEnum.PONT_BELLE_LIEGEOISE]: -0,
        [BridgesNameEnum.PONT_ALBERT_1]: -0,
        [BridgesNameEnum.PONT_PARC]: -0,
        [BridgesNameEnum.PONT_HUY]: -0,
        [BridgesNameEnum.PONT_JF_KENNEDY]: -0,
        [BridgesNameEnum.PONT_LONGDOZ]: -0,
        [BridgesNameEnum.PONT_SAUCY]: -0,
        [BridgesNameEnum.PONT_ARCHE]: -0,
        [BridgesNameEnum.PONT_AMERCOEUR]: -0,
        [BridgesNameEnum.PONT_BRESSOUX]: -0
    }

};

export const PONT_JF_KENNEDY: Pointer = {
    name: BridgesNameEnum.PONT_JF_KENNEDY,
    description: '',
    distanceTo: {
        [BuildingNameEnum.UNL]: -0,
        [BuildingNameEnum.MEDIACITE]: -0,
        [BuildingNameEnum.RSNM]: -0,
        [BuildingNameEnum.MAMAC]: -0,
        [BuildingNameEnum.CONFLUENT]: -0,
        // [BridgesNameEnum.PONT_LIEGE]: -0,
        // [BridgesNameEnum.PONT_CHEMIN_FER]: -0,
        // [BridgesNameEnum.PONT_FRAGNE]: -0,
        // [BridgesNameEnum.PONT_BELLE_ILE]: -0,
        // [BridgesNameEnum.PONT_NAMUR]: -0,
        // [BridgesNameEnum.PONT_FETINNE]: -0,
        [BridgesNameEnum.PONT_MATIVA]: -0,
        [BridgesNameEnum.PONT_BELLE_LIEGEOISE]: -0,
        [BridgesNameEnum.PONT_ALBERT_1]: -0,
        [BridgesNameEnum.PONT_PARC]: -0,
        [BridgesNameEnum.PONT_HUY]: -0,
        [BridgesNameEnum.PONT_JF_KENNEDY]: -0,
        [BridgesNameEnum.PONT_LONGDOZ]: -0,
        [BridgesNameEnum.PONT_SAUCY]: -0,
        [BridgesNameEnum.PONT_ARCHE]: -0,
        [BridgesNameEnum.PONT_AMERCOEUR]: -0,
        [BridgesNameEnum.PONT_BRESSOUX]: -0
    }

};

export const PONT_LONGDOZ: Pointer = {
    name: BridgesNameEnum.PONT_LONGDOZ,
    description: '',
    distanceTo: {
        [BuildingNameEnum.UNL]: -0,
        [BuildingNameEnum.MEDIACITE]: -0,
        [BuildingNameEnum.RSNM]: -0,
        [BuildingNameEnum.MAMAC]: -0,
        [BuildingNameEnum.CONFLUENT]: -0,
        // [BridgesNameEnum.PONT_LIEGE]: -0,
        // [BridgesNameEnum.PONT_CHEMIN_FER]: -0,
        // [BridgesNameEnum.PONT_FRAGNE]: -0,
        // [BridgesNameEnum.PONT_BELLE_ILE]: -0,
        // [BridgesNameEnum.PONT_NAMUR]: -0,
        // [BridgesNameEnum.PONT_FETINNE]: -0,
        [BridgesNameEnum.PONT_MATIVA]: -0,
        [BridgesNameEnum.PONT_BELLE_LIEGEOISE]: -0,
        [BridgesNameEnum.PONT_ALBERT_1]: -0,
        [BridgesNameEnum.PONT_PARC]: -0,
        [BridgesNameEnum.PONT_HUY]: -0,
        [BridgesNameEnum.PONT_JF_KENNEDY]: -0,
        [BridgesNameEnum.PONT_LONGDOZ]: -0,
        [BridgesNameEnum.PONT_SAUCY]: -0,
        [BridgesNameEnum.PONT_ARCHE]: -0,
        [BridgesNameEnum.PONT_AMERCOEUR]: -0,
        [BridgesNameEnum.PONT_BRESSOUX]: -0
    }

};

export const PONT_SAUCY: Pointer = {
    name: BridgesNameEnum.PONT_SAUCY,
    description: '',
    distanceTo: {
        [BuildingNameEnum.UNL]: -0,
        [BuildingNameEnum.MEDIACITE]: -0,
        [BuildingNameEnum.RSNM]: -0,
        [BuildingNameEnum.MAMAC]: -0,
        [BuildingNameEnum.CONFLUENT]: -0,
        // [BridgesNameEnum.PONT_LIEGE]: -0,
        // [BridgesNameEnum.PONT_CHEMIN_FER]: -0,
        // [BridgesNameEnum.PONT_FRAGNE]: -0,
        // [BridgesNameEnum.PONT_BELLE_ILE]: -0,
        // [BridgesNameEnum.PONT_NAMUR]: -0,
        // [BridgesNameEnum.PONT_FETINNE]: -0,
        [BridgesNameEnum.PONT_MATIVA]: -0,
        [BridgesNameEnum.PONT_BELLE_LIEGEOISE]: -0,
        [BridgesNameEnum.PONT_ALBERT_1]: -0,
        [BridgesNameEnum.PONT_PARC]: -0,
        [BridgesNameEnum.PONT_HUY]: -0,
        [BridgesNameEnum.PONT_JF_KENNEDY]: -0,
        [BridgesNameEnum.PONT_LONGDOZ]: -0,
        [BridgesNameEnum.PONT_SAUCY]: -0,
        [BridgesNameEnum.PONT_ARCHE]: -0,
        [BridgesNameEnum.PONT_AMERCOEUR]: -0,
        [BridgesNameEnum.PONT_BRESSOUX]: -0
    }

};

export const PONT_ARCHE: Pointer = {
    name: BridgesNameEnum.PONT_ARCHE,
    description: '',
    distanceTo: {
        [BuildingNameEnum.UNL]: -0,
        [BuildingNameEnum.MEDIACITE]: -0,
        [BuildingNameEnum.RSNM]: -0,
        [BuildingNameEnum.MAMAC]: -0,
        [BuildingNameEnum.CONFLUENT]: -0,
        // [BridgesNameEnum.PONT_LIEGE]: -0,
        // [BridgesNameEnum.PONT_CHEMIN_FER]: -0,
        // [BridgesNameEnum.PONT_FRAGNE]: -0,
        // [BridgesNameEnum.PONT_BELLE_ILE]: -0,
        // [BridgesNameEnum.PONT_NAMUR]: -0,
        // [BridgesNameEnum.PONT_FETINNE]: -0,
        [BridgesNameEnum.PONT_MATIVA]: -0,
        [BridgesNameEnum.PONT_BELLE_LIEGEOISE]: -0,
        [BridgesNameEnum.PONT_ALBERT_1]: -0,
        [BridgesNameEnum.PONT_PARC]: -0,
        [BridgesNameEnum.PONT_HUY]: -0,
        [BridgesNameEnum.PONT_JF_KENNEDY]: -0,
        [BridgesNameEnum.PONT_LONGDOZ]: -0,
        [BridgesNameEnum.PONT_SAUCY]: -0,
        [BridgesNameEnum.PONT_ARCHE]: -0,
        [BridgesNameEnum.PONT_AMERCOEUR]: -0,
        [BridgesNameEnum.PONT_BRESSOUX]: -0
    }

};

export const PONT_AMERCOEUR: Pointer = {
    name: BridgesNameEnum.PONT_AMERCOEUR,
    description: '',
    distanceTo: {
        [BuildingNameEnum.UNL]: -0,
        [BuildingNameEnum.MEDIACITE]: -0,
        [BuildingNameEnum.RSNM]: -0,
        [BuildingNameEnum.MAMAC]: -0,
        [BuildingNameEnum.CONFLUENT]: -0,
        // [BridgesNameEnum.PONT_LIEGE]: -0,
        // [BridgesNameEnum.PONT_CHEMIN_FER]: -0,
        // [BridgesNameEnum.PONT_FRAGNE]: -0,
        // [BridgesNameEnum.PONT_BELLE_ILE]: -0,
        // [BridgesNameEnum.PONT_NAMUR]: -0,
        // [BridgesNameEnum.PONT_FETINNE]: -0,
        [BridgesNameEnum.PONT_MATIVA]: -0,
        [BridgesNameEnum.PONT_BELLE_LIEGEOISE]: -0,
        [BridgesNameEnum.PONT_ALBERT_1]: -0,
        [BridgesNameEnum.PONT_PARC]: -0,
        [BridgesNameEnum.PONT_HUY]: -0,
        [BridgesNameEnum.PONT_JF_KENNEDY]: -0,
        [BridgesNameEnum.PONT_LONGDOZ]: -0,
        [BridgesNameEnum.PONT_SAUCY]: -0,
        [BridgesNameEnum.PONT_ARCHE]: -0,
        [BridgesNameEnum.PONT_AMERCOEUR]: -0,
        [BridgesNameEnum.PONT_BRESSOUX]: -0
    }

};

export const PONT_BRESSOUX: Pointer = {
    name: BridgesNameEnum.PONT_BRESSOUX,
    description: '',
    distanceTo: {
        [BuildingNameEnum.UNL]: -0,
        [BuildingNameEnum.MEDIACITE]: -0,
        [BuildingNameEnum.RSNM]: -0,
        [BuildingNameEnum.MAMAC]: -0,
        [BuildingNameEnum.CONFLUENT]: -0,
        // [BridgesNameEnum.PONT_LIEGE]: -0,
        // [BridgesNameEnum.PONT_CHEMIN_FER]: -0,
        // [BridgesNameEnum.PONT_FRAGNE]: -0,
        // [BridgesNameEnum.PONT_BELLE_ILE]: -0,
        // [BridgesNameEnum.PONT_NAMUR]: -0,
        // [BridgesNameEnum.PONT_FETINNE]: -0,
        [BridgesNameEnum.PONT_MATIVA]: -0,
        [BridgesNameEnum.PONT_BELLE_LIEGEOISE]: -0,
        [BridgesNameEnum.PONT_ALBERT_1]: -0,
        [BridgesNameEnum.PONT_PARC]: -0,
        [BridgesNameEnum.PONT_HUY]: -0,
        [BridgesNameEnum.PONT_JF_KENNEDY]: -0,
        [BridgesNameEnum.PONT_LONGDOZ]: -0,
        [BridgesNameEnum.PONT_SAUCY]: -0,
        [BridgesNameEnum.PONT_ARCHE]: -0,
        [BridgesNameEnum.PONT_AMERCOEUR]: -0,
        [BridgesNameEnum.PONT_BRESSOUX]: -0
    }

};

export const ISLAND_TOUR = 8100;
export const ALL_POINTERS = [
    RSNM,
    MEDIACITE,
    UNL,
    MAMAC,
    CONFLUENT,
    PONT_LIEGE,
    PONT_CHEMIN_FER,
    PONT_FRAGNE,
    PONT_BELLE_ILE,
    PONT_NAMUR,
    PONT_FETINNE,
    PONT_MATIVA,
    PONT_BELLE_LIEGEOISE,
    PONT_ALBERT_1,
    PONT_PARC,
    PONT_HUY,
    PONT_JF_KENNEDY,
    PONT_LONGDOZ,
    PONT_SAUCY,
    PONT_ARCHE,
    PONT_AMERCOEUR,
    PONT_BRESSOUX
];
