export class ArrayHelper {

    /**
     * Method that update a given array by adding a new item in it at a specified index
     *
     * @param arr the array that you want to modify
     * @param index the index where you want to put the new item
     * @param newItem the item you want to add in the array
     * @returns any[]
     */
    public static insert = (arr: any[], index: number, newItem: any) => [
        // part of the array before the specified index
        ...arr.slice(0, index),
        // inserted item
        newItem,
        // part of the array after the specified index
        ...arr.slice(index)
      ];

}

