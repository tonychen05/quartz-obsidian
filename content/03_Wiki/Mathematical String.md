Mathematical strings is a **mathematical model**

A string can be thought of as a series of zero or more **entries** of any other mathematical type, say, `T`
- `T` is called **entry type**
- This math type is called `string of T`


> [!WARNING] String != string
> `String` is a [[Java Data Types|programming type in Java]], and `string` is a mathematical type (often used to model program types)

Since we call the mathematical model of the Java primitive type *char* by the name **Character**, we have:
*type **String** is modeled by string of* **character**

## Mathematical Notation

> [!NOTE] Two Important Features of strings
> - There may be **duplicate** entries
> - The **order** of the entries is important

### Empty String
The **empty string**, a string with no entries at all, is denoted by `< >` or by `empty_string`
### Denoting Specific String
A particular string can be described by list its entries between `<` and `>` separated by commas.

> [!EXAMPLE] Denoting strings
> `< 1, 2, 3, 2 >`
> `< 'G', 'o' >`
> `< >`

### Concatenation
The **concatenation** of strings `s` and `t`, a string consisting of the entries of `s` followed by the entries of `t` is denoted by `s * t`

> [!EXAMPLE] Concatenating strings
> `< 1, 2 > * < 3, 2 > = < 1, 2, 3, 2 >`
> `< 'G', 'o' > * < > = < 'G', 'o' >`
> `< > * < 5, 2, 13 > = < 5, 2, 13 >`
> `< > * < > = < >`

---
# Related
---
- [[Set Operations]]
- [[Mathematical Models]]