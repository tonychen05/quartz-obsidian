```java
/**
 * A class that implements a very simplified StringBuilder-like class.  This
 * class will not execute on its own - you will need to use code provided in
 * the TestSimpleStringBuilder.java class to run this code.
 *
 * @author ENTER YOUR NAME HERE
 * @author ENTER YOUR PARTNER'S NAME HERE
 * @version DATE HERE
 *
 */
import java.util.ArrayList;
import java.util.List;

public class SimpleStringBuilder {

    /**
     * A private member variable used to hold the internal state of the
     * SimpleStringBuilder. This List holds the characters of the String that
     * will be built. So the String "Hello" would be represented by an List
     * containing the characters ['H', 'e', 'l', 'l', 'o'].
     */
    List<Character> list;

    /**
     *
     */
    private void createEmptyBuilder() {
        this.list = new ArrayList<>();
    }

    /**
     * Constructs an empty SimpleStringBuilder.
     *
     */
    public SimpleStringBuilder() {
        this.createEmptyBuilder();
    }

    /**
     * Constructs a SimpleStringBuilder that contains the same characters as the
     * String input
     *
     * @param input
     *            the String to copy into the StringBuilder
     */
    public SimpleStringBuilder(String input) {
        this.createEmptyBuilder();

        for (int i = 0; i < input.length(); i++) {
            this.list.add(input.charAt(i));
        }
    }

    /**
     * Returns a String object built from the SimpleStringBuilder characters.
     * (Note that this is not terribly efficient, and not how the Java library
     * actually would do it).
     * 
     * @return the value of the SimpleStringBuilder as a String
     */
    @Override
    public String toString() {

        String myString = "";
        for (int i = 0; i < this.list.size(); i++) {
            myString = myString + this.list.get(i);
        }
        return myString;
    }

    /**
     * Returns the character at position i
     *
     * @param i
     *            the index to be checked
     * @return the character at position i
     */
    public char charAt(int i) {
        // TODO - your code here

        return this.list.get(i);
    }

    /**
     * Returns the length of the SimpleStringBuilder object
     *
     * @return the length of the StringBuilder
     */
    public int length() {
        // TODO - your code here

        return this.list.size();
    }

    /**
     * Replaces the character at position i with the character c
     *
     * @param i
     *            index to be replaced
     * @param c
     *            character to use in replacement
     */
    public void replaceCharAt(int i, char c) {
        // TODO - your code here
        this.list.set(i, c);

    }

    /**
     * Appends the character c to the end of the StringBuilder
     *
     * @param c
     *            character to append
     */
    public void append(char c) {
        // TODO - your code here
        this.list.add(c);
    }

    /**
     * Inserts the character c at position i
     *
     * @param i
     *            index to insert at
     * @param c
     *            character to be inserted
     */
    public void insert(int i, char c) {
        // TODO - your code here
        this.list.add(i, c);
    }

    /**
     * Deletes the character at position i
     *
     * @param i
     *            index to delete
     */
    public void deleteCharAt(int i) {
        // TODO - your code here
        this.list.remove(i);
    }
}
```

Constructing a simple StringBuilder with java classes

Below is the test code:
```java
/**
 * A program that tests the SimpleStringBuilder class created in this lab.
 *
 * @author Jeremy Morris
 * @version 20181101
 *
 */

public class TestSimpleStringBuilder {

    /**
     * A simple program used to test the SimpleStringBuilder class
     *
     * @param args
     */
    public static void main(String[] args) {
        SimpleStringBuilder myBuilder = new SimpleStringBuilder("Hello World");
        System.out.println("String is: " + myBuilder.toString());

        // Code below this comment will not work until you complete the required methods
        System.out.println("Length is: " + myBuilder.length());
        System.out.println("Char 3 is: " + myBuilder.charAt(3));
        myBuilder.replaceCharAt(3, 'p');
        System.out.println("String is: " + myBuilder.toString());

         //Code below this comment will not work until you complete the extra methods
                myBuilder.append('!');
                System.out.println("String is: "+myBuilder.toString());
                myBuilder.deleteCharAt(3);
                System.out.println("String is: "+myBuilder.toString());
                System.out.println("Length is: "+myBuilder.length());
                myBuilder.insert(3, 'z');
                System.out.println("String is: "+myBuilder.toString());
                System.out.println("Length is: "+myBuilder.length());

    }

}
```

Objects