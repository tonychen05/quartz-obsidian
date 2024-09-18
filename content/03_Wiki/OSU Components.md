Contracts in the APIs for OSU CSE components include:
- [[Parameter Modes]]

### SimpleReader & SimpleWriter
Similar to Scanner. Can read/write to file and keyboard input.

```java
import components.simplereader.SimpleReader;
import components.simplereader.SimpleReader1L;
import components.simplewriter.SimpleWriter;
import components.simplewriter.SimpleWriter1L;

public final class HelloJack {

    /**
     * No argument constructor--private to prevent instantiation.
     */
    private HelloJack() {
    }

    /**
     * Main method.
     *
     * @param args
     *            the command line arguments
     */
    public static void main(String[] args) {
        SimpleReader in = new SimpleReader1L();
        SimpleWriter out = new SimpleWriter1L();
        /*
         * Put your main program code here
         */
        out.print("What's your name? ");
        String name = in.nextLine();
        out.print("Hello, " + name);

        /*
         * Close input and output streams
         */
        in.close();
        out.close();
    }

}

```


### [[XMLTree]]

