
```java
/**
 * This program will generate two random integers between 1 and 20
 * and then ask a series of math questions. Each question will be evaluated 
 * as to whether it is the right or wrong answer. 
 * In the end, a final score is reported for the user.
 * 
 * @author Tony Chen
 * @version 20230829
 **/ 
import java.util.Random;
import java.util.Scanner;

public class FunWithBranching {

   public static void main(String[] args) {
      Scanner input = new Scanner(System.in);
      System.out.print("Enter a random number seed: ");
      // TODO: Your code here
      int numCorrect = 0;
      
      int seed = Integer.parseInt(input.nextLine());
      Random rnd = new Random(seed);
      int x = rnd.nextInt(20) + 1;
      int y = rnd.nextInt(20) + 1;
      
      System.out.print("Enter your name: ");
      String name = input.nextLine();
      System.out.println("Hello " + name + "!");
      System.out.println("Please answer the following questions:");
      
      // Problem 1
      System.out.println();
      System.out.print(x + " + " + y + " = ");
      if (Integer.parseInt(input.nextLine()) == (x + y)) {
         System.out.println("Correct!");
         numCorrect += 1;
      }
      else {
         System.out.println("Wrong!");
         System.out.println("The correct answer is: " + (x + y));
      }
      // Problem 2
      System.out.println();
      System.out.print(x + " - " + y + " = ");
      if (Integer.parseInt(input.nextLine()) == (x - y)) {
         System.out.println("Correct!");
         numCorrect += 1;
      }
      else {
         System.out.println("Wrong!");
         System.out.println("The correct answer is: " + (x - y));
      }
      // Problem 3
      System.out.println();
      System.out.print(x + " * " + y + " = ");
      if (Integer.parseInt(input.nextLine()) == (x * y)) {
         System.out.println("Correct!");
         numCorrect += 1;
      }
      else {
         System.out.println("Wrong!");
         System.out.println("The correct answer is: " + (x * y));
      }
      
      System.out.println();
      System.out.println("You got " + numCorrect + " correct answers!");
      System.out.println("That's " + ((double)numCorrect/3 * 100) + "%!");
      
      input.close();
      
   }
}
```

#Java/branching #Java/package/random #Java/package/scanner

