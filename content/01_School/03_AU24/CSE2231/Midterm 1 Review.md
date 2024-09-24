# Topics
- [ ] [[Mathematical Models]]
- [ ] Component-based software engineering
	- System thinking
		- Mathematical modeling
		- [[Design-by-Contract]]
			- precondition (requires)
			- postcondition (ensures)
		- client vs implementer view
- [ ] [[Java Method Contract]]
- [ ] [[Abstract Class]]
	- cannot be instantiated
- [ ] [[Testing]]
	- `this.constructorTest()`
	- single point of control over change
- [ ] [[Java varargs]]
- [ ] [[Kernel Implementations]]
	- Two-Level Thinking
		- implementer view: data representation, algorithms
		- client view: mathematical model, model contracts
	- Commutative diagram
		- **Concrete state space**: the set of all possible math model values of the data representation
		- **Abstract state space**: the set of all possible math model values as seen by a client
		- Abstract transition = method contract
		- Concrete transition = method body
	- Representation invariant
	- Abstraction function

> [!QUESTION] Can there be more than one concrete value that can be interpreted as the same abstract value?
> Yes, Stacks represents sequence (left stack and right stack)

> [!QUESTION] Can there ever be more than one possible correct (abstract) result of a call, according to a method's contract?
> Yes, such as `Set.removeAny()`

> [!QUESTION] Given a kernel, can there ever be more than one possible correct (concrete) result of a call, according to a method's body?
> Depending on frame of reference, you could argue either.

- [ ] [[Hashing]]
	- [[Modulo]]
- [ ] [[Binary Tree]]
	-  KNOW TRAVERSAL ORDERS
		- Pre-order: root is visited *before* left and right
		- In-order: root is visited *between* left and right
		- post-order: root is visited *after* left and right
- [ ] [[Binary Search Tree]]
	- total preorder?
- [ ] [[SortingMachine]]