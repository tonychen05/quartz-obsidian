```java
/**
 * DESCRIPTION OF PROGRAM HERE
 * @author YOUR NAME HERE
 * @author PARTNER NAME HERE
 * @version DATE HERE
 *
 */
import java.util.Arrays;
import java.util.Random;
import java.util.Scanner;

public class ArrayExercises {

    /**
     * Given a random number generator and a length, create a new array of that
     * length and fill it from left to right with random numbers between 1 and
     * 6.
     *
     * @param rnd
     *            Random number generator to draw numbers from
     * @param len
     *            size of array to create
     * @return array containing random numbers of length len
     */
    public static int[] randomArray(Random rnd, int len) {
        // TODO - complete this function

        int[] randomArray = new int[len];
        for (int i = 0; i < len; i++) {
           randomArray[i] = rnd.nextInt(6) + 1;
        }
        return randomArray;
    }

    /**
     * Given an array of ints, returns the sum of the values. The array can be
     * of any length.
     *
     * @param array
     *            array to total
     * @return sum of the elements in the array
     */
    public static int sumArray(int[] array) {
        // TODO - complete this function

        int sum = 0;
        for (int i = 0; i < array.length; i++) {
           sum += array[i];
        }
        return sum;
    }

    /**
     * Given two arrays of integers of the same size, interleaves the contents
     * of the two arrays with an element of arr1 followed by an element of arr2.
     * For example, if arr1 = < 1, 2, 3 > and arr2 = < 4, 5, 6 >, the array
     * returned by this method should be < 1, 4, 2, 5, 3, 6 >. The behavior of
     * this method is undefined for array parameters of different lengths.
     *
     * @param arr1
     *            first array to interleave
     * @param arr2
     *            second array to interleave
     * @return array of length arr1.length + arr2.length with contents
     *         interleaved as described above.
     */
    public static int[] mergeArrays(int[] arr1, int[] arr2) {
        // TODO - complete this function
        int length = arr1.length;
        int[] result = new int[2*length];
        for (int i = 0; i < length; i++) {
           result[2*i] = arr1[i];
           result[2 * i + 1] = arr2[i];
        }
           
        return result;
    }

    /**
     * Simple test program to test the methods given above. Uncomment the
     * relevant portions as you complete the methods above.
     *
     * @param args
     */
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter a random seed: ");
        int seed = Integer.parseInt(input.nextLine());
        Random rnd = new Random(seed);
        int[] randomArray1 = randomArray(rnd, 6);
        System.out.print("First random array: ");
        System.out.println(Arrays.toString(randomArray1));
        int sum1 = sumArray(randomArray1);
        System.out.println("The total is: " + sum1);
        int[] randomArray2 = randomArray(rnd, 6);
        System.out.print("Next random array: ");
        System.out.println(Arrays.toString(randomArray2));
        int sum2 = sumArray(randomArray2);
        System.out.println("The total is: " + sum2);
        int[] merged = mergeArrays(randomArray1, randomArray2);
        System.out.print("The arrays merged are: ");
        System.out.println(Arrays.toString(merged));
        input.close();
    }

}
```

Merge Arrays
Interleave Arrays

#java 