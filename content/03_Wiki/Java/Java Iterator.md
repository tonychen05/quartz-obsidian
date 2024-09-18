An `Iterator` is an object that can be used to loop through collections, like [[Java Data Types#ArrayList]] and [[HashSet]]. It is called an "iterator" because "iterating" is the technical term for looping.

A “collection” of things you can iterate on is called **iterable**

To use an Iterator, you must import it from the `java.util` package.

> [!INFO] Getting an Iterator
> The `iterator()` method can be used to get an `Iterator` for any collection

> [!WARNING] Iterator vs. For-Loop
> Trying to remove items using a **for loop** or a **for-each loop** would not work correctly because the collection is changing size at the same time that the code is trying to loop.

> [!NOTE] Looping Through a Collection
> To loop through a collection, use the `hasNext()` and `next()` methods of the `Iterator`

> [!NOTE] Removing Items from a Collection
> Iterators are designed to easily change the collections that they loop through. The `remove()` method can remove items from a collection while looping.

> [!EXAMPLE] Removing Items
> ```java
> import java.util.ArrayList;
> import java.util.Iterator;
> 
> public class Main {
>   public static void main(String[] args) {
>     ArrayList< Integer> numbers = new ArrayList< Integer>();
>     numbers.add(12);
>     numbers.add(8);
>     numbers.add(2);
>     numbers.add(23);
>     Iterator< Integer> it = numbers.iterator();
>     while(it.hasNext()) {
>       Integer i = it.next();
>       if(i < 10) {
>         it.remove();
>       }
>     }
>     System.out.println(numbers);
>   }
> }
> ```



