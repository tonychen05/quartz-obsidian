```java
/**
 * The program will randomly generate an integer between 1 and 200 inclusive 
 * and will enter a loop where it will prompt the user for a guess. 
 * If the user has guessed the correct number, the program will end with 
 * a message staing number of guesses and a 
 * message that is determined by how many guesses it takes them to get the right 
 * answer. If the user guesses incorrectly, the program reponds with 
 * either "too high" or "too low" and let them guess again.
 *
 * @author Tony Chen
 * @version 20230919
 */
import java.util.Scanner;
import java.util.Random;

public class GuessANumber {

    public static void main(String[] args) {
        // TO DO: Enter your code here between the curly braces
        Scanner input = new Scanner(System.in);

        System.out.print("Enter a random seed: ");
        int seed = Integer.parseInt(input.nextLine());
        
        Random rnd = new Random(seed);
        int number = rnd.nextInt(200) + 1;
        int guess = 0;
        int numOfGuess = 0;

        while (guess != number) {
            System.out.print("Enter a guess between 1 and 200: ");
            guess = Integer.parseInt(input.nextLine());
            numOfGuess += 1;
            if (guess < 1 || guess > 200){
                System.out.println("Your guess is out of range.  "
                    + "Pick a number between 1 and 200.");
            }
            if (guess < number){
                System.out.println("Your guess was too low - try again.");
                System.out.println();
            }
            else if (guess > number){
                System.out.println("Your guess was too high - try again.");
                System.out.println();
            }
        }
        
        System.out.println("Congratulations!  Your guess was correct!\n");
        System.out.println("I had chosen " + number + " as the target number.");
        System.out.println("You guessed it in " + numOfGuess + " tries.");
        
        if (numOfGuess == 1) {
            System.out.println("That was impossible!");
        }
        else if (numOfGuess >= 2 && numOfGuess <= 3) {
            System.out.println("You're pretty lucky!");
        }
        else if (numOfGuess >= 4 && numOfGuess <= 7) {
            System.out.println("Not bad, not bad...");
        }
        else if (numOfGuess == 8) {
            System.out.println("That was not very impressive.");
        }
        else if (numOfGuess >= 9 && numOfGuess <=10) {
            System.out.println("Are you having any fun at all?");
        }
        else if (numOfGuess >= 11) {
            System.out.println("Maybe you should play something else.");
        }
        
        input.close();
    }
}
```

#Java/package/random #Java/package/scanner 