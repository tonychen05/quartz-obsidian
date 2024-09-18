Recursion means "defining a problem in terms of itself". This can be a very powerful tool in writing algorithms.

Basically calling a function within the function

See( #code/snippet/recursion  for examples) 

# How It Works
First, the tracing table for the code making the call is **suspended** and that tracing table is **pushed onto the runtime [[stack]]**
- The runtime stack, often called simply "the stack", is effectively just a stack of tracing tables (think `Stack<TracingTable>`), each partially filled with the results of the code as executed so far 
Then, each tracing table is popped back and then evaluated
