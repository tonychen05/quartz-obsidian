> [!INFO] Define: Abstract Class
> A kind of "partial" or "incomplete" class in Java that contains bodies for some but (typically) not all of the methods of the interfaces it claims to implement.

> [!EXAMPLE] Syntax
> ```java
> abstract class AC implements I {
> 	// ...
> }
> ```

> [!EXAMPLE] Example
> ```java
> public abstract class NaturalNumberSecondary implements NaturalNumber {
> 	// ...
> }
> ```

Because some methods still might not have bodies, Java will *not* let you **instantiate** an abstract class; that is, you cannot use an abstract class like a normal class and create a new object from it.

> [!EXAMPLE] The Bigger Picture: New Story ([[Object Oriented Programming (OOP)|old]])
> ![[Java_OOP_new.excalidraw]]

> [!NOTE] `Object` Implicitly
> The relation that `NaturalNumberSecondary` *extends* `Object` is **implicit**: every class that does not extend some other class directly extends `Object`

