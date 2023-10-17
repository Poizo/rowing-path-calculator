export class StringHelper {

    public static capitalizeFirstLetter(text: string): string {
        return text?.charAt(0)?.toUpperCase() + text?.slice(1);
    }

}

