**In essence:** a contract for a loop

In methods, a [[Java Method Contract|method contract]] describes what the method does with:
- precondition: property that is true *before* the call is made
- postcondition: property that is true *after* the call returns

In `while` **loops**, a [[Loop Invariants|loop invariant]] describes what a loop does with:
- **invariant**: a property that is true *every time* the code reaches a certain point
	- in the case of a loop invariant, the loop condition test

> [!EXAMPLE]
> ```java
> while (q.length() > 0) {
> 	T x = q.dequeue();
> 	this.enqueue(x);
> }
> ```
> 
> > [!EXAMPLE] Loop Contract/Loop Invariant
> > ```java
> > /**
> >  * @updates this, q
> >  * @maintains
> >  * this * q = #this * #q
> >  * /
> > ```

> [!NOTE] \#
> To say that a variable does not change
> - We need to talk about:
> 	- the **current values** of the variables
> 	- the **original values** of the variables (variable names prefixed with *#*)
