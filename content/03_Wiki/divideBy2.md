```java
/**
 * Divides {@code n} by 2.
 * 
 * @param n
 *            {@code NaturalNumber} to be divided
 * @updates n
 * @ensures 2 * n <= #n < 2 * (n + 1)
 */
private static void divideBy2(NaturalNumber n) {
	final NaturalNumber two = new NaturalNumber2(2);
	
	if (n.isZero()) {
		return;
	}
	else {
		if (n.compareTo(two) >= 0) {
			n.decrement();
			n.decrement();
			divideBy2(n);
			n.increment();
		} else {
			n.clear();
		}
	}
}
```

```java
public static void divideBy2(NaturalNumber n) {
	int ones = n.divideBy10();
	ones /= 2;
	int tens = n.divideBy10();
	if (tens % 2 == 1) {
		tens--;
		ones += 5;
	}
	n.multiplyBy10(tens);
	if (!n.isZero()) {
		divideBy2(n);
	}
	n.multiplyBy10(ones);
}
```
#code/snippet/recursion 