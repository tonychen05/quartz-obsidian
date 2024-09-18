> [!INFO]
> Also called with `System.out.printf()`

> [!EXAMPLE] 
> ```java
> String name1 = "Fred";
> String name2 = "Barney";
> 
> System.out.format("Hello, %s and %s%n", name1, name2);
> ```

> [!EXAMPLE]
> ```java
> double = jb = 3.5325, jar = 1.5; ml, L
> System.out.format(
> "There are about %,d jellybeans in this %.2f liter jar %n",
> )
> ```

> [!NOTE]
> %\[flags\]\[width\]\[.precision\]conversion_character
> 

`%s` = string
`%d` = decimal integer
`%f` = float
`%n` or `\n` = new line
`\r` = [[carriage return]]

`%.7f` = prints a float to the seventh decimal place

### Related:
---
- MATLAB [[MATLAB fprintf]]
- Java String.format()
---

#java/method