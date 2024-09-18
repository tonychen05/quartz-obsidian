
> [!INFO] Definition: double
> Double is a data type in Java that can store a floating-point number with a precision of up to 15 digits. It is represented by the keyword `double`. Typically used for large numbers or repeating decimals.

> [!EXAMPLE]
> ```java
> double myDouble = 3.14159;
> ```

> [!WARNING] No Precision Operations
> ```java
> double ab = 0.1 + 0.2; // 0.30000000000000004
> 
> // To test for a threshold:
> boolean isEqual = Math.abs(ab - 0.3) < .000000001;
> ```
> This is due to "floating point math"

> [!TIP] Rounding Doubles
> ```java
> private static double round (double value, int precision) {
>         int scale = (int) Math.pow(10, precision);
>         return (double) Math.round(value * scale) / scale;
>     }
> ```

> [!WARNING] Order of Operations
> ```java
double abc = 1 / 3; // 0, because 1 (int) divided by 3 (int) = 0 (int)
// BUT...
double abc = 1.0 / 3.0; // 0.3333333333333333
> ```

#java/datatype/double #java/snippet/double/comparing #java/snippet/double/rounding