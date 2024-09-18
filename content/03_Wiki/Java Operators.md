![[Java Most Common Operators.png]]

## || and &&
Java or (||) and (&&) have to have a boolean on both sides.

Operators for **or (||) and (&&) use *short circuit evaluation***

> [!NOTE] Short Circuit Evaluation
> In Java logical operators, **if the evaluation of a logical expression exits in between before complete evaluation**, then it is known as Short-circuit. A short circuit happens because the result is clear even before the complete evaluation of the expression, and the result is returned.

> [!CHECK]- What does `boolean flag = false && true` return?
> It will return false and will "short-circuit" after the first `false`

> [!CHECK]- What does `boolean flag = true || false` return?
> Will return true and "short circuits" at the first `true`

## == and !=

> [!WARNING] Comparing Strings
> Use `.equals()` method
> > [!EXAMPLE] .equals() Syntax
> > ```java
> > String myStr1 = "Hello";
> > String myStr2 = "Hello";
> > String myStr3 = "Another String";
> > System.out.println(myStr1.equals(myStr2)); // Returns true because they are equal
> > System.out.println(myStr1.equals(myStr3)); // false
> > ```

## %

> [!WARNING] Best Practice
> Be careful with the remainder/modulus (%) operator: the second operand **must be positive**; in Java, it is not “clock arithmetic” (see [[Modulo]])



#java/operators