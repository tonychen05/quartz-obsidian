The ***NaturalNumber*** component family allows you to manipulate natural numbers (i.e. non-negative integrers)
- Unlike *int* variable, a **NaturalNumber** variable has no upper bound
- On the other hand, you need to call methods to do arithmetic; there are no nice built-in operators (e.g., `+, -, *, ==, <` ) or literals (e.g., `0, 1, 2, 13` as with *int* variables

**NaturalNumber** extends **NaturalNumber-Kernel** extends **[[Standard]]**


> [!NOTE] **NaturalNumber-Kernal**
> This interface has a minimal set of methods that are *primitive* in the **NaturalNumber** component family.
> - Separating these ***kernel (primary) methods*** into their own interface identifies them as special in this regard.

All the methods for **NaturalNumber** are ***instance methods***


#osu/cse/components 