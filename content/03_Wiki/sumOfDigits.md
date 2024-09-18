### int
```java
/**
 * Returns the sum of the digits of {@code n}.
 * 
 * @param n
 *            {@code NaturalNumber} whose digits to add
 * @return the sum of the digits of {@code n}
 * @ensures sumOfDigits = [sum of the digits of n]
 */
private static int sumOfDigits(NaturalNumber n) {
	if (n.isZero()) {
		return 0;
	} else {
		int digit = n.divideBy10();
		return (digit + sumOfDigits(n));
	}
}
```

### NaturalNumbers
```java
/**
 * Returns the sum of the digits of {@code n}.
 * 
 * @param n
 *            {@code NaturalNumber} whose digits to add
 * @return the sum of the digits of {@code n}
 * @ensures sumOfDigits = [sum of the digits of n]
 */
private static NaturalNumber sumOfDigits(NaturalNumber n) {
	NaturalNumber sum = new NaturalNumber2();
	
	if (!(n.isZero())) {
		NaturalNumber digit = new NaturalNumber2(n.divideBy10());
		sum.add(digit);
		sum.add(sumOfDigits(n));
	}
	return sum;
}
```

#code/snippet/recursion #osu/cse/components/NaturalNumber 