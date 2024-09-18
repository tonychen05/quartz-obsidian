# Static 
- A **static** method (class method) is a block of code with a name, using which it can be **called** (*invoked*) to perform its computation 
- The method “takes over” execution when it is called, until it **returns** to the calling program at the point it was called 
- Also known as a routine, subroutine, operation, function, or procedure

> [!EXAMPLE] Anatomy of a Static Method
> ```java
> private static int distance(int a, int b) {
> 	int d = b - a;
> 	return d;
> }
> ```
> (see [[Java Method]] for more syntax info)

## Static Variables
Static belongs to the **type**:
- **Math**.PI
- **Integer**.parseInt()

# Non-Static (Instance Methods)
A non-static method belongs to an ***object*** of the **class**, and you have to create an instance of the class to access the non-static method

> [!EXAMPLE]
> ```java
> Car car = new Car()
> SimpleWriter = new SimpleWriter()
> ```

## Non-Static Variables
Non-static belongs to an *instance* of a type:
- Scanner *input* = new Scanner(System.in);
	- *input*.nextLine();
- String *greeting* = "aloha";
	- *greeting*.charAt(2);

#java 