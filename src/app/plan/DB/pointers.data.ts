import { BridgesNameEnum } from './../../enums/bridge-name.enum';
import { BuildingNameEnum } from './../../enums/building-name.enum';
import { Pointer } from "../models/pointer.model"
import { PointerName } from '../types/pointer-name.type';
import { AllPointersDictionnary } from '../types/all-pointers-dictionnary.type';

/**
 * POINTER REPRESENTING THE RSNM AND ALL DISTANCE BETWEEN IT AND OTHER POINTERS
 * It will be used has the main referencial for calculing other pointers's distances
 */
export const RSNM: Pointer = {
    name: BuildingNameEnum.RSNM,
    description: '',
    distanceToReverseClockwise: {
        [BuildingNameEnum.RSNM]: 0,
        [BuildingNameEnum.UNL]: 500,
        [BuildingNameEnum.CONFLUENT]: 650,
        [BuildingNameEnum.MAMAC]: 1140,
        [BuildingNameEnum.MEDIACITE]: 1650,
        [BridgesNameEnum.PONT_BELLE_LIEGEOISE]: 0,
        [BridgesNameEnum.PONT_MATIVA]: 850,
        [BridgesNameEnum.PONT_PARC]: 1360,
        [BridgesNameEnum.PONT_HUY]: 1750,
        [BridgesNameEnum.PONT_LONGDOZ]: 2230,
        [BridgesNameEnum.PONT_AMERCOEUR]: 2840,
        [BridgesNameEnum.PONT_BRESSOUX]: 3380,
        [BridgesNameEnum.PONT_ARCHE]: 6350,
        [BridgesNameEnum.PONT_SAUCY]: 6600,
        [BridgesNameEnum.PONT_JF_KENNEDY]: 7000,
        [BridgesNameEnum.PONT_ALBERT_1]: 7600,

        [BridgesNameEnum.PONT_FRAGNE]: 880,
        [BridgesNameEnum.PONT_CHEMIN_FER]: 1300,
        [BridgesNameEnum.PONT_LIEGE]: 1400,
        [BridgesNameEnum.PONT_FETINNE]: 880,
        [BridgesNameEnum.PONT_NAMUR]: 1260,
        [BridgesNameEnum.PONT_BELLE_ILE]: 1710,
// TODO:
        [BuildingNameEnum.CURTIUS]: 0,
        [BuildingNameEnum.AQUARIUM]: 0,
        [BridgesNameEnum.PONT_GRAMME]: 0,
        [BridgesNameEnum.PONT_BIAIS]: 0,
        [BridgesNameEnum.PONT_ATLAS]: 0,
        [BridgesNameEnum.PONT_MAGHIN]: 0
    },
    distanceToClockwise: {
        [BuildingNameEnum.RSNM]: 0,
        [BuildingNameEnum.CONFLUENT]: 7450,
        [BuildingNameEnum.UNL]: 7600,
        [BuildingNameEnum.MAMAC]: 6960,
        [BuildingNameEnum.MEDIACITE]: 6450,
        [BridgesNameEnum.PONT_BELLE_LIEGEOISE]: 0,
        [BridgesNameEnum.PONT_FRAGNE]: 7650,
        [BridgesNameEnum.PONT_CHEMIN_FER]: 8120,
        [BridgesNameEnum.PONT_LIEGE]: 8220,
        [BridgesNameEnum.PONT_FETINNE]: 7660,
        [BridgesNameEnum.PONT_NAMUR]: 8000,
        [BridgesNameEnum.PONT_BELLE_ILE]: 8500,
        [BridgesNameEnum.PONT_MATIVA]: 7250,
        [BridgesNameEnum.PONT_PARC]: 6740,
        [BridgesNameEnum.PONT_HUY]: 6350,
        [BridgesNameEnum.PONT_LONGDOZ]: 5870,
        [BridgesNameEnum.PONT_AMERCOEUR]: 5260,
        [BridgesNameEnum.PONT_BRESSOUX]: 4720,
        [BridgesNameEnum.PONT_ARCHE]: 1750,
        [BridgesNameEnum.PONT_SAUCY]: 1500,
        [BridgesNameEnum.PONT_JF_KENNEDY]: 1100,
        [BridgesNameEnum.PONT_ALBERT_1]: 500,
        // TODO:
        [BuildingNameEnum.CURTIUS]: 0,
        [BuildingNameEnum.AQUARIUM]: 0,
        [BridgesNameEnum.PONT_GRAMME]: 0,
        [BridgesNameEnum.PONT_BIAIS]: 0,
        [BridgesNameEnum.PONT_ATLAS]: 0,
        [BridgesNameEnum.PONT_MAGHIN]: 0
    }
};

