```java
/**
 * Returns the number of digits of {@code n}.
 * 
 * @param n
 *            {@code NaturalNumber} whose digits to count
 * @return the number of digits of {@code n}
 * @ensures numberOfDigits = [number of digits of n]
 */
private static int numberOfDigits(NaturalNumber n) {
	int digits = 0;
	
	if (n.isZero()) {
		return 0;
	} else {
		n.divideBy10();
		return (1 + numberOfDigits(n));
	}
}
```


```java
private static int numberOfDigits(NaturalNumber n) {
	int digits = 0;
	
	if (!n.isZero()) {
		int lastDigit = n.divideBy10();
		digit += (1 + numberOfDigits(n));
		n.multiplyBy10(lastDigit);
	}
	return digits
}
```

#code/snippet/recursion 