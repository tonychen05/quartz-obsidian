```java
import java.util.Scanner;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Arrays;    

public class DataAnalysisLab {
   public static void main(String[] args) {
        /* Type your code here. */
        Scanner input = new Scanner(System.in);
        System.out.print("Enter a data file to read: ");
        String fileName = input.nextLine();
        System.out.print("Enter the number of counties: ");
        int numCounties = Integer.parseInt(input.nextLine());
        // initiate variables
        String[] county = new String[numCounties];
        int[] popOld = new int[numCounties];
        int[] popNew = new int[numCounties];
        // Open file
        readFile(fileName, numCounties, county, popOld, popNew);
        
        System.out.format("DEBUG: %s%n", Arrays.toString(county));
        System.out.format("DEBUG: %s%n", Arrays.toString(popOld));
        System.out.format("DEBUG: %s%n", Arrays.toString(popNew));
        
        for (int i = 0; i < numCounties; i++) {
            System.out.format("%s %d%n", county[i], (popNew[i]-popOld[i]));
        }
    }
         
   public static void readFile(String fname, int numCounties, 
	   String[] county, int[] popOld, int[] popNew) {
        // Read lines from file
        Scanner lineReader = null;
        try {
            lineReader = new Scanner(new File(fname));
            if (lineReader.hasNext()) {lineReader.nextLine(); } //skips header
            String[] vals;
            for (int i = 0; i < numCounties; i++) {
            vals = lineReader.nextLine().split(",");
            county[i] = vals[0]; // adds value from 1st index of the file
            popOld[i] = Integer.parseInt(vals[1]);
            popNew[i] = Integer.parseInt(vals[vals.length -1 ]);
            }
                
        }
        catch (FileNotFoundException e) {
            System.out.format("File %s not found", fname);
        }
        finally {
            if (lineReader != null) {lineReader.close(); }
        }
    }
}

```

#java/io/files #java/data_analysis

# ---
### Related:
- [[Java File IO]]