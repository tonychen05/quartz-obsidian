# Problem
Given an array of integers `nums` and an integer `target`, return the indices `i` and `j` such that `nums[i] + nums[j] == target` and `i != j`.

You may assume that _every_ input has exactly one pair of indices `i` and `j` that satisfy the condition.

Return the answer with the smaller index first.
# Intuition
- there is exactly one pair of indices that satisfy the condition
- `i != j`
- two for loops to check every possible combination?
	- works but is not time efficient

**INSTEAD**. Another way to look at this problem is that... `nums[j] = target - nums[i]`

Thus, we can find the exact number needed to satisfy the condition without checking each and every other digit and making multiple calculations. This can be done with a HashMap.
# Solution
In One-Pass using HashMap:
```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashMap = {} # value -> index

        for i, n in enumerate(nums):
            # nums[j] = target - nums[i]
            diff = target - n
            # if possible nums[j] is in the map, return the indices of nums[j] 
            # and the indices of nums[i]
            if diff in hashMap:
                return [hashMap[diff], i]
            # add current value to map
            hashMap[n] = i
```

Brute Force:
```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            for j in range(len(nums)):
                if ((i != j) and (nums[i] + nums[j] == target)):
                    return [i, j]
```



#leetcode/easy 