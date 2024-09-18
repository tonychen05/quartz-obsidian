```java
// CLEARS n

/**
 * Returns the product of the digits of {@code n}.
 *
 * @param n
 *            {@code NaturalNumber} whose digits to multiply
 * @return the product of the digits of {@code n}
 * @clears n
 * @ensures productOfDigits1 = [product of the digits of n]
 */
private static NaturalNumber productOfDigits1(NaturalNumber n) {
	NaturalNumber product = new NaturalNumber2(1);
	
	if (!n.isZero()) {
		NaturalNumber digit = new NaturalNumber2(n.divideBy10());
		product.multiply(digit);
		product.multiply(productOfDigits1(n));
	}
	return product;
}

// RESTORES n

/**
 * Returns the product of the digits of {@code n}.
 *
 * @param n
 *            {@code NaturalNumber} whose digits to multiply
 * @return the product of the digits of {@code n}
 * @ensures productOfDigits2 = [product of the digits of n]
 */
private static NaturalNumber productOfDigits2(NaturalNumber n) {
	NaturalNumber copy = new NaturalNumber2(n);
	NaturalNumber product = new NaturalNumber2(1);
	
	if (!n.isZero()) {
		NaturalNumber digit = new NaturalNumber2(copy.divideBy10());
		product.multiply(digit);
		product.multiply(productOfDigits2(copy));
	}
	return product;
}

```

#code/snippet/recursion #osu/cse/components/NaturalNumber 