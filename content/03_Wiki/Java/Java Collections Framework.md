---
aliases: []
---

# Collections Framework
- unified architecture for working with groups of items (collections)
- individual collection flavors are specified as **[[Java Data Types#Abstract Data Types|abstract]] data types (ADT's)**
	- allows the framework to focus on defining collection behavior
	- and collections can be applied to a variety of **concrete** types
- `java.util.Collection` is the root interface of the framework
	- it characterizes the essential behavior of a collection:
		- `size()`, `add()`, `remove()`

# Uses:
- ordered lists - `List, Stack, Queue, Deque` (double -ended queue)  
	- maintain positional indexing
	- duplicates and null allowed
- sets - `Set`
	- ensures no duplicates
	- null allowed (one)
- dictionaries / maps - `Map`
	- a set of pairs: key -> value
	- values are sorted and retrieved by key
	- no duplicate keys

# Collection Types:
- [[Sequence]]
- [[Stack]]
- [[Queue]]
- [[Deque]]
- [[Set]]
- [[Map]]

# java.util.Collections
**different from java.util.Collection (the interface)**
- fill
- max, min
- reverse
- sort
- shuffle
- rotate
- frequency
# ---
#java/datatype