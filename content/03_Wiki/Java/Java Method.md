# Definitions
procedure: a method that evaluates to void (does not generate a value)
function: a method that evaluates to some non-void value (uses return)

# Declaring A Method

> [!EXAMPLE] Syntax
> ```java
public static void main(String[] args) {...}
>```

> [!NOTE] Parts of a Method
> public static = modifiers
> 	public = [[Java Access Modifiers|access modifier]]
> 	[[Java Static and Non-Static Method|static]] = class membership
> String[] args = parameter list
> void = [[Java Data Types|return type]] (could also be int, String, etc...)
> main = method name
> 

> [!INFO]
> The method name and parameter types comprise the **method signature**

> [!EXAMPLE] Simple Method - Procedure
> ```java
> public class Main {
> 	private static void say(String msg) {System.out.println(msg)}
> 	public static void main(String[] args) {
> 		say("hello");
> 	}
> }
> ```

> [!TIP]
> A method is **visible** to all other methods defined in the same class **regardless of the order** in which the methods were defined.

> [!WARNING] Parameter vs Argument
> - **Parameter** is the variable declared in a method definition. Ex: `gcf(int a, int b)`
> - **Argument** is the actual value passed in the parameters. Ex: `gcf(c, d)`

> [!WARNING] Scope of Variables
> Variables in a method stay in the method and cannot be accessed outside the method

> [!NOTE] Tracing Table
> - Each call to a method effective results in the creation of a new tracing table containing the body of the called method
> - Each tracing table has its own variables:
> 	- Its own formal parameters
> 	- Its own local variables

# ---


#java/method 