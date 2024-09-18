# Default
Data members, classes, methods that are not declared using access modifiers i.e. having default access modifiers are accessible **only within the same package**

> [!EXAMPLE]
> ```java
> class Main 
> 	void display() { 
> 		System.out.println("Hello World!"); 
> 	} 
> }
> ```

# Private
The private access modifier is specified using the keyword ***private***. The methods or data members declared as private are accessible only **within the class** in which they are declared.

- Any other **class of** the **same package will not be able to access** these members.
- Top-level classes or interfaces can not be declared as private

Hence these modifiers in terms of application to classes, apply only to nested classes and not on top-level classes

> [!EXAMPLE]
> ```java
> private void main() {...}	
> ```

> [!Tip] 
> Generally, in a standalone program, all methods other than main should be `private`

# Protected
Specified using the keyword ***protected***

The methods or data members declared as protected are **accessible within the same package or subclasses in different packages.**

> [!EXAMPLE]
> ```java
> protected void main() {...}	
> ```
# Public
The public access modifier is specified using the keyword ***public***. 

- The public access modifier has the **widest scope** among all other access modifiers.
- Classes, methods, or data members that are declared as public are **accessible from everywhere** in the program. There is **no restriction** on the scope of public data members.

> [!EXAMPLE]
> ```java
> private void main() {...}	
> ```
# ---
#java 