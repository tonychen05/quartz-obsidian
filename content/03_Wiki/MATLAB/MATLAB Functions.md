# Defining Functions
> [!INFO] Function Definition Line
> ```matlab
> function [out1, out2] = functionName(in1, in2, in3)
> ```

Output variables that the function will return, enclosed in *square* brackets

Input variables separated with commas within *round* brackets

> [!WARNING] Function Files
> Function files MUST be saved as the name it is called out as in the function definition line

> [!EXAMPLE]
> ```matlab
> function [area, perimeter] = rectangleCalc(a, b)
> % Calculate area and perimeter from dimensions of rectangle
> area = a * b;
> perimeter = 2 * (a+b);
> end
> ```


#matlab/functions