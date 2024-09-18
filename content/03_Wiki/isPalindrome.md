# Recursion using substring
```java
/**
 * Checks whether a {@code String} is a palindrome.
 * 
 * @param s
 *            {@code String} to be checked
 * @return true if {@code s} is a palindrome, false otherwise
 * @ensures isPalindrome = (s = rev(s))
 */
private static boolean isPalindrome(String s) {
	if (s.length() == 0 || s.length() == 1)
		return true;
	else if (s.charAt(0) == s.charAt(s.length()-1)) {
		return (isPalindrome(s.substring(1, s.length()-1)));
	} else {
		return false;
	}
}
```

# Iteratively with Sequences and while loop
```java
 /**
 * Checks if a given {@code Sequence<Integer>} is a palindrome.
 *
 * @param s
 *            the {@code Sequence} to check
 * @return true if the given {@code Sequence} is a palindrome, false
 *         otherwise
 * @ensures isPalindrome = (s = rev(s))
 */
private static boolean isPalindrome(Sequence<Integer> s) {
	assert s != null : "Violation of: s is not null";

	int first = 0;
	int last = s.length() - 1;

	while (first < last) {
		if (s.entry(first).equals(s.entry(last))) {
			first += 1;
			last -= 1;
		} else {
			return false;
		}
	}

	return true;
}
```

# 


#code/snippet/recursion 