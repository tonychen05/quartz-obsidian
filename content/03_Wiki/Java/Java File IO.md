
> [!EXAMPLE] Printing file to console
> ```java
> import java.io.FileNotFoundException;
> import java.io.File;
> import java.io.PrintWriter;
> import java.util.Scanner;
> 
> public class FunWithFiles {
>    
>    /**
>     * Displays the file given by fname to the screen
>     * 
>     * @param fname file to be displayed
>     */
>    public static void displayFile(String fname) {
>         //TODO: Open the file and print each line to the screen.
>         //TODO: Don't forget to close the file when you are done.
>         PrintWriter lineWriter = null;
>         try {
>            Scanner scnFile = new Scanner(new File(fname));
>            String line = null;
>            while (scnFile.hasNext()) {
>               line = scnFile.nextLine();
>               System.out.print(line);
>               if (scnFile.hasNextLine()) {
>                  System.out.println();
>               }
>            }
>            scnFile.close();
>         } 
>         catch (FileNotFoundException e) {
>            System.out.format("ERROR - File %s not found!%n", fname);
>         }
>    }
>    
> 
>     public static void main(String[] args) {
>       //TODO: Prompt the user for a filename        
>       Scanner input = new Scanner(System.in);
>       System.out.print("Enter a filename: ");
>       String filename = input.nextLine();
>       displayFile(filename);
> 
>     }
> 
> }
> ```


# ---
#java/io/files