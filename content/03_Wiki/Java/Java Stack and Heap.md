The stack and heap refer to the **memory** of a Java program.

**Primitive** data types (int, double, char, boolean) are stored in the **stack**.

**Reference** types (String, Scanner, SimpleWriter) are stored in the **heap**.
	- comparison using == will check for same ID rather than content


> [!EXAMPLE] Instantiating an Object
> `SimpleWriter out = new SimpleWriter1L()`
> **Stack**:
> out -> id(0)
> **Heap**:
> id(0) -> SimpleWriter1L()

> [!WARNING] Strings
> Strings are a little different. There is a "String Literal Pool" subspace in the heap

> [!TIP] Put Simply
> Stack stores primitive data types (simpler ones).
> Heap stores reference types (bigger ones like an object).





#java