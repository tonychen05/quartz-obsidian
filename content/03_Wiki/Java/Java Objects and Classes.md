---
aliases:
  - wrapper
  - abstraction
  - encapsulation
  - ubiquitous class
---
# Objects
  
In simple terms, Java objects are like containers that hold both data and methods (functions) that can operate on that data. Think of them as tangible things or entities in your program. Each object is an instance of a class, which acts as a blueprint defining what the object can do and what data it can store.

Objects are designed to hide details through **abstraction** and **encapsulation**.

> [!INFO] Define: Abstraction
> Suppression of conceptual detail to focus on essence

> [!INFO] Define: Encapsulation
> Projection of implementation detail so it can evolve without side effects

> [!EXAMPLE]
> OutputStream -> FilterOutputStream -> PrintStream -> System.out -> println()

> [!EXAMPLE]
> The following code creates an object of the Person class:
> ```java
> Person person = new Person();
> person.setName("John");
> person.setAge(30);
> System.out.println(person.getName()); // John
> System.out.println(person.getAge()); // 30
> ```

# Classes
- Classes define new data types that can be used to create program [[Java Objects and Classes#Objects]|objects]]
- Provide conceptual **abstractions** to address some use case
- **Encapsulate** data and methods into a single file and new data type
	- class data represent object state
	- class methods implement object behavior
- define what a caller can do via public methods and fields of the class

> [!EXAMPLE] Class Skeleton
> ```java
> public class Example {
> 	private int internalData; // stores object state
> 	
> 	public Example(int internalData) { // constructor (same name as class)
> 		this.internalData = internalData; 
> 	}
> 
> 	public void mutatorMethod() { internalData += 1; }
> 	public int accessorMethod() { return internalData; }
> }
> ```

> [!NOTE] this
> `this` is used to prevent shadowing of member variables by local ones or even just to signal member variables

> [!EXAMPLE] Usage
> 
> > [!FILE] Main.java 
> > ```java
> > public class Main {
> >   int x = 5;
> > }
> > ```
> 
> > [!FILE] Second.java
> > ```java
> > class Second {
> >   public static void main(String[] args) {
> >     Main myObj = new Main();
> >     System.out.println(myObj.x);
> >   }
> > }
> > ```
> 
> Running **Second.java** yields output `5`

## The Ubiquitous Class: Object
**EVERY** class in Java extends *Object*, which is a special built-in class that provides default implementations for the following instance methods (among a few other not so important ones):
- `boolean equals(Object obj)`
- `int hashCode()`
- `String toString()`

The issue is that these default implementations are terrible and typically depend on reference values not object values and thus need to be [[Java @Override|overridden]].
## Wrapper Classes
- Creates object out of primitive types
	- Character, Integer, Double, Boolean, ...
	- enables use with generics and other classes that only work with objects
	- provides additional functionality (e.g. parsing, equality checking, conversion to string)
- Still work with math and relational operators
	- but not equality! Use `Integer.equals()`, not `==`
	- can also use `compareTo()` instead of relational operators

> [!EXAMPLE] Wrapper Boxing and Unboxing
> ```java
> Integer num1 = new Integer(3); //valid, auto boxes
> 
> int num2 = new Integer(3); //valid, auto unboxes
> ```

### When and Why?
- Difference:
	- `int numA = 16; // int, a primitive value`
	- `Integer numB = 16; // instance of Integer, a reference value (an Object)`
- Why does wrapper class exist? Why not normal `int` and `char`
	- some classes are designed to work generically across many different types of Object 
		- (i.e. [[Java Data Types|generics]])
	- but primitives are not Objects
	- so the wrapper class feature allows a primitive-like Object that can be used
- When to use wrapper classes?
	- When a primitive won't work, e.g. when adding to an `ArrayList` or other collection
	- when you need the ability to assign `null` to the variable
# ---
#java/objects #java/classes