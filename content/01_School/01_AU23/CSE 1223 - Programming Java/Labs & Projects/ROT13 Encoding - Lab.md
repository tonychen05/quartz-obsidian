```java
/**
 * Encodes a String entered by a user.
 *
 * @author YOUR NAME HERE
 * @author YOUR PARTNER NAME HERE
 * @version DATE HERE
 */
import java.util.Scanner;

public class EncodingLab {

    public static final String CAPITALS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    /**
     * Method that returns a string that is rot13 encoded from the input string.
     *
     * @param input
     *            The string to encode
     * @return The input string with the rot13 algorithm applied to it
     */
    public static String rot13(String input) {
        StringBuilder sb = new StringBuilder();
        // TODO: Your code here.  Your code MUST use the StringBuilder class
        // to build the String.
        sb.append(input);
        int strLength = sb.length();
        for (int i = 0; i < strLength; i++) {
           char currentChar = sb.charAt(i);
           if (Character.isLetter(currentChar) && Character.isUpperCase(currentChar)) {
              int initial = CAPITALS.indexOf(currentChar);
              int encoded = (initial + 13) % 26;
              sb.setCharAt(i, CAPITALS.charAt(encoded)); 
           }
        }
        return sb.toString();
    }

    public static void main(String[] args) {
        Scanner keyboard = new Scanner(System.in);
        System.out.print("Enter a string to encode: ");
        String input = keyboard.nextLine();
        String encoded = rot13(input);
        System.out.println("Your string encoded is  : " + encoded);
        keyboard.close();
    }

}
```

StringBuilder - replacing characters in a string
Modulus % to wrap-around indicides
ROT-13 Encryption
