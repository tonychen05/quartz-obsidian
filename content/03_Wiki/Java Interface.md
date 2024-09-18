The client description of a component must describe the values that variables of that type can assume. Such a description can be presented in different ways. A good description will be precise (no margin for error) and understandable (by human readers). The **mechanism** that is used in CSE 2221/2231 to make such a precise and understandable description is **mathematical modeling**([[Mathematical Models]].

Client descriptions of methods must describe all assumptions about the incoming values of all parameters, and must describe the corresponding outgoing values of all parameters. Such descriptions can be presented in different ways. Good descriptions will be precise (no margin for error) and understandable (by human readers). The **mechanism** that is used in CSE 2221/2231 to make such precise and understandable descriptions of methods is **contracts**, where each method contract consists of two sections, a requires clause and an ensures clause.

High quality software components should be organized into two distinct parts. One part describes **what** the component can do. We refer to this as the abstract part or **interface**. The second part provides code (the **how**) that implements the behavior described in the abstract part. We refer to this as the concrete part or [[Java Objects and Classes|class]]

> [!EXAMPLE] Method Contract in Interface
> `void setSeconds (int newSeconds)` 
> 
> Set `this.seconds` to `newSeconds` 
> 
> Parameters: 
> 
> `newSeconds` – the new seconds for `this` 
> 
> Updates: 
> 
> `this.seconds` 
> 
> Requires: 
> 
> `0 <= newSeconds <= 59`
> 
> Ensures:
> 
> `this.seconds = newSeconds`

## Declared Type (Static Type)
When a variable is declared using the name of an *interface* as its type, e.g.:
`NaturalNumber k = new NaturalNumber2();`
then its **declared type** is said to be an ***interface** type*

When a variable is declared using the name of a *class* as its type, e.g.:
`NaturalNumber2 k = new NaturalNumber2();`
then its declared type is said to be ***class** type*


> [!NOTE] Best Practice
> Best practice is for variables to be declared using *an **interface** type* but Java will let you use a class type

## Object Type (Dynamic Type)
When a variable is **instantiated** (an object for it to reference is constructed). e.g.:
`NaturalNumber k = new NaturalNumber2();`
then its **object type** is the class type from which the constructor comes.
	Here, the object type of `k` is `NaturalNumber2`

# ---
> [!INFO] Terminology
> When two interfaces are extended (`I1` extends `I2`), `I2` is a **sub/derived/child interface** of `I1`.
> Whereas `I1` is the **super/base/parent interface** of `I2`.



---
# Related
---
- [[Java Polymorphism]]
- [[Object Oriented Programming (OOP)#The "Implement" Relation]]
- [[Object Oriented Programming (OOP)#The "Extends" Relation ( Java Inheritance )]]
- [[Java Inheritance]]


#java/interface