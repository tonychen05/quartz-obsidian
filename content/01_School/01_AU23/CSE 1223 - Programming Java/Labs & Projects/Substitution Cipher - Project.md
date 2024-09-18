 ```java
/**
 * This Java program will first prompt the user with three choices: encode, decode, or quit. 
 * The program will then prompt the user for an input file name, an output file name, and a shift. 
 * The program will then read the text from the input file, apply a caesar cipher to it, and then 
 * output the result to the output file. If successful, a message will be printed. 
 * If not successful, an error message is printed.
 *  
 * @author Tony Chen
 * @version 20231124
 */

import java.util.Scanner;
import java.lang.StringBuilder;
import java.io.*;


public class SubstitutionCipher {

    /**
     * Private constants used to shift characters for the substitution cipher.
     */
    private static final String UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    private static final String LOWERCASE = "abcdefghijklmnopqrstuvwxyz";

    /**
     * Constructs a new String where each letter in the String input is shifted
     * by the amount shift to the right, preserving whether the original
     * character was uppercase or lowercase. For example, the String "ABC" with
     * shift 3 would cause this method to return "DEF". A negative value should
     * shift to the left. For example, the String "ABC" with shift -3 would
     * cause this method to return "XYZ". Punctuation, numbers, whitespace and
     * other non-letter characters should be left unchanged. NOTE: For full
     * credit you are REQUIRED to use a StringBuilder to build the String in
     * this method rather than using String concatenation.
     *
     * @param input
     *            String to be encrypted
     * @param shift
     *            Amount to shift each character of input to the right
     * @return the encrypted String as outlined above
     */
    public static String shift(String input, int shift) {
        // TODO - complete this function
        StringBuilder sb = new StringBuilder(); // initializes a new StringBuilder

        sb.append(input); // appends the input string into the StringBuilder

        for (int i = 0; i < sb.length(); i++) { // loops through every character in the stringbuilder
            char currentChar = sb.charAt(i);
            if (Character.isLetter(currentChar)) { // check if the character is a letter
                if (Character.isUpperCase(currentChar)) { // check if uppercase
                    int initial = UPPERCASE.indexOf(currentChar);
                    int encoded = (initial + shift + 26) % 26; // shifts the letter, add 26 and modulo to account for index outofbounds wraparound 
                    sb.setCharAt(i, UPPERCASE.charAt(encoded)); // replaces the current character with the new encoded character 
                }
                else if (Character.isLowerCase(currentChar)) { // check if the letter is lowercase
                    int initial = LOWERCASE.indexOf(currentChar);
                    int encoded = (initial + shift + 26) % 26;
                    sb.setCharAt(i, LOWERCASE.charAt(encoded));
                }
            }
        }
        return sb.toString();
    }

    /**
     * Displays the message "promptMsg" to the user and reads the next full line
     * that the user enters. If the user enters an empty string, reports the
     * error message "ERROR! Empty Input Not Allowed!" and then loops,
     * repeatedly prompting them with "promptMsg" to enter a new string until
     * the user enters a non-empty String
     *
     * @param in
     *            Scanner to read user input from
     * @param promptMsg
     *            Message to display to user to prompt them for input
     * @return the String entered by the user
     */
    public static String promptForString(Scanner in, String promptMsg) {
        // TODO - complete this function
        System.out.print(promptMsg);
        String input = in.nextLine();
        
        while (input.length() == 0) { // loops repeatedly if user enters an empty string
            System.out.println("ERROR! Empty Input Not Allowed!"); 
            System.out.print(promptMsg);
            input = in.nextLine();
        }

        return input;
    }

    /**
     * Opens the file inFile for reading and the file outFile for writing,
     * reading one line at a time from inFile, shifting it the number of
     * characters given by "shift" and writing that line to outFile. If an
     * exception occurs, must report the error message: "ERROR! File inFile not
     * found or cannot write to outFile" where "inFile" and "outFile" are the
     * filenames given as parameters.
     *
     * @param inFile
     *            the file to be transformed
     * @param outFile
     *            the file to write the transformed output to
     * @param shift
     *            the amount to shift the characters from inFile by
     * @return false if an exception occurs and the error message is written,
     *         otherwise true
     */
    public static boolean transformFile(String inFile, String outFile,
            int shift) {
        // TODO - complete this function
        Scanner lineReader = null;
        PrintWriter fileWriter = null;
        try {
            lineReader = new Scanner(new File(inFile)); // initializes lineReader to the input file
            fileWriter = new PrintWriter(new File(outFile)); // initalizes fileWriter to the output writer
            while (lineReader.hasNext()) { // loops through every line in the input file
                fileWriter.println(shift(lineReader.nextLine(), shift)); // encodes each line and writes to output file
            }
            return true; // returns true if successful

        } catch (Exception e) {
            System.out.format("ERROR! File %s not found or cannot write to %s\n", inFile, outFile); // catches Exceptions
            return false; // returns false if error
        }
        finally { // closes the input/output streams
            if (lineReader != null) { lineReader.close(); }
            if (fileWriter != null) { fileWriter.close(); }
        }
    }

    /**
     * Prompts the user to enter a single character choice. The only allowable
     * values are 'E', 'D' or 'Q'. All other values are invalid, including all
     * values longer than one character in length, however the user is allowed
     * to enter values in either lower or upper case. If the user enters an
     * invalid value, the method displays the error message "ERROR! Enter a
     * valid value!" and then prompts the user repeatedly until a valid value is
     * entered. Returns a single uppercase character representing the user's
     * choice.
     *
     * @param in
     *            Scanner to read user choices from
     * @return the user's choice as an uppercase character
     */
    public static char getChoice(Scanner in) {
        // TODO - complete this function
        System.out.print("Enter your choice: "); // prompts the user to input a choice
        char choice = Character.toUpperCase(in.nextLine().charAt(0)); // takes the first character of input and capitalizes it

        while (choice != 'E' && choice != 'D' && choice != 'Q') { // loops until the inputted value is allowed
            System.out.print("Enter your choice: ");
            System.out.println("ERROR! Enter a valid value!");
            choice = Character.toUpperCase(in.nextLine().charAt(0));
        }

        
        return choice;
    }

    /**
     * Displays the menu of choices to the user.
     */
    public static void displayMenu() {
        System.out.println("[E]ncode a file");
        System.out.println("[D]ecode a file");
        System.out.println("[Q]uit");
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        // TODO - complete this procedure with your own implementation
        char choice;
        String inFile, outFile;
        int shift;

        while (true) { // continuouly loops until program quits
            displayMenu();
            choice = getChoice(in);

            switch (choice) {
                case 'E': // encoding
                    inFile = promptForString(in, "Enter an input file: ");
                    outFile = promptForString(in, "Enter an output file: ");
                    shift = Integer.parseInt(promptForString(in, "Enter a shift amount: ")); // gets an int from user input
                    if (transformFile(inFile, outFile, shift)) {  // encodes file given input file, output file, and shift amount
                        System.out.println("Finished writing to file.\n"); 
                    }
                    continue;
                case 'D': // decoding
                    inFile = promptForString(in, "Enter an input file: ");
                    outFile = promptForString(in, "Enter an output file: ");
                    shift = Integer.parseInt(promptForString(in, "Enter a shift amount: "));
                    if (transformFile(inFile, outFile, -shift)) { // decodes file with a negative shift amount
                        System.out.println("Finished writing to file.\n"); 
                    }
                    continue;
                case 'Q': // quit
                    System.out.println("\nGoodbye!");
                    in.close(); // closes Scanner
                    break;
            
            }
            break;
        }
    }
}
```

PrintWriter: outputting to a file
StringBuilder: replacing characters in a string
Modulus: wrap-around indices