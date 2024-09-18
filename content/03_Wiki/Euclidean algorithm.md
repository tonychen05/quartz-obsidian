The Euclidean algorithm or Euclid's algorithm, is an efficient method for computing the **greatest common divisor** (GCD) of two integers (numbers), the **largest number that divides them both without a remainder**.

```
function gcd(a, b)
	if b = 0
		return a
	else
		return gcd(b, a mod b)
```

```java
if (!m.isZero()) {
	// If m != 0, GCD(m, n mod m)
	NaturalNumber nModM = n.divide(m);
	reduceToGCD(m, nModM);
	n.transferFrom(m);
}
```