/****************************************************************/
/////////// CONSTANTS USED FOR THE DISTANCE CALCULING
/****************************************************************/
export const ISLAND_TOUR = 8100;
const DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS = {
    [BridgesNameEnum.PONT_FRAGNE]: 230,
    [BridgesNameEnum.PONT_CHEMIN_FER]: 650,
    [BridgesNameEnum.PONT_LIEGE]: 750,
    [BridgesNameEnum.PONT_BELLE_ILE]: 1060,
    [BridgesNameEnum.PONT_NAMUR]: 610,
    [BridgesNameEnum.PONT_FETINNE]: 230,
    [BridgesNameEnum.PONT_GRAMME]: 140
};
type NotIslandLevelPointerType = BridgesNameEnum.PONT_FRAGNE | BridgesNameEnum.PONT_GRAMME | BridgesNameEnum.PONT_CHEMIN_FER | BridgesNameEnum.PONT_LIEGE | BridgesNameEnum.PONT_BELLE_ILE | BridgesNameEnum.PONT_NAMUR | BridgesNameEnum.PONT_FETINNE;
export const NOT_ON_ISLAND_LEVEL_POINTERS: NotIslandLevelPointerType[] = [
    BridgesNameEnum.PONT_FRAGNE,
    BridgesNameEnum.PONT_CHEMIN_FER,
    BridgesNameEnum.PONT_LIEGE,
    BridgesNameEnum.PONT_BELLE_ILE,
    BridgesNameEnum.PONT_NAMUR,
    BridgesNameEnum.PONT_FETINNE,
    BridgesNameEnum.PONT_GRAMME
]

/****************************************************************/

/**
 * Function that create all Pointer's models based on the RSNM referential for the distances.
 *
 * @returns AllPointersDictionnary
 */
