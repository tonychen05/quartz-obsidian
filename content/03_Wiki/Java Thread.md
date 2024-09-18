A standard Java program executes in a **thread**, i.e., a single path of sequential code executing one step at a time.

For example, A [[Graphical User Interface|GUI]] program using Swing uses at least *two* threads rather than one
- the **initial thread** executes `main`
- an **event dispatch thread** executes everything else, including `actionPerformed`
