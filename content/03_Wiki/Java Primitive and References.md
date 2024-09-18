Java types are divided into two different categories:
- Built-in types are **primitive types**
	- includes `boolean`, `char`, `int`, `double` (see [[Java Data Types]]
- All other types are called **reference types**
	- Includes `String`, `XMLTree`, `Scanner`, `SimpleReader`, ... (*no limit of other **user defined** types*)

## Reference and Object Values
A reference variable like `String s;` may be considered to have either of two values:
- The *reference value* of `s` is the *memory address* at which the object is stored
	- (e.g. an "id" or "serial number" of some place in memory)
- The *object value* of `s` is the mathematical model value of the object the reference `s` points to (ex: *"Go"*)]

> [!EXAMPLE] Strings
> ```java
> //creates new object with value "Hello World" which s1 points to
> String s1 = "Hello World"; 
> 
> //creates a new object with value "Hello World!" and s1 now points to new object. Nothing points to "Hello World" object anymore 
> s1 = s1 + "!" 
> 
> ```

[[Java Arrays]] is also a reference type

### Immutable Types
Objects whose value can not be changed after initialization such as Strings, XMLTree. 

More specifically, the object value cannot be changed without changing the reference value (primitive types) **OR** the reference type contains no methods that can directly change the object value without affecting the reference value

#### Aliasing
Occurs when multiple **references** are associated with the same object

> [!EXAMPLE] Java References and Aliasing
> ![[Java Reference and Aliasing_sketch]]

