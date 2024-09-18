An **array** is a group of similar variables, all of the same type, and with systematically related names. 

Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value. (A [[Java Primitive and References|reference]] variable)

# Declaring Arrays
```java
String[] cars;
String[] cars = {"Volvo", "BMW", "Ford"};
```

To create an **empty** array:
```java
String[] cars = new String[3];
```

To create an array of integers:
```java
	int[] myNum = {10, 20, 30, 40};
```

# Array Indexing
## Reading Array
```java
int[] seq = {12, 15, 3, 7, 9};

int val = seq[3]; 
//val = 7
```
## Determining Length
```java
int[] seq = {12, 15, 3, 7, 9};

int len = seq.length;
// len = 5
```

# Array Methods
Part of the java.util.Arrays package
- Arrays.equals
- Arrays.copyOf
- Arrays.fill
- Arrays.toString
- Arrays.sort

# For-each loop
```java 
for (type variable : array) {}
//vs
for (int = 0; i < array.length; i++) {
type variable = array[i];
}
```

# Printing Arrays
## One-Dimension
```java
import java.util.Arrays;

public class Array {

    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5};

        System.out.println(Arrays.toString(array));
    }
}
// Output: [1, 2, 3, 4, 5]
```
## Multi-Dimensional
```java
import java.util.Arrays;

public class Array {

    public static void main(String[] args) {
        int[][] array = {{1, 2}, {3, 4}, {5, 6, 7}};

        System.out.println(Arrays.deepToString(array));
    }
}
// Output: [[1, 2], [3, 4], [5, 6, 7]]
```
# ---
#java/datatype/array