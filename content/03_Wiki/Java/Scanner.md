
> [!NOTE] Scanner
> used to receive user input, found in java.util package

```java
import java.util.Scanner;
public class Greeting {
	public static void main(String[] args) {
		Scanner keyboard = new Scanner(System.in); 
		System.out.print("Enter your name: "); 
		String myName = keyboard.nextLine();
		System.out.println("Hello "+myName);
	}
}
```

# Scanning Strings
- Scanner can operate on various readables
	- InputStream (System.in)
	- File
	- String
- hasNext( )

> [!EXAMPLE]
> ```java
> Scanner s = new Scanner("scan this");
> while (s.hasNext()) { System.out.println(s.next()); }
> // Output:
> // scan
> // this
> ```

### Related:
- [[Java IO Streams]]


# ---

#Java/package/scanner 