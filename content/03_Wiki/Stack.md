
> [!INFO] Define: stack
> The Stack class represents a last-in-first-out (LIFO) stack of objects

User can "push" and "pop" things out
#### Applications:
- nested method execution
- undo / redo


### Instance Methods
#### Flip()
```java
/**
 * Reverses ("flips") {@code this}.
 * 
 * @updates this
 * @ensures this = rev(#this)
 */
public void flip() {
	Stack<T> tempStack = new Stack1L<>();
	while (this.length() > 0) {
		tempStack.push(this.pop());
	}
	this.transferFrom(tempStack);
}
```



#data_structure 
