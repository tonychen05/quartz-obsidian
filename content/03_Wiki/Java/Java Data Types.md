---
aliases:
  - generics
---

Primitive:
int, void, float, [[Java double]], boolean, byte, short, long, char, . . .

Reference
String, System, Array, Integer

[[Scanner]], . . . 

```java
import java.util.Scanner;
public class Greeting {
	public static void main(String[] args) {
		Scanner keyboard = new Scanner(System.in); 
		System.out.print("Enter your name: "); 
		String myName = keyboard.nextLine();
		System.out.println("Hello "+myName);
	}
}
```


# Abstract Data Types
- defines the essence, but not implementation of a type
- focus on the abilities needed
	- strings are things to concatenate, get characters and substrings from
	- lists are things to add items to, remove items from
	- print writers are things to record formatted text with
- are representation independent; specify *what* but not *how*
	- i.e. the interface
- allow multiple, interchangeable implementations

### See:
- [[Java Collections Framework]]

## Generics
- generic classes parameterize their constructors with **type variables**
- to be maximally useful, the [[Java Collections Framework|collections]] framework is **generic**
	- `Collection<T>`
	- `List<T>`
	- `Map<T>`
	- ...
- T can be any **object** type (use wrapper classes, not primative)
	- `List<String>` 
	- `List<Integer>`
	- `List<Boolean>`
	- ...
- but the operations remain the same (representation independent)

## [[Java ArrayList|ArrayList]]


# ---
#java/datatype 