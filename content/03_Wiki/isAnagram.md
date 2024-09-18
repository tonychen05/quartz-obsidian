# Problem
Given two strings `s` and `t`, return `true` if the two strings are anagrams of each other, otherwise return `false`.

An **anagram** is a string that contains the exact same characters as another string, but the order of the characters can be different.

# Intuition
- Strings must be the **same length** from the definition of an anagram
- If we know they are the same length, we can count each character in each string and compare the two
# Solution
Use two dictionary to compare the number of times each letter appears and then compare the equality of the array

```python
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # cannot be anagram if lengths are different
        if len(s) != len(t):
            return False

        # compare character count using dictionaries
        countS, countT = {}, {}

        # loop for however many characters there are
        for i in range(len(s)):
            countS[s[i]] = 1 + countS.get(s[i], 0)
            countT[t[i]] = 1 + countT.get(t[i], 0)
        return countS == countT
```

#leetcode/easy 