There are **four** parameter modes, each of which indicates a possible way that a method might change the value of the corresponding argument 

Parameter modes help us in three ways: 
- They concisely summarize which arguments might have their values modified by a call
- They make requires/ensures clauses shorter
- They allow us to perform “consistency checks” of contracts against certain simple errors

### Restores Mode
Upon return from a method call, a *restores-mode* parameter once again has its incoming value 
`@ensures x = #x`
- This is the **default parameter mode**

### Clears Mode
Upon return from a method call, a *clears-mode* parameter has an **initial value** for its type, i.e., a value that an assignment of the **no-argument constructor** could give it
`@ensures x = [an initial value for its type]`

### Replaces Mode
Upon return from a method call, a *replaces-mode* parameter has a value that might be changed from its incoming value, but the method's behavior **does not depend** on its incoming value

### Updates Mode
Upon return from a method call, an *updates-mode* parameter has a value that might be changed from its incoming value, and the method's behavior **does depend** on its incoming value


> [!WARNING] Replaces vs Updates
> Both *replaces* and *updates* indicate that the parameter can change value. But . . .
> for *replaces*, the behavior of the method is **independent** of the incoming value, 
> for *updates*, the behavior of the method is **dependent** 

#java 