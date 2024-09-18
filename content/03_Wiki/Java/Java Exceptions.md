When executing Java code, different errors can occur: coding errors made by the programmer, errors due to wrong input, or other unforeseeable things.

When an error occurs, Java will normally stop and generate an error message. The technical term for this is: Java will throw an **exception** (throw an error).

# Try, Catch, Finally

The `try` statement allows you to define a block of code to be tested for errors while it is being executed.
The `catch` statement allows you to define a block of code to be executed, if an error occurs in the try block.
The `try` and `catch` keywords come in pairs:
> [!EXAMPLE] Syntax
> ```java
> try {
>   //  Block of code to try
> }
> catch(Exception e) {
>   //  Block of code to handle errors
> }
> ```

The `finally` statement defines a code block to run regardless of the result.

> [!EXAMPLE]
> ```java
> try { 
> 	// tryCode - Code block to run 
> } 
> catch(Exception e) { 
> 	// catchCode - Code block to handle errors 
> } 
> finally { 
> 	// finallyCode - Code block to be executed regardless of the try result 
> }
> ```

# Throw
The `throw` statement allows you to create a custom error.

The `throw` statement is used together with an **exception type**. There are many exception types available in Java: `ArithmeticException`, `FileNotFoundException`, `ArrayIndexOutOfBoundsException`, `SecurityException`, etc:

> [!EXAMPLE]
> ```java
> public class Main {
>   static void checkAge(int age) {
>     if (age < 18) {
>       throw new ArithmeticException("Access denied - You must be at least 18 years old.");
>     }
>     else {
>       System.out.println("Access granted - You are old enough!");
>     }
>   }
> 
>   public static void main(String[] args) {
>     checkAge(15); // Set age to 15 (which is below 18...)
>   }
> }
> // Output:
> /* Exception in thread "main" java.lang.ArithmeticException: Access denied - You must be at least 18 years old.  
        at Main.checkAge(Main.java:4)  
        at Main.main(Main.java:12) */
> ```

# ---
#java 