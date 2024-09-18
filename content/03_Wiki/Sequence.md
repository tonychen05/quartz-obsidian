
> [!INFO] Define
> an ordered collection (also known as a list)

The user can access elements by their integer index (position in the list)
#### Applications:
- sorting
- sequential access
### See:
- [[Java ArrayList]]

### Instance Methods
#### Flip() (Iterative)
```java
/**
 * Reverses ("flips") {@code this}.
 * 
 * @updates this
 * @ensures this = rev(#this)
 */
public void flip() {
	Sequence<Integer> tempSequence = new Sequence1L<>();
	int i = 0;
	int j = this.length() - 1;
	while (this.length() > 0) {
		tempSequence.add(i, this.remove(j));
		i++;
		j--;
	}
	this.transferFrom(tempSequence);
}
```
#### Flip() Recursive
```java
/**
 * Recursively reverses ("flips") {@code this}.
 * 
 * @updates this
 * @ensures this = rev(#this)
 */
public void flip() {
	Sequence<T> flipped = this.newInstance();
	if (this.length > 0) {
		sequence.extract(0, 1, flipped);
		flipped.insert(0, this.flip());
	}
	this.transferFrom(flipped);
}
```
Similar concept to [[reversedString]]


#data_structure 