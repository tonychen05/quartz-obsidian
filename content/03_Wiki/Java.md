# Origin
- Programming language developed in early 1990s by Sun Microsystems (now part of Oracle) 
- Based on C/C++ – Similar syntax, control, data structures – Imperative, object-oriented 
- Originally designed for interactive television, found its initial success in Internet applications – Now viewed as a general-purpose programming language 
- Currently enjoys widespread acceptance

# Compilation
- **Java complier** checks the **source code** of a program in a *.java* file
	- it generates **bytecode** for that program and saves it in a *.class* file
		- Eclipse has its own Java compiler that continually and incrementally compiles source code even as it is being edited; a compile-time error is seen immediately and bytecode is available immediately if no errors
		- A batch-style compiler called javac is part of the Java Development Kit (JDK)

# Execution
The **[[Java Virtual Machine (JVM)]]** is a virtual computer
	- The JVM is just like any other program that runs on real physical hardware (e.g., an Intel chip) and operating system (e.g., Linux, Mac OS X, Windows)
	- The “launcher” of the JVM for your computer and OS loads the JVM and your program’s .class file(s), and the JVM then executes your program by interpreting the bytecode that is loaded 
	- A launcher called java and the JVM are part of the **Java Runtime Environment (JRE)** for your computer and OS



#java 