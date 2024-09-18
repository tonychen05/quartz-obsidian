```java
private static String reversedString(String s) {
	if (s.length() == 0) {
		return s;
	} else {
		String sub = s.substring(1);
		String revSub = reversedString(sub)
		String result = revSub + s.charAt(0);
		return result;
	}
}
```


# Alternative: one return
```java
private static String reversedString(String s) {
	String result = s;
	
	if (s.length() > 0) {
		String sub = s.substring(1);
		String revSub = reversedString(sub)
		result = revSub + s.charAt(0);
	}
	return result;
}
```
#code/snippet/recursion 