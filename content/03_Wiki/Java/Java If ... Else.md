Java has the following conditional statements:
	- Use `if` to specify a block of code to be executed, if a specified condition is true
	- Use `else` to specify a block of code to be executed, if the same condition is false
	- Use `else if` to specify a new condition to test, if the first condition is false
	- Use `switch` to specify many alternative blocks of code to be executed (see [[Java Switch]])

> [!EXAMPLE]
> ```java
> int time = 22;
> if (time < 10) {
>   System.out.println("Good morning.");
> } 
> else if (time < 18) {
>   System.out.println("Good day.");
> } 
> else {
>   System.out.println("Good evening.");
> }
> // Outputs "Good evening."
> ```

# Ternary Operater
There is also a short-hand if else, which is known as the **ternary operator** because it consists of three operands.

It can be used to replace multiple lines of code with a single line, and is most often used to replace simple if else statements:

> [!NOTE] Syntax
> ```java
> variable = (condition) ? expressionTrue : expressionFalse;
> ```

#java/syntax/conditionals  