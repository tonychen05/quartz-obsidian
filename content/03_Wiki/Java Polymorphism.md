Polymorphism means "having many forms", and it occurs when we have many classes that are related to each other by inheritance.

Java and other [[Object Oriented Programming (OOP)|OOP]] languages decide which method body to use for any call to an instance method based on the **[[Java Interface#Object Type (Dynamic Type)|object type]]** of the receiver


##### Example:
For example, think of a superclass called `Animal` that has a method called `animalSound()`. Subclasses of Animals could be Pigs, Cats, Dogs, Birds - And they also have their own implementation of an animal sound (the pig oinks, and the cat meows, etc.):

```java
class Animal {
  public void animalSound() {
    System.out.println("The animal makes a sound");
  }
}

class Pig extends Animal {
  public void animalSound() {
    System.out.println("The pig says: wee wee");
  }
}

class Dog extends Animal {
  public void animalSound() {
    System.out.println("The dog says: bow wow");
  }
}
```