An assertion allows testing the correctness of any assumptions that have been made in the program. An assertion is achieved using the `assert` statement in Java. While executing assertion, it is believed to be true. If it fails, JVM (Java Virtual Machine) throws an error named **AssertionError.** It is mainly used for testing purposes during development. 

The **assert** statement is used with a Boolean expression and can be written in **two different ways**:
> [!NOTE] First way:
> ```java
> assert expression;
> ```

 > [!NOTE] Second way:
> ```java
> assert expression1 : expression2;
> ```

# Enabling Assertions:
`java -ea programName` or `java -enableassertions programName`

# Disabling Assertions:
`java -da programName` or `java -disableassertions programName`

> [!EXAMPLE]
> ```java
> // Java program to demonstrate syntax of assertion
> import java.util.Scanner;
> 
> class Test {
> 	public static void main(String args[])
> 	{
> 		int value = 15;
> 		assert value >= 20 : " Underweight";
> 		System.out.println("value is " + value);
> 	}
> }
> 
> // Without assertions:
> 	// Output: value is 15
> // With assertions:
> 	// Output: Exception in thread "main" java.lang.AssertionError: Underweight
> ```

# Usage:
- To make sure that an unreachable-looking code is actually unreachable.
- To make sure that assumptions written in comments are right.
- To make sure the default switch case is not reached.
- To check the object’s state.
- At the beginning of the method
- After method invocation.

# ---
#java/syntax 