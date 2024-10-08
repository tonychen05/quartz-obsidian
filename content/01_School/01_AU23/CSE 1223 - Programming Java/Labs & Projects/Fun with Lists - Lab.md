```java
/**
 *   A program that reads Strings from two files into Lists, then displays a
 *   "merged" list constructed from them in two different ways.
 *
 * @author Tony Chen
 * @version 20231126
 *
 */
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Scanner;
import java.io.File;
import java.io.FileNotFoundException;
public class ListPractice {
    /**
     * Reads a list of words from a file - formatted one word per line - and
     * returns a List of those words in the order they appear in the file. If
     * there is an error reading the file, displays the error message "ERROR!
     * File wordsFile not found!" where "wordsFile" is the name of the file. If
     * there is an error reading the file, this method should return an empty
     * List.
     *
     * @param wordsFile
     *            The name of a file in the proper format containg the word list
     * @return a List of words read from the file
     */
    public static List<String> getList(String wordsFile) {
        // TODO - complete this function
        Scanner lineReader = null;
        List<String> listOfStrings = new ArrayList<>();
        try {
            lineReader = new Scanner(new File(wordsFile));
            while (lineReader.hasNext()) {
                String line = lineReader.nextLine();
                listOfStrings.add(line);
            }
            return listOfStrings;
        } catch (FileNotFoundException e) {
            System.out.format("ERROR! File %s not found!%n", wordsFile);
            return listOfStrings;
        }
        finally {
            if (lineReader != null) {
                lineReader.close();
            }
        }
    }
    /**
     * Displays the contents of the list myList to the console. The list is
     * displayed with the index of the item, followed by a colon, then the item
     * with one item per line.
     *
     * @param myList
     *            the List to be displayed
     */
    private static void displayList(List<String> myList) {
        for (int i = 0; i < myList.size(); i++) {
            System.out.format("%d: %s%n", i, myList.get(i));
        }
    }
    /**
     * Creates a new List that holds the elements of list1 interleaved
     * with the elements of list2. For example, if list1 holds
     * <"over","river","through","woods"> and list2 holds <"the","and","the">,
     * then the new list should hold
     * <"over","the","river","and","through","the","woods">. Alternating between
     * list1 and list2. If one list is longer, the new list will contain all of
     * the extra values from the longer list at the end. For example, if list1
     * holds <"over","river","through","woods"> and list2 holds <"the","and">
     * then the new list should hold
     * <"over","the","river","and","through","woods">.
     * 
     * @param list1
     *            the first list to merge
     * @param list2
     *            the second list to merge
     * @return list1 merged with list2 as described above
     */
    private static List<String> mergeLists(List<String> list1, List<String> list2) {
        // TODO - complete this function 
        
        // TODO - the following line is only here to allow this program to 
        // compile. Replace it and remove this comment when you complete 
        // this method. 
        List<String> result = new ArrayList<>(list1.size() + list2.size());
        Iterator<String> it1 = list1.iterator();
        Iterator<String> it2 = list2.iterator();
        while (it1.hasNext() || it2.hasNext()) {
            if (it1.hasNext()) {
                result.add(it1.next());
            }
            if (it2.hasNext()) {
                result.add(it2.next());
            }
        }
        return result; 
    }
    public static void main(String[] args) {
        Scanner keyboard = new Scanner(System.in);
        System.out.print("Enter a filename: ");
        String fname = keyboard.nextLine();
        List<String> list1 = getList(fname);
        System.out.print("Enter another: ");
        fname = keyboard.nextLine();
        List<String> list2 = getList(fname);
        System.out.println("Wordlist 1");
        System.out.println("----------");
        displayList(list1);
        System.out.println();
        System.out.println("Wordlist 2");
        System.out.println("----------");
        displayList(list2);
        //TODO: Add code here to combine list1+list2 and list2+list1 and
        //      display both results
        List<String> list1_2 = mergeLists(list1, list2);
        System.out.println();
        System.out.println("List 1 merged with List 2");
        System.out.println("-------------------------");
        displayList(list1_2);
        List<String> list2_1 = mergeLists(list2, list1);
        System.out.println();
        System.out.println("List 2 merged with List 1");
        System.out.println("-------------------------");
        displayList(list2_1);
        keyboard.close();
    }
}
```

Interleaving/Merging ArrayLists