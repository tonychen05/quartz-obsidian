```java
/**
 * This program will first ask the user for a file name until a blank string is entered, quitting the program. If that file exists, the program will read each string one at a time, reverse it, and then print it to the user.
 *
 * @author Tony Chen
 * @version 20231112
 *
 */
import java.io.FileNotFoundException;
import java.io.File;
import java.util.Scanner;
public class FilesExpanded {
   
   /**
    * Displays the file given by fname to the screen
    * 
    * @param fname file to be displayed
    */
   public static void displayFile(String fname) {
        //TODO: Open the file and print each line to the screen.
        //TODO: Don't forget to close the file when you are done.
         Scanner lineReader = null;
         String line = null;
         try {
            lineReader = new Scanner(new File(fname));
            while (lineReader.hasNext()) {
               line = lineReader.nextLine();
               line = reverse(line);
               System.out.println(line);
               }
            System.out.println();
            lineReader.close();
            }
         catch (FileNotFoundException e) {
         System.out.format("ERROR - File %s not found!%n%n", fname);
         }
      }
   
   /**
    * Creates a reversed copy of a String
    * 
    * @param str string to be reversed
    * @return reversed copy of str
    */
   public static String reverse(String str) {
      //TODO: Reverse the string
      char ch; 
      String reversed = "";
      for (int i = 0; i < str.length(); i++) {
         ch = str.charAt(i);
         reversed = ch + reversed;
      }
      //TODO: Remove the line below - only included so code will compile.
      return reversed;
   }
   public static void main(String[] args) {
      //TODO: Prompt the user for a filename        
      Scanner input = new Scanner(System.in); 
      
      System.out.print("Enter a filename (blank line to quit): ");
      String fileName = input.nextLine();
      while(fileName.length()!=0) {
         displayFile(fileName);
         System.out.print("Enter another filename (blank line to quit): ");
         fileName = input.nextLine();
      }
      System.out.println("\nGoodbye!");
      input.close();
      
   }
}
```

#java/io/files 