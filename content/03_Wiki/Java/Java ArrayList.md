- a type of `List`
- `add()`, `remove()`, `get()`, `set()`, `size()`, `clear()`
- a [[sequence]] that can grow and shrink
- length is called *size*, is changed by adds & removes
> [!NOTE] Initializing
> `import java.util.Lists`
> `import java.util.ArrayLists`
> `List<Integer> intL1 = new ArrayList<Integer>()`

> [!WARNING]
> Best practice is to declare an abstract type (List, not ArrayList), which makes the interface what's important

> [!EXAMPLE] Using ArrayList
```java
List<Integer> listOfInts = new ArrayList<>(); // initialize
listOfInts.add(1); listOfInts.add(8); listOfInts.add(2); // add
int three = listOfInts.size(); // size
int eight = listOfInts.get(1); // get
listOfInts.set(1,4); // set
int two = listOfInts.remove(2); // remove
```


# ---
### Related:
- [[Java Collections Framework]]
- [[Java Data Types]]

#java/datatype 