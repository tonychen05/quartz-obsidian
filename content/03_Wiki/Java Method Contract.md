---
aliases:
  - Quantification
---


> [!NOTE] Precondition `@requires`
> A **precondition** (requires clause) that characterizes the responsibility of the program that calls (uses) that method (client code) 

> [!NOTE] Postcondition `@ensures`
> A **postcondition** (ensures clause) that characterizes the responsibility of the program that implements that method (implementation code in the method body)

> [!EXAMPLE] Method Contract
```java
/**
* @param x number to take the square root of 
* @param epsilon allowed relative error 
* @return the approximate square root of x 
* @requires 
* x > 0 and epsilon > 0 
* @ensures <pre>
* sqrt >= 0 and
* [sqrt is within relative error epsilon
* of the actual square root of x]
* </pre>
*/ 
private static double sqrt(double x, double epsilon)
```

> [!NOTE] \#
> The `#` denotes **incoming** values. For example,
> `@ensures x = #x`
> means to ensure that the outgoing value `x` is the same as the **incoming** `x`. This specific code denotes a [[Parameter Modes|restore-mode parameter]]
## Responsibilities
Making sure the ***pre*condition** is true when a method is called is the responsibility of the [[Design-by-Contract|client]]
	As such, the client may assume the postcondition is true when the method returns

Making sure the ***post*condition** is true when a method is returned is the responsibility of the [[Design-by-Contract|implementer]]
# Quantification
**Universal quantification** is used when you want to say something is true for every combination of values that satisfy a certain property.

*Example*: "Every non-empty string has positive length."
```
for all s: string of T
	where (s /= < >)
   (|s| > 0)
```

> [!NOTE] Vacuously True
> A conditional or universal statement that is true because the antecedent cannot be satisfied.
> 
> I.e. the conditions never showed up to determine whether the statement is true or false
> - Example: If gravity turned off, I will go skydiving



**Existential quantification** is used when you want to say something is true for some combination of values.

*Example*: "Some positive integer is odd."
```
there exists n, k: integer
	(n > 0 and n = 2 * k + 1)
```