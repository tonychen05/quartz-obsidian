When you "mod" something, you divide one number by another and take the remainder.

So: `5 mod 2 = 1` because $5/2=2$ with $R1$

The term "mod" stands for the *modulo* operation with `2` being the *modulus*

> [!WARNING] MOD!=REMAINDER
> 1 is the remainder, not necessarily the result of a modulo.

"Modular mathematics" is a type of math that deals with cyclic structures. The simplest representation is a clock. A question you could answer is:
	"If I start on a road trip at 6PM, what time would it be when I get to the destination 16 hours later?"

That would be `6 + 16 mod 12` which is 10.

## Modulo vs. Remainder

> [!TIP] Remember
> Modulo and remainder act the same when the numbers are positive but much differently when the numbers are **negative**.

Consider the following:
	`19 % -12`

Using regular math, $19/-12=-1$ with $R7$

Javascript, Java, and C# agree with this answer but Google Calculator and Ruby don't.

But why is there a discrepancy?

Using clock representation, consider the positive modulo `19 mod 12`:
![[Modulo_clock_positive.png|300]]
Starting at 12 and spinning clockwise 19 times yields 7.

However, what if the modulus was negative? `19 mod -12`:
![[Modulo_clock_negative.png|350]]

The modulus is -12 and thus to calculate this correctly is to relabel the clock so that the start is -12, OR spin the clock counterclockwise, which yields the same result

You can't number the clock starting with -1 and moving on to -2 because that would be moving backwards, continually decreasing until it suddenly makes a +12 jump, which is not how modulo works.

## Programming
Often times, the `%` is not a true modulo operator but rather a "remainder" operator that always takes the sign of the dividend.

To ensure that a remainder operator behaves like a modulo operator:
```java
/**
 * Computes {@code a} mod {@code b} as % should have been defined to work.
 *
 * @param a
 *            the number being reduced
 * @param b
 *            the modulus
 * @return the result of a mod b, which satisfies 0 <= {@code mod} < b
 * @requires b > 0
 * @ensures <pre>
 * 0 <= mod  and  mod < b  and
 * there exists k: integer (a = k * b + mod)
 * </pre>
 */
public static int mod(int a, int b) {
	int mod = a % b;

	if (b > 0) {
		if (mod < 0) {
			mod += b;
		}
	} else if (b < 0) {
		if (mod > 0) {
			mod += b;
		}
	}
	return mod;
}
```

OR: 
`mod = (a % b + b) % b` (Not tested)