export const GET_ALL_POINTERS = (): AllPointersDictionnary => {
    // First create an instance of `AllPointersDictionnary` without data in it, just the properties name
    const all_pointers: AllPointersDictionnary = {
        [BuildingNameEnum.UNL]: null,
        [BuildingNameEnum.MEDIACITE]: null,
        [BuildingNameEnum.RSNM]: null,
        [BuildingNameEnum.MAMAC]: null,
        [BuildingNameEnum.CONFLUENT]: null,
        [BuildingNameEnum.CURTIUS]: null,
        [BuildingNameEnum.AQUARIUM]: null,

        [BridgesNameEnum.PONT_LIEGE]: null,
        [BridgesNameEnum.PONT_CHEMIN_FER]: null,
        [BridgesNameEnum.PONT_FRAGNE]: null,
        [BridgesNameEnum.PONT_BELLE_ILE]: null,
        [BridgesNameEnum.PONT_NAMUR]: null,
        [BridgesNameEnum.PONT_FETINNE]: null,
        [BridgesNameEnum.PONT_GRAMME]: null,
        [BridgesNameEnum.PONT_MATIVA]: null,
        [BridgesNameEnum.PONT_PARC]: null,
        [BridgesNameEnum.PONT_HUY]: null,
        [BridgesNameEnum.PONT_AMERCOEUR]: null,
        [BridgesNameEnum.PONT_BRESSOUX]: null,
        [BridgesNameEnum.PONT_BIAIS]: null,
        [BridgesNameEnum.PONT_ATLAS]: null,
        [BridgesNameEnum.PONT_MAGHIN]: null,
        [BridgesNameEnum.PONT_BELLE_LIEGEOISE]: null,
        [BridgesNameEnum.PONT_JF_KENNEDY]: null,
        [BridgesNameEnum.PONT_ALBERT_1]: null,
        [BridgesNameEnum.PONT_LONGDOZ]: null,
        [BridgesNameEnum.PONT_SAUCY]: null,
        [BridgesNameEnum.PONT_ARCHE]: null,
    };

    // Then loop on all theses properties's keys
    Object.keys(all_pointers).forEach(key => {
        // Create a empty Pointer instance that will be filled and set at the key property we're looping on
        let pointer: Pointer = new Pointer();

        if (key === BuildingNameEnum.RSNM) {
            // If the property is the RSNM (our referencial) we can set the object directly without any calculation
            pointer = RSNM;
        } else {
            // Else … wee need to set all the Pointer's values
            // First the name - it'll be the key we're loopig on
            pointer.name = (key as PointerName);

            /**************************/
            /***************** THIS WILL CREATE THE DISTANCE BETWEEN THE POINTERS THAT ARE ON THE ISLAND LEVEL *****************/
            // Checking if the key is not a islandlevel pointer, if it's not we can do the following operations to set the pointers values
            if (!NOT_ON_ISLAND_LEVEL_POINTERS.some(pointerName => pointerName === key)) {
                /**************************/
                // Secondly we're calculing the distance between the current pointer (ON THE ISLAND)
                // and all other pointers by doing the difference between the distance between RSNM and the the two Pointers we want the distances
                pointer.distanceToReverseClockwise = {
                    // Only for the RSNM -- we already know the distance between teh current pointer and the RSNM in both ways since we have all the distance from the RSNM
                    [BuildingNameEnum.RSNM]: RSNM.distanceToClockwise[(key as PointerName)],
                    // For the other we have to do the maths
                    [BuildingNameEnum.UNL]:  RSNM.distanceToReverseClockwise[BuildingNameEnum.UNL] - RSNM.distanceToReverseClockwise[(key as PointerName)],
                    [BuildingNameEnum.CONFLUENT]: RSNM.distanceToReverseClockwise[BuildingNameEnum.CONFLUENT]  - RSNM.distanceToReverseClockwise[(key as PointerName)],
                    [BuildingNameEnum.MAMAC]: RSNM.distanceToReverseClockwise[BuildingNameEnum.MAMAC]  - RSNM.distanceToReverseClockwise[(key as PointerName)],
                    [BuildingNameEnum.MEDIACITE]: RSNM.distanceToReverseClockwise[BuildingNameEnum.MEDIACITE]  - RSNM.distanceToReverseClockwise[(key as PointerName)],
                    [BridgesNameEnum.PONT_BELLE_LIEGEOISE]: RSNM.distanceToReverseClockwise[BridgesNameEnum.PONT_BELLE_LIEGEOISE]  - RSNM.distanceToReverseClockwise[(key as PointerName)],
                    [BridgesNameEnum.PONT_MATIVA]: RSNM.distanceToReverseClockwise[BridgesNameEnum.PONT_MATIVA]  - RSNM.distanceToReverseClockwise[(key as PointerName)],
                    [BridgesNameEnum.PONT_PARC]: RSNM.distanceToReverseClockwise[BridgesNameEnum.PONT_PARC]  - RSNM.distanceToReverseClockwise[(key as PointerName)],
                    [BridgesNameEnum.PONT_HUY]: RSNM.distanceToReverseClockwise[BridgesNameEnum.PONT_HUY]  - RSNM.distanceToReverseClockwise[(key as PointerName)],
                    [BridgesNameEnum.PONT_LONGDOZ]: RSNM.distanceToReverseClockwise[BridgesNameEnum.PONT_LONGDOZ]  - RSNM.distanceToReverseClockwise[(key as PointerName)],
                    [BridgesNameEnum.PONT_AMERCOEUR]: RSNM.distanceToReverseClockwise[BridgesNameEnum.PONT_AMERCOEUR]  - RSNM.distanceToReverseClockwise[(key as PointerName)],
                    [BridgesNameEnum.PONT_BRESSOUX]: RSNM.distanceToReverseClockwise[BridgesNameEnum.PONT_BRESSOUX]  - RSNM.distanceToReverseClockwise[(key as PointerName)],
                    [BridgesNameEnum.PONT_ARCHE]: RSNM.distanceToReverseClockwise[BridgesNameEnum.PONT_ARCHE]  - RSNM.distanceToReverseClockwise[(key as PointerName)],
                    [BridgesNameEnum.PONT_SAUCY]: RSNM.distanceToReverseClockwise[BridgesNameEnum.PONT_SAUCY]  - RSNM.distanceToReverseClockwise[(key as PointerName)],
                    [BridgesNameEnum.PONT_JF_KENNEDY]: RSNM.distanceToReverseClockwise[BridgesNameEnum.PONT_JF_KENNEDY]  - RSNM.distanceToReverseClockwise[(key as PointerName)],
                    [BridgesNameEnum.PONT_ALBERT_1]: RSNM.distanceToReverseClockwise[BridgesNameEnum.PONT_ALBERT_1]  - RSNM.distanceToReverseClockwise[(key as PointerName)],
                    // TODO:
                    [BuildingNameEnum.CURTIUS]: 0,
                    [BuildingNameEnum.AQUARIUM]: 0,
                    [BridgesNameEnum.PONT_GRAMME]: 0,
                    [BridgesNameEnum.PONT_BIAIS]: 0,
                    [BridgesNameEnum.PONT_ATLAS]: 0,
                    [BridgesNameEnum.PONT_MAGHIN]: 0,
                    // set these to 0 for the moment we re-evaluate these later
                    [BridgesNameEnum.PONT_FRAGNE]: 0,
                    [BridgesNameEnum.PONT_CHEMIN_FER]: 0,
                    [BridgesNameEnum.PONT_LIEGE]: 0,
                    [BridgesNameEnum.PONT_BELLE_ILE]: 0,
                    [BridgesNameEnum.PONT_NAMUR]: 0,
                    [BridgesNameEnum.PONT_FETINNE]: 0,
                };

                // of course it's not all this simple…
                // Sometime the difference will give us a negative number
                // In this case we'll reevaluate the distance by substracting the negative value of the ISLAND_TOUR value
                // And it give us the rigth value :)
                Object.keys(pointer.distanceToReverseClockwise).forEach( key => {
                    pointer.distanceToReverseClockwise[(key as PointerName)] =
                        pointer.distanceToReverseClockwise[(key as PointerName)] < 0 ? ISLAND_TOUR + pointer.distanceToReverseClockwise[(key as PointerName)] :
                        pointer.distanceToReverseClockwise[(key as PointerName)];
                });



                // Now that we have all the distance between Pointers in one way and because we know the distance of a full island tour
                // we just have to do the following substraction to get the distances in the other way :)
                pointer.distanceToClockwise = {
                    [BuildingNameEnum.RSNM]: ISLAND_TOUR - pointer.distanceToReverseClockwise[BuildingNameEnum.RSNM],
                    [BuildingNameEnum.UNL]: ISLAND_TOUR - pointer.distanceToReverseClockwise[BuildingNameEnum.UNL],
                    [BuildingNameEnum.CONFLUENT]: ISLAND_TOUR - pointer.distanceToReverseClockwise[BuildingNameEnum.CONFLUENT],
                    [BuildingNameEnum.MAMAC]: ISLAND_TOUR - pointer.distanceToReverseClockwise[BuildingNameEnum.MAMAC],
                    [BuildingNameEnum.MEDIACITE]: ISLAND_TOUR - pointer.distanceToReverseClockwise[BuildingNameEnum.MEDIACITE],
                    [BridgesNameEnum.PONT_BELLE_LIEGEOISE]: ISLAND_TOUR - pointer.distanceToReverseClockwise[BridgesNameEnum.PONT_BELLE_LIEGEOISE],
                    [BridgesNameEnum.PONT_MATIVA]: ISLAND_TOUR - pointer.distanceToReverseClockwise[BridgesNameEnum.PONT_MATIVA],
                    [BridgesNameEnum.PONT_PARC]: ISLAND_TOUR - pointer.distanceToReverseClockwise[BridgesNameEnum.PONT_PARC],
                    [BridgesNameEnum.PONT_HUY]: ISLAND_TOUR - pointer.distanceToReverseClockwise[BridgesNameEnum.PONT_HUY],
                    [BridgesNameEnum.PONT_LONGDOZ]: ISLAND_TOUR - pointer.distanceToReverseClockwise[BridgesNameEnum.PONT_LONGDOZ],
                    [BridgesNameEnum.PONT_AMERCOEUR]: ISLAND_TOUR - pointer.distanceToReverseClockwise[BridgesNameEnum.PONT_AMERCOEUR],
                    [BridgesNameEnum.PONT_BRESSOUX]: ISLAND_TOUR - pointer.distanceToReverseClockwise[BridgesNameEnum.PONT_BRESSOUX],
                    [BridgesNameEnum.PONT_ARCHE]: ISLAND_TOUR - pointer.distanceToReverseClockwise[BridgesNameEnum.PONT_ARCHE],
                    [BridgesNameEnum.PONT_SAUCY]: ISLAND_TOUR - pointer.distanceToReverseClockwise[BridgesNameEnum.PONT_SAUCY],
                    [BridgesNameEnum.PONT_JF_KENNEDY]: ISLAND_TOUR - pointer.distanceToReverseClockwise[BridgesNameEnum.PONT_JF_KENNEDY],
                    [BridgesNameEnum.PONT_ALBERT_1]: ISLAND_TOUR - pointer.distanceToReverseClockwise[BridgesNameEnum.PONT_ALBERT_1],
                    // TODO:
                    [BuildingNameEnum.CURTIUS]: 0,
                    [BuildingNameEnum.AQUARIUM]: 0,
                    [BridgesNameEnum.PONT_GRAMME]: 0,
                    [BridgesNameEnum.PONT_BIAIS]: 0,
                    [BridgesNameEnum.PONT_ATLAS]: 0,
                    [BridgesNameEnum.PONT_MAGHIN]: 0,
                    // set these to 0 for the moment we re-evaluate these later
                    [BridgesNameEnum.PONT_FRAGNE]: 0,
                    [BridgesNameEnum.PONT_CHEMIN_FER]: 0,
                    [BridgesNameEnum.PONT_LIEGE]: 0,
                    [BridgesNameEnum.PONT_BELLE_ILE]: 0,
                    [BridgesNameEnum.PONT_NAMUR]: 0,
                    [BridgesNameEnum.PONT_FETINNE]: 0,
                };

                pointer.distanceToReverseClockwise[BridgesNameEnum.PONT_FRAGNE] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_FRAGNE] + pointer.distanceToReverseClockwise[BuildingNameEnum.CONFLUENT];
                pointer.distanceToReverseClockwise[BridgesNameEnum.PONT_CHEMIN_FER] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_CHEMIN_FER] + + pointer.distanceToReverseClockwise[BuildingNameEnum.CONFLUENT];
                pointer.distanceToReverseClockwise[BridgesNameEnum.PONT_LIEGE] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_LIEGE] + + pointer.distanceToReverseClockwise[BuildingNameEnum.CONFLUENT];
                pointer.distanceToReverseClockwise[BridgesNameEnum.PONT_BELLE_ILE] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_BELLE_ILE] + + pointer.distanceToReverseClockwise[BuildingNameEnum.CONFLUENT];
                pointer.distanceToReverseClockwise[BridgesNameEnum.PONT_NAMUR] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_NAMUR] + + pointer.distanceToReverseClockwise[BuildingNameEnum.CONFLUENT];
                pointer.distanceToReverseClockwise[BridgesNameEnum.PONT_FETINNE] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_FETINNE] + + pointer.distanceToReverseClockwise[BuildingNameEnum.CONFLUENT];

                pointer.distanceToClockwise[BridgesNameEnum.PONT_FRAGNE] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_FRAGNE] + pointer.distanceToClockwise[BuildingNameEnum.CONFLUENT];
                pointer.distanceToClockwise[BridgesNameEnum.PONT_CHEMIN_FER] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_CHEMIN_FER] + + pointer.distanceToClockwise[BuildingNameEnum.CONFLUENT];
                pointer.distanceToClockwise[BridgesNameEnum.PONT_LIEGE] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_LIEGE] + + pointer.distanceToClockwise[BuildingNameEnum.CONFLUENT];
                pointer.distanceToClockwise[BridgesNameEnum.PONT_BELLE_ILE] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_BELLE_ILE] + + pointer.distanceToClockwise[BuildingNameEnum.CONFLUENT];
                pointer.distanceToClockwise[BridgesNameEnum.PONT_NAMUR] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_NAMUR] + + pointer.distanceToClockwise[BuildingNameEnum.CONFLUENT];
                pointer.distanceToClockwise[BridgesNameEnum.PONT_FETINNE] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_FETINNE] + + pointer.distanceToClockwise[BuildingNameEnum.CONFLUENT];
                /**************************/
                /***************** THIS HAS CREATE THE DISTANCE BETWEEN THE POINTERS THAT ARE ON THE ISLAND LEVEL *****************/
                /**************************/
            }
        }
        all_pointers[(key as PointerName)] = pointer;
    });

    // We now have all our pointers on the island level fully set and the other with only a name.
    // So we just have to set the values to theses pointers based on the other pointers that know the distance between them and all other pointer (the island pointers)
    NOT_ON_ISLAND_LEVEL_POINTERS.forEach(pointerName => {
        all_pointers[pointerName]!.distanceToClockwise = {
            [BuildingNameEnum.RSNM]: all_pointers[BuildingNameEnum.RSNM]!.distanceToReverseClockwise[pointerName],
            [BuildingNameEnum.UNL]: all_pointers[BuildingNameEnum.UNL]!.distanceToReverseClockwise[pointerName],
            [BuildingNameEnum.CONFLUENT]: all_pointers[BuildingNameEnum.CONFLUENT]!.distanceToReverseClockwise[pointerName],
            [BuildingNameEnum.MAMAC]: all_pointers[BuildingNameEnum.MAMAC]!.distanceToReverseClockwise[pointerName],
            [BuildingNameEnum.MEDIACITE]: all_pointers[BuildingNameEnum.MEDIACITE]!.distanceToReverseClockwise[pointerName],
            [BridgesNameEnum.PONT_BELLE_LIEGEOISE]: all_pointers[BridgesNameEnum.PONT_BELLE_LIEGEOISE]!.distanceToReverseClockwise[pointerName],
            [BridgesNameEnum.PONT_MATIVA]: all_pointers[BridgesNameEnum.PONT_MATIVA]!.distanceToReverseClockwise[pointerName],
            [BridgesNameEnum.PONT_PARC]: all_pointers[BridgesNameEnum.PONT_PARC]!.distanceToReverseClockwise[pointerName],
            [BridgesNameEnum.PONT_HUY]: all_pointers[BridgesNameEnum.PONT_HUY]!.distanceToReverseClockwise[pointerName],
            [BridgesNameEnum.PONT_LONGDOZ]: all_pointers[BridgesNameEnum.PONT_LONGDOZ]!.distanceToReverseClockwise[pointerName],
            [BridgesNameEnum.PONT_AMERCOEUR]: all_pointers[BridgesNameEnum.PONT_AMERCOEUR]!.distanceToReverseClockwise[pointerName],
            [BridgesNameEnum.PONT_BRESSOUX]: all_pointers[BridgesNameEnum.PONT_BRESSOUX]!.distanceToReverseClockwise[pointerName],
            [BridgesNameEnum.PONT_ARCHE]: all_pointers[BridgesNameEnum.PONT_ARCHE]!.distanceToReverseClockwise[pointerName],
            [BridgesNameEnum.PONT_SAUCY]: all_pointers[BridgesNameEnum.PONT_SAUCY]!.distanceToReverseClockwise[pointerName],
            [BridgesNameEnum.PONT_JF_KENNEDY]: all_pointers[BridgesNameEnum.PONT_JF_KENNEDY]!.distanceToReverseClockwise[pointerName],
            [BridgesNameEnum.PONT_ALBERT_1]: all_pointers[BridgesNameEnum.PONT_ALBERT_1]!.distanceToReverseClockwise[pointerName],
            // TODO:
            [BuildingNameEnum.CURTIUS]: 0,
            [BuildingNameEnum.AQUARIUM]: 0,
            [BridgesNameEnum.PONT_GRAMME]: 0,
            [BridgesNameEnum.PONT_BIAIS]: 0,
            [BridgesNameEnum.PONT_ATLAS]: 0,
            [BridgesNameEnum.PONT_MAGHIN]: 0,

            // At this moment we have set the distance values for the island pointers bue we are unable to determine the distance between each non-island pointer
            // But we can set the distance to 0 if we are on the same non-island pointer. We'll set to NaN the distance that we're unable to set for now.
            [BridgesNameEnum.PONT_FRAGNE]: pointerName === BridgesNameEnum.PONT_FRAGNE ? 0 :  NaN,
            [BridgesNameEnum.PONT_CHEMIN_FER]: pointerName === BridgesNameEnum.PONT_CHEMIN_FER ? 0 :  NaN,
            [BridgesNameEnum.PONT_LIEGE]: pointerName === BridgesNameEnum.PONT_LIEGE ? 0 :  NaN,
            [BridgesNameEnum.PONT_FETINNE]: pointerName === BridgesNameEnum.PONT_FETINNE ? 0 :  NaN,
            [BridgesNameEnum.PONT_NAMUR]: pointerName === BridgesNameEnum.PONT_NAMUR ? 0 :  NaN,
            [BridgesNameEnum.PONT_BELLE_ILE]: pointerName === BridgesNameEnum.PONT_BELLE_ILE ? 0 :  NaN,
        };

        all_pointers[pointerName]!.distanceToReverseClockwise = {
            [BuildingNameEnum.RSNM]: all_pointers[BuildingNameEnum.RSNM]!.distanceToClockwise[pointerName],
            [BuildingNameEnum.UNL]: all_pointers[BuildingNameEnum.UNL]!.distanceToClockwise[pointerName],
            [BuildingNameEnum.CONFLUENT]: all_pointers[BuildingNameEnum.CONFLUENT]!.distanceToClockwise[pointerName],
            [BuildingNameEnum.MAMAC]: all_pointers[BuildingNameEnum.MAMAC]!.distanceToClockwise[pointerName],
            [BuildingNameEnum.MEDIACITE]: all_pointers[BuildingNameEnum.MEDIACITE]!.distanceToClockwise[pointerName],
            [BridgesNameEnum.PONT_BELLE_LIEGEOISE]: all_pointers[BridgesNameEnum.PONT_BELLE_LIEGEOISE]!.distanceToClockwise[pointerName],
            [BridgesNameEnum.PONT_MATIVA]: all_pointers[BridgesNameEnum.PONT_MATIVA]!.distanceToClockwise[pointerName],
            [BridgesNameEnum.PONT_PARC]: all_pointers[BridgesNameEnum.PONT_PARC]!.distanceToClockwise[pointerName],
            [BridgesNameEnum.PONT_HUY]: all_pointers[BridgesNameEnum.PONT_HUY]!.distanceToClockwise[pointerName],
            [BridgesNameEnum.PONT_LONGDOZ]: all_pointers[BridgesNameEnum.PONT_LONGDOZ]!.distanceToClockwise[pointerName],
            [BridgesNameEnum.PONT_AMERCOEUR]: all_pointers[BridgesNameEnum.PONT_AMERCOEUR]!.distanceToClockwise[pointerName],
            [BridgesNameEnum.PONT_BRESSOUX]: all_pointers[BridgesNameEnum.PONT_BRESSOUX]!.distanceToClockwise[pointerName],
            [BridgesNameEnum.PONT_ARCHE]: all_pointers[BridgesNameEnum.PONT_ARCHE]!.distanceToClockwise[pointerName],
            [BridgesNameEnum.PONT_SAUCY]: all_pointers[BridgesNameEnum.PONT_SAUCY]!.distanceToClockwise[pointerName],
            [BridgesNameEnum.PONT_JF_KENNEDY]: all_pointers[BridgesNameEnum.PONT_JF_KENNEDY]!.distanceToClockwise[pointerName],
            [BridgesNameEnum.PONT_ALBERT_1]: all_pointers[BridgesNameEnum.PONT_ALBERT_1]!.distanceToClockwise[pointerName],
            // TODO:
            [BuildingNameEnum.CURTIUS]: 0,
            [BuildingNameEnum.AQUARIUM]: 0,
            [BridgesNameEnum.PONT_GRAMME]: 0,
            [BridgesNameEnum.PONT_BIAIS]: 0,
            [BridgesNameEnum.PONT_ATLAS]: 0,
            [BridgesNameEnum.PONT_MAGHIN]: 0,
            // At this moment we have set the distance values for the island pointers bue we are unable to determine the distance between each non-island pointer
            // But we can set the distance to 0 if we are on the same non-island pointer. We'll set to NaN the distance that we're unable to set for now.
            [BridgesNameEnum.PONT_FRAGNE]: pointerName === BridgesNameEnum.PONT_FRAGNE ? 0 :  NaN,
            [BridgesNameEnum.PONT_CHEMIN_FER]: pointerName === BridgesNameEnum.PONT_CHEMIN_FER ? 0 :  NaN,
            [BridgesNameEnum.PONT_LIEGE]: pointerName === BridgesNameEnum.PONT_LIEGE ? 0 :  NaN,
            [BridgesNameEnum.PONT_FETINNE]: pointerName === BridgesNameEnum.PONT_FETINNE ? 0 :  NaN,
            [BridgesNameEnum.PONT_NAMUR]: pointerName === BridgesNameEnum.PONT_NAMUR ? 0 :  NaN,
            [BridgesNameEnum.PONT_BELLE_ILE]: pointerName === BridgesNameEnum.PONT_BELLE_ILE ? 0 :  NaN,
        };

        // Now: specific cases.
        switch (pointerName) {
            case BridgesNameEnum.PONT_FRAGNE:
                // these two are on the same portion of water so the distance will basically juste be a straight line.
                all_pointers[pointerName]!.distanceToClockwise[BridgesNameEnum.PONT_CHEMIN_FER] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_CHEMIN_FER] - DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName];
                all_pointers[pointerName]!.distanceToReverseClockwise[BridgesNameEnum.PONT_CHEMIN_FER] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_CHEMIN_FER] - DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName];

                all_pointers[pointerName]!.distanceToClockwise[BridgesNameEnum.PONT_LIEGE] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_LIEGE] - DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName];
                all_pointers[pointerName]!.distanceToReverseClockwise[BridgesNameEnum.PONT_LIEGE] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_LIEGE] - DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName];

                // these three other are on the other water portion so we have to do a little math
                all_pointers[pointerName]!.distanceToClockwise[BridgesNameEnum.PONT_FETINNE] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] + DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_FETINNE];
                all_pointers[pointerName]!.distanceToReverseClockwise[BridgesNameEnum.PONT_FETINNE] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] + DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_FETINNE];

                all_pointers[pointerName]!.distanceToClockwise[BridgesNameEnum.PONT_NAMUR] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] + DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_NAMUR];
                all_pointers[pointerName]!.distanceToReverseClockwise[BridgesNameEnum.PONT_NAMUR] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] + DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_NAMUR];

                all_pointers[pointerName]!.distanceToClockwise[BridgesNameEnum.PONT_BELLE_ILE] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] + DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_BELLE_ILE];
                all_pointers[pointerName]!.distanceToReverseClockwise[BridgesNameEnum.PONT_BELLE_ILE] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] + DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_BELLE_ILE];
                break;

            case BridgesNameEnum.PONT_CHEMIN_FER:
                // these two are on the same portion of water so the distance will basically juste be a straight line.
                all_pointers[pointerName]!.distanceToClockwise[BridgesNameEnum.PONT_FRAGNE] =  DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] - DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_FRAGNE];
                all_pointers[pointerName]!.distanceToReverseClockwise[BridgesNameEnum.PONT_FRAGNE] =  DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] - DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_FRAGNE];

                all_pointers[pointerName]!.distanceToClockwise[BridgesNameEnum.PONT_LIEGE] =  DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_LIEGE] - DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName];
                all_pointers[pointerName]!.distanceToReverseClockwise[BridgesNameEnum.PONT_LIEGE] =  DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_LIEGE] - DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName];
                // these three other are on the other water portion so we have to do a little math
                all_pointers[pointerName]!.distanceToClockwise[BridgesNameEnum.PONT_FETINNE] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] + DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_FETINNE];
                all_pointers[pointerName]!.distanceToReverseClockwise[BridgesNameEnum.PONT_FETINNE] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] + DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_FETINNE];

                all_pointers[pointerName]!.distanceToClockwise[BridgesNameEnum.PONT_NAMUR] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] + DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_NAMUR];
                all_pointers[pointerName]!.distanceToReverseClockwise[BridgesNameEnum.PONT_NAMUR] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] + DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_NAMUR];

                all_pointers[pointerName]!.distanceToClockwise[BridgesNameEnum.PONT_BELLE_ILE] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] + DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_BELLE_ILE];
                all_pointers[pointerName]!.distanceToReverseClockwise[BridgesNameEnum.PONT_BELLE_ILE] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] + DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_BELLE_ILE];
                break;

            case BridgesNameEnum.PONT_LIEGE:

                // these two are on the same portion of water so the distance will basically juste be a straight line.
                all_pointers[pointerName]!.distanceToClockwise[BridgesNameEnum.PONT_FRAGNE] =  DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] - DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_FRAGNE];
                all_pointers[pointerName]!.distanceToReverseClockwise[BridgesNameEnum.PONT_FRAGNE] =  DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] - DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_FRAGNE];

                all_pointers[pointerName]!.distanceToClockwise[BridgesNameEnum.PONT_CHEMIN_FER] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] - DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_CHEMIN_FER];
                all_pointers[pointerName]!.distanceToReverseClockwise[BridgesNameEnum.PONT_CHEMIN_FER] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] - DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_CHEMIN_FER];

                // these three other are on the other water portion so we have to do a little math
                all_pointers[pointerName]!.distanceToClockwise[BridgesNameEnum.PONT_FETINNE] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] + DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_FETINNE];
                all_pointers[pointerName]!.distanceToReverseClockwise[BridgesNameEnum.PONT_FETINNE] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] + DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_FETINNE];

                all_pointers[pointerName]!.distanceToClockwise[BridgesNameEnum.PONT_NAMUR] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] + DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_NAMUR];
                all_pointers[pointerName]!.distanceToReverseClockwise[BridgesNameEnum.PONT_NAMUR] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] + DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_NAMUR];

                all_pointers[pointerName]!.distanceToClockwise[BridgesNameEnum.PONT_BELLE_ILE] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] + DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_BELLE_ILE];
                all_pointers[pointerName]!.distanceToReverseClockwise[BridgesNameEnum.PONT_BELLE_ILE] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] + DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_BELLE_ILE];
                break;

            case BridgesNameEnum.PONT_BELLE_ILE:
                // these two are on the same portion of water so the distance will basically juste be a straight line.
                all_pointers[pointerName]!.distanceToClockwise[BridgesNameEnum.PONT_FETINNE] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] - DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_FETINNE];
                all_pointers[pointerName]!.distanceToReverseClockwise[BridgesNameEnum.PONT_FETINNE] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] - DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_FETINNE];

                all_pointers[pointerName]!.distanceToClockwise[BridgesNameEnum.PONT_NAMUR] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] - DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_NAMUR];
                all_pointers[pointerName]!.distanceToReverseClockwise[BridgesNameEnum.PONT_NAMUR] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] - DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_NAMUR];

                // these three other are on the other water portion so we have to do a little math
                all_pointers[pointerName]!.distanceToClockwise[BridgesNameEnum.PONT_FRAGNE] =  DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] + DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_FRAGNE];
                all_pointers[pointerName]!.distanceToReverseClockwise[BridgesNameEnum.PONT_FRAGNE] =  DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] + DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_FRAGNE];

                all_pointers[pointerName]!.distanceToClockwise[BridgesNameEnum.PONT_CHEMIN_FER] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] + DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_CHEMIN_FER];
                all_pointers[pointerName]!.distanceToReverseClockwise[BridgesNameEnum.PONT_CHEMIN_FER] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] + DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_CHEMIN_FER];

                all_pointers[pointerName]!.distanceToClockwise[BridgesNameEnum.PONT_LIEGE] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] + DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_LIEGE];
                all_pointers[pointerName]!.distanceToReverseClockwise[BridgesNameEnum.PONT_LIEGE] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] + DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_LIEGE];
                break;

            case BridgesNameEnum.PONT_NAMUR:
                // these two are on the same portion of water so the distance will basically juste be a straight line.
                all_pointers[pointerName]!.distanceToClockwise[BridgesNameEnum.PONT_FETINNE] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] - DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_FETINNE];
                all_pointers[pointerName]!.distanceToReverseClockwise[BridgesNameEnum.PONT_FETINNE] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] - DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_FETINNE];

                all_pointers[pointerName]!.distanceToClockwise[BridgesNameEnum.PONT_BELLE_ILE] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_BELLE_ILE] - DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName];
                all_pointers[pointerName]!.distanceToReverseClockwise[BridgesNameEnum.PONT_BELLE_ILE] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_BELLE_ILE] - DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName];

                // these three other are on the other water portion so we have to do a little math
                all_pointers[pointerName]!.distanceToClockwise[BridgesNameEnum.PONT_FRAGNE] =  DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] + DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_FRAGNE];
                all_pointers[pointerName]!.distanceToReverseClockwise[BridgesNameEnum.PONT_FRAGNE] =  DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] + DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_FRAGNE];

                all_pointers[pointerName]!.distanceToClockwise[BridgesNameEnum.PONT_CHEMIN_FER] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] + DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_CHEMIN_FER];
                all_pointers[pointerName]!.distanceToReverseClockwise[BridgesNameEnum.PONT_CHEMIN_FER] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] + DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_CHEMIN_FER];

                all_pointers[pointerName]!.distanceToClockwise[BridgesNameEnum.PONT_LIEGE] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] + DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_LIEGE];
                all_pointers[pointerName]!.distanceToReverseClockwise[BridgesNameEnum.PONT_LIEGE] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] + DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_LIEGE];
                break;

            case BridgesNameEnum.PONT_FETINNE:
                // these two are on the same portion of water so the distance will basically juste be a straight line.
                all_pointers[pointerName]!.distanceToClockwise[BridgesNameEnum.PONT_NAMUR] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_NAMUR] - DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName];
                all_pointers[pointerName]!.distanceToReverseClockwise[BridgesNameEnum.PONT_NAMUR] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_NAMUR] - DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName];

                all_pointers[pointerName]!.distanceToClockwise[BridgesNameEnum.PONT_BELLE_ILE] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_BELLE_ILE] - DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName];
                all_pointers[pointerName]!.distanceToReverseClockwise[BridgesNameEnum.PONT_BELLE_ILE] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_BELLE_ILE] - DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName];

                // these three other are on the other water portion so we have to do a little math
                all_pointers[pointerName]!.distanceToClockwise[BridgesNameEnum.PONT_FRAGNE] =  DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] + DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_FRAGNE];
                all_pointers[pointerName]!.distanceToReverseClockwise[BridgesNameEnum.PONT_FRAGNE] =  DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] + DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_FRAGNE];

                all_pointers[pointerName]!.distanceToClockwise[BridgesNameEnum.PONT_CHEMIN_FER] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] + DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_CHEMIN_FER];
                all_pointers[pointerName]!.distanceToReverseClockwise[BridgesNameEnum.PONT_CHEMIN_FER] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] + DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_CHEMIN_FER];

                all_pointers[pointerName]!.distanceToClockwise[BridgesNameEnum.PONT_LIEGE] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] + DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_LIEGE];
                all_pointers[pointerName]!.distanceToReverseClockwise[BridgesNameEnum.PONT_LIEGE] = DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[pointerName] + DISTANCE_BETWEEN_CONFLUENT_AND_NOT_ISLAND_LEVEL_POINTERS[BridgesNameEnum.PONT_LIEGE];
                break;

            default:
                // We should normally never pass here.
                console.warn('Something rotten in the state of Denmark!');
                break;
        }
    });

    return all_pointers;
}
