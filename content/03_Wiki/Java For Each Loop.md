For-each is another array traversing technique like [[For-Loop|for loop]], [[Java while loops|while loop]], [[Java do-while|do-while loop]].
- It starts with the keyword **for** like a normal for-loop.
- Instead of declaring and initializing a loop counter variable, you declare a variable that is the same type as the base type of the array, followed by a colon, which is then followed by the array name.
- In the loop body, you can use the loop variable you created rather than using an indexed array element.   
- It’s commonly used to iterate over an array or a [[Java Collections Framework|Collections]] class (eg, ArrayList)



> [!EXAMPLE] Syntax
> ```java
> import java.io.*; 
> 
> class Easy 
> { 
> 	public static void main(String[] args) 
> 	{ 
> 		// array declaration 
> 		int ar[] = { 10, 50, 60, 80, 90 }; 
> 		for (int element : ar) 
> 			System.out.print(element + " "); 
> 	} 
> }
> ```

