```java
/**
* This program will ask the user to input a distance to the target, and then search through all speeds between 1.0 m/s and 30.0 m/s in increments of 1.0 as well as all angles between 25.0 and 90.0 in increments of 5.0 to find the best angle and initial speed to hit the target. The program will then print out the best angle, best speed, actual distance travelled, and distance to the target to two decimal places.
* @author Tony Chen
* @version 20231006
**/

import java.util.Scanner;

public class TrajectoryModeling {
	public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        
        // Initializes variables
        double bestAngle = 0, bestSpeed = 0, distance = 0, distanceTravelled = 0, error = 0;
        
        // Gets user input and parses it into a double
        System.out.print("Enter a distance to target: ");
        distance =  Double.parseDouble(input.nextLine());
        System.out.println("");
        
        // loops through angles between 25 and 90 with increments of 5
        for (double degrees = 25.0; degrees < 90.0; degrees += 5.0) {
                double radians = Math.toRadians(degrees);
            // loops through speeds between 1 and 30 with increments of 1
            for (double speed = 1.0; speed < 30.0; speed += 1.0) {
                // calculates distance for each value of angle and spped
                double d = speed * ((2* speed * Math.sin(radians))/9.8) * Math.cos(radians);
                // stores the best result in distanceTravelled and changes distanceTravelled, bestAngle, and bestSpeed accordingly
                if (d > distanceTravelled && d <= distance) {
                    distanceTravelled = d;
                    bestAngle = degrees;
                    bestSpeed = speed;
                }
            }
        }
        
        // calculates error
        error = distance - distanceTravelled;

        // Print statements of best angle, speed, distance travelled, and error
        System.out.format("Best angle: %.2f%n", bestAngle);
        System.out.format("Best speed: %.2f%n", bestSpeed);
        System.out.format("Distance travelled: %.2f%n", distanceTravelled);
        System.out.format("Missed the target center by: %.2f%n", error);

    
        input.close();
    }
}
```

