> [!EXAMPLE] Extend and Implement
> ![[NaturalNumber OOP Example_sketch.excalidraw]]

### The "Implement" Relation
The **implements** relation may hold between **a class and an interface**

If *C* **implements** *I*, then class *C* contains code for the behavior specified in interface *I*
- This means *C* has method bodies for instance methods whose contracts are specified in *I*
- The code for *C* looks like this:
	```java
	class C implements I {
		// bodies for methods specified in I
	}
	```

> [!NOTE] 
> The implements relation allows you to separate contracts from their implementations -- a **best practice** for component design

> [!WARNING] Inheritation
> **Not** each of `NaturalNumber1L` and `NaturalNumber2` contain code for all 21 methods introduced in, or inherited by, interface `NaturalNumber`

Java permits writing a kind of "partial" or "incomplete" class that contains bodies for some but (typically) not all of the methods of the interfaces it claims to implement. This is called an [[Abstract Class]].
### The "Extends" Relation ([[Java Inheritance]])
The **extends** relation may hold between:
	- Two interfaces
	- Two classes
In either case, if *B* **extends** *A* then *B* **inherits** all of the methods of *A*
	- This means *B* implicitly starts out with all the method contracts (for an interface) or all the method bodies (for a class) that *A* has 
	- *B* can then **add more** method contracts (for an interface) or method bodies (for a class)

---
# Related
---
- [[Java @Override]]
- [[Java Polymorphism]]
- 