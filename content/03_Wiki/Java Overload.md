With **method overloading**, multiple methods can have the same name with different parameters:

> [!EXAMPLE] Same Method Name
> ```java
> int myMethod(int x)
> float myMethod(float x)
> double myMethod(double x, double y)
> ```


> [!EXAMPLE] Method Overloading
> ```java
> static int plusMethodInt(int x, int y) {
>   return x + y;
> }
> 
> static double plusMethodDouble(double x, double y) {
>   return x + y;
> }
> 
> public static void main(String[] args) {
>   int myNum1 = plusMethodInt(8, 5);
>   double myNum2 = plusMethodDouble(4.3, 6.26);
>   System.out.println("int: " + myNum1); // 13
>   System.out.println("double: " + myNum2); // 10.559999999999999
> }
> ```

