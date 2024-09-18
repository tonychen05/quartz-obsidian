# String
```java
public static int length(String s) {

	int count = 0;
	
	if (!s.isEmpty()) {
		count += 1 + length(s.substring(1));
	
	return count;
}
```
## Instance
```java
public int length() {
	int count = 0;

	if (!this.value.isEmpty()) {
		this.value = this.value.substring(1);
		count += 1 + this.value.length();
	}
	return count;
}
```
#code/snippet/recursion 