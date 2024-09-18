
> [!NOTE] Power
> Notice that
> $n^{p}= (n^{p/2})^2$          $(\text{for even } p > 1)$

As such, a fast recursive way to implement a power method would be:
```java
/**
* @param p
* power to raise to
* @updates this
* @requires p >= 0
* @ensures this = #this ^ (p)
*/

@Override
public void power(int p) {
	assert p >= 0 : "Violation of: p >= 0";
	
	NaturalNumber originalNumber = new NaturalNumber2(this);
	
	if (p == 0) {
		this.setFromInt(1);
		return;
	}
	this.power(p / 2);
	this.multiply(originalNumber);  
	
	if (p % 2 != 0) {
		this.multiply(originalNumber);
	}
}
```

#code/snippet/recursion