**Interpreting** a lower-level configuration (a.k.a. a **representation**) to get a higher-level value

## Example: `QueueKernel`
For `QueueKernel`, one idea is to represent a `Queue` variable's value by using a `java.util.List` variable

By convention (of the OSU CSE components), a kernel class that directly represents the new type using a component from the Java libraries that is very similar, has a name ending in "`L`"
	In this case, it is called `Queue1L`

#### Instance Variable
Each separate `Queue1L` object has its own distinct `java.util.List` variable that represents its object value

Note: In the code we will examine for `Queue1L`, there is a declaration of a private **instance variable** whose value is the `java.util.List` that represents one `Queue1L` object (namely, `this`)

## Documentation
There are really only two key design decisions that need to be recorded in (Javadoc) comments:
- The **representation invariant (`@convention`)**: Which "configurations" of values of the instance variables can ever arise
	- characterizes the values that the data representation (instance variables) might have at the *end* of each kernel method body, including the constructor(s)
	- **made to hold** by the method bodies' code, and it is *recorded* in the **convention** clause in a (Javadoc) comment for the kernel class
- The **abstraction function (`@correspondence`)**: How are the values of the instance variables to be interpreted to get an abstract value

> [!NOTE] `$this`
> `$this` is special notation to name the data representation of `this` in such comments.

> [!INFO] Define: Kernel Purity Rule
> No constructor or method body in the kernel class should call any public method from the same component family (no calls to `this.MethodName`)
> - Every public method in the component family relies (for its correctness) on the representation invariant being satisfied when it is called, and this might not be true when a call is made from inside a method of the kernel class

- No public kernel method should call any other public kernel method from the same class
- No public kernel method should call itself recursively
- No method (public or private) in the kernel class should call any layered/secondary method from the same component family





