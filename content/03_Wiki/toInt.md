```java
/**
 * Reports the value of {@code n} as an {@code int}, when {@code n} is
 * small enough.
 * 
 * @param n
 *            the given {@code NaturalNumber}
 * @return the value
 * @requires n <= Integer.MAX_VALUE
 * @ensures toInt = n
 */
private static int toInt(NaturalNumber n) {
	if (n.isZero()) {
		return 0;
	}
	else {
		int digit = n.divideBy10();
		return toInt(n) * 10 + digit;
	}
}
```

#code/snippet/recursion #osu/cse/components/NaturalNumber 