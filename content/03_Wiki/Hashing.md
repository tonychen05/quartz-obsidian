# Introduction
Assume that each call to a `Queue` kernel method executes in **constant time**, i.e., that the duration of a call is *independent* of the values of all the arguments, including the receiver.

For almost every type in the OSU CSE components, including `Queue`, each of the three `Standard` methods (`newInstance, clear, transferFrom`) takes constant time to execute.
## Execution Time
> [!EXAMPLE] Common Execution Times
> - Constant time `c`
> - Log time (`a * log(n) + b`)
> - Linear time (`a * n + b`)
> - n log n time (`a * n * log(n) + b`)
> - quadratic time (`a * n^2 + b * n + c`)
> - exponential time (`2^n`)

### Faster Execution
Option 1 (preferred): Reduce the **order of magnitude** of the running time (change from quadratic to linear to log time)

Option 2 (better than nothing): Reduce the **constant factor** that multiplies the dominant term of the running time (change from a larger slope for a linear function to a small slope) 

## Linear Search

> [!INFO] Define: Linear Search
> The algorithm that examines--potentially--every item in a collections (e.g., code like `moveToFront` in `Set2` and `Map2`) until it finds what it's looking for

The name reflects the fact that its execution time is a *linear function* of the size of the collection (e.g., $c_{7}\cdot |this|+c_{8}$)

### Faster Linear Search
- Goal: Reduce the constant factor in the execution time of linear search
	- i.e., reduce it from `a*n + b` to `(a/10)*n + b`
- Approach: Reduce the number of items that need to be examined to find the one you're looking for
	- `(a/10)*n + b = a*(n/10) + b`

Instead of searching through *all* the items, store the items in many smaller **buckets** and search through *only one bucket* that
1. Can be *quickly* identified, and
2. *MUST* contain the item you're looking for

This is the intuition for **hashing**.

# Hashing

> [!INFO] Define: Hashing
> _Hashing_ refers to the process of generating a fixed-size output from an input of variable size using the mathematical formulas known as hash functions.
> - a mathematical function that converts data into a string of characters that is difficult to decode

## The Process
Suppose you need to search through $n$ items of type `T`, and you decide to organize the items into $m$ buckets (has indices `0,1,...,m-1` in an array of buckets called a **hash table**.
- Given $x$ of type `T`, compute from it some `integer` value $h(x)$
	- $h(x)$ is the function that maps each value of type `T` to an `integer` is called a **hash function**
- Then, look in bucket number $h(x) \text{ mod }m$
	- by "reducing" the hash function result modulo $m$, you are guaranteed to get an index of some bucket
	- If you put the item in this bucket when you store it, then it is the only place you need to look for it when searching.

## The `hashCode` Function
- In Java, the type `Object` defines this instance method to compute $h$, i.e., as the programmatic version of a hash function:
	- `public int hashCode()`
- As a **best practice**, nearly every type should override the default implementation of this method (which uses the object reference value), which by default rarely meets the requirements necessary for the hashing idea to work!

### Requirements
The only requirement for the hashing idea to give *correct behavior* is that the has function $h$ should be a **total function**

In programming terms:
- `hashCode` has no precondition (so *every* input value has an `int` **hash value**)
- `hashCode` always returns the same `int` hash value for the same input value (not satisfied by the default implementation that comes with `Object`)

### Good Hash Functions
To result in **good performance** of the hashing idea (not just correct behavior), `hashCode` should also:
- give different output values for different input values
	- this can not be always achieved since there is a limited number of integers 
- execute in constant time

### Hashing is Empirical
- How well hashing distributes the data among buckets depends, in part, on the data themselves
- Hash function could always provide data that would result in no performance gain over linear search
	- Everything might fall into one bucket